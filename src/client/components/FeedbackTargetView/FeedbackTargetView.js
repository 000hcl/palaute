import React from 'react'
/** @jsxImportSource @emotion/react */

import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Redirect,
  Link,
} from 'react-router-dom'

import {
  Box,
  Typography,
  Tab,
  Button,
  Link as MuiLink,
  Checkbox,
  FormControlLabel,
} from '@mui/material'

import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import {
  EditOutlined,
  ListOutlined,
  LiveHelpOutlined,
  PeopleOutlined,
  PollOutlined,
  ShareOutlined,
  ReviewsOutlined,
} from '@mui/icons-material'

import FeedbackTargetResults from '../FeedbackTargetResults'
import FeedbackView from '../FeedbackView'
import StudentsWithFeedback from '../StudentsWithFeedback'
import EditFeedbackResponse from '../EditFeedbackResponse'
import FeedbackTargetShare from '../FeedbackTargetShare'
import FeedbackLinksView from '../FeedbackLinksView'
import useFeedbackTarget from '../../hooks/useFeedbackTarget'
import useCourseRealisationSummaries from '../../hooks/useCourseRealisationSummaries'
import { RouterTab, RouterTabs, TabLabel } from '../common/RouterTabs'
import { getLanguageValue } from '../../util/languageUtils'
import feedbackTargetIsEnded from '../../util/feedbackTargetIsEnded'
import feedbackTargetIsOpen from '../../util/feedbackTargetIsOpen'
import feedbackTargetIsOld from '../../util/feedbackTargetIsOld'
import ExternalLink from '../common/ExternalLink'

import {
  getCoursePeriod,
  feedbackTargetIsDisabled,
  copyLink,
  getFeedbackPeriod,
  getCourseUnitSummaryPath,
  deleteResponsibleTeacher,
} from './utils'

import { LoadingProgress } from '../common/LoadingProgress'
import useAuthorizedUser from '../../hooks/useAuthorizedUser'
import FeedbackTargetSettings from '../FeedbackTargetSettings'
import FeedbackTargetLogs from '../FeedbackTargetLogs'
import ContinuousFeedback from '../FeedbackTargetContinuousFeedback'
import ErrorView from '../common/ErrorView'
import errors from '../../util/errorMessage'
import TeacherChip from '../common/TeacherChip'
import useOrganisations from '../../hooks/useOrganisations'
import { links } from '../../util/links'
import PercentageCell from '../CourseSummary/PercentageCell'
import apiClient from '../../util/apiClient'
import { TagChip } from '../common/TagChip'
import { FeedbackTargetViewContext } from './FeedbackTargetViewContext'

const styles = {
  datesContainer: {
    display: 'grid',
    gridGap: '0.2rem',
    gridTemplateColumns: 'auto 1fr',
    '& dt': {
      paddingRight: 3,
      gridColumn: 1,
    },
    '& dd': {
      gridColumn: 2,
    },
  },
  headingContainer: (theme) => ({
    display: 'flex',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  }),
  copyLinkButtonContainer: (theme) => ({
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingTop: theme.spacing(1),
    },
    '@media print': {
      display: 'none',
    },
  }),
  infoContainer: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
  teacherListContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  }),
  linkContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    gap: '1.5rem',
  }),
  hidePrint: {
    '@media print': {
      display: 'none',
    },
  },
}

const ResponsibleTeachersList = ({ teachers, isAdmin, onDelete }) => (
  <Box sx={styles.teacherListContainer}>
    {teachers.map((teacher) => (
      <TeacherChip
        key={teacher.id}
        user={teacher}
        onDelete={isAdmin ? () => onDelete(teacher) : undefined}
      />
    ))}
  </Box>
)

const ErrorComponent = ({ error }) => {
  const [enabled, setEnabled] = React.useState(
    Boolean(error.response?.data?.enabled),
  )
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const { id } = useParams()

  const onSubmit = async () => {
    const res = await apiClient.put(
      `/feedback-targets/${id}/enrolment-notification`,
      { enabled: !enabled },
    )
    const { enabled: newEnabled, email } = res.data
    setEnabled(newEnabled)
    enqueueSnackbar(
      t(
        `feedbackTargetView:${
          newEnabled ? 'notificationEnabled' : 'notificationDisabled'
        }`,
        { email },
      ),
      { autoHideDuration: 10_000 },
    )
  }

  return (
    <ErrorView
      message={errors.getFeedbackTargetError(error)}
      response={error.response}
    >
      {error.response?.status === 403 && (
        <FormControlLabel
          control={<Checkbox checked={enabled} onChange={onSubmit} />}
          label={t('feedbackTargetView:notifyOnEnrolment')}
        />
      )}
    </ErrorView>
  )
}

const FeedbackTargetView = () => {
  const { path, url } = useRouteMatch()
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const { feedbackTarget, isLoading, refetch, isLoadingError, error } =
    useFeedbackTarget(id, { retry: 0 })
  // If link to cur summary should not be shown, gets empty response when failSilentry: true
  const { courseRealisationSummaries: showCourseSummaryLink } =
    useCourseRealisationSummaries(feedbackTarget?.courseUnit?.courseCode, {
      failSilently: true,
      enabled:
        !isLoading &&
        (feedbackTarget?.accessStatus === 'RESPONSIBLE_TEACHER' ||
          feedbackTarget?.accessStatus === 'TEACHER'),
    })

  const courseUnit = feedbackTarget?.courseUnit
  const accessStatus = feedbackTarget?.accessStatus

  const { authorizedUser } = useAuthorizedUser()
  const isAdmin = authorizedUser?.isAdmin ?? false

  const isTeacher =
    (!isLoading &&
      (accessStatus === 'TEACHER' || accessStatus === 'RESPONSIBLE_TEACHER')) ||
    isAdmin

  const { organisations, isLoading: organisationsLoading } = useOrganisations()
  const organisation =
    isLoading || organisationsLoading || !courseUnit
      ? null
      : organisations?.find((org) => courseUnit.organisations[0].id === org.id)

  const isOrganisationAdmin = organisation?.access?.admin || isAdmin

  const context = React.useMemo(
    () => ({
      feedbackTargetId: id,
      isTeacher,
      isOrganisationAdmin,
      isAdmin,
    }),
    [id, isTeacher, isAdmin, isOrganisationAdmin],
  )

  if (isLoading) {
    return <LoadingProgress />
  }

  if (isLoadingError || !feedbackTarget) {
    return <ErrorComponent error={error} />
  }

  const {
    courseRealisation,
    opensAt,
    feedback,
    responsibleTeachers,
    teachers,
    feedbackResponseEmailSent,
    settingsReadByTeacher,
    feedbackCount,
    studentCount,
    continuousFeedbackEnabled,
  } = feedbackTarget

  const { courseCode } = courseUnit

  const isOpen = feedbackTargetIsOpen(feedbackTarget)
  const isEnded = feedbackTargetIsEnded(feedbackTarget)
  const isStarted = new Date() >= new Date(opensAt)
  const isDisabled = feedbackTargetIsDisabled(feedbackTarget)
  const isOld = feedbackTargetIsOld(feedbackTarget)

  const showFeedbacksTab =
    isAdmin ||
    ((isOrganisationAdmin || isTeacher) && isStarted) ||
    feedback ||
    isEnded
  const showContinuousFeedbackTab = continuousFeedbackEnabled
  const showEditFeedbackResponseTab =
    (isOrganisationAdmin || isTeacher) && isEnded && !isOld
  const showStudentsWithFeedbackTab =
    isAdmin || ((isOrganisationAdmin || isTeacher) && (isOpen || isEnded))
  const showLinksTab = isOrganisationAdmin || isTeacher
  const showSettingsTab = isOrganisationAdmin || isTeacher
  const showLogsTab = isAdmin
  const showTags = feedbackTarget?.courseRealisation?.tags?.length > 0

  const handleCopyLink = () => {
    const link = `https://${window.location.host}/targets/${id}/feedback`
    copyLink(link)
    enqueueSnackbar(`${t('feedbackTargetView:linkCopied')}: ${link}`, {
      variant: 'info',
    })
  }

  if (isDisabled && !isTeacher) {
    enqueueSnackbar(t('feedbackTargetView:feedbackDisabled'), {
      variant: 'error',
    })

    return <Redirect to="/" />
  }

  const coursePeriod = getCoursePeriod(courseRealisation)
  const feedbackPeriod = getFeedbackPeriod(feedbackTarget)
  const coursePageUrl = links.getCoursePage(feedbackTarget)
  const wikiLink = links.teacherInstructions[i18n.language]
  const courseSummaryPath = getCourseUnitSummaryPath(feedbackTarget)

  const courseRealisationName = getLanguageValue(
    courseRealisation?.name,
    i18n.language,
  )

  const courseUnitName = getLanguageValue(courseUnit?.name, i18n.language)

  const visibleCourseCode =
    courseRealisationName.indexOf(courseCode) > -1 ? '' : `, ${courseCode}`

  const handleDeleteTeacher = async (teacher) => {
    const displayName = `${teacher.firstName} ${teacher.lastName}`

    const message = t(
      'feedbackTargetView:deleteResponsibleTeacherConfirmation',
      { name: displayName },
    )

    // eslint-disable-next-line no-alert
    if (window.confirm(message)) {
      try {
        await deleteResponsibleTeacher(feedbackTarget, teacher)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }

      refetch()
    }
  }

  return (
    <FeedbackTargetViewContext.Provider value={context}>
      <Box mb={3}>
        <div css={styles.headingContainer}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h4" component="h1">
              {courseUnitName}
              {visibleCourseCode}
            </Typography>
            <Box mt={1} />
            <Typography variant="body1" component="h2">
              {courseRealisationName}
            </Typography>
            {organisation && (
              <MuiLink
                to={`/organisations/${organisation.code}`}
                component={Link}
                underline="hover"
              >
                {getLanguageValue(organisation.name, i18n.language)}
              </MuiLink>
            )}
          </Box>
          {isTeacher && (
            <div css={styles.copyLinkButtonContainer}>
              <Button
                startIcon={<CopyIcon />}
                color="primary"
                onClick={handleCopyLink}
              >
                {t('feedbackTargetView:copyLink')}
              </Button>
            </div>
          )}
        </div>
        <Box sx={styles.infoContainer}>
          <Box mr="auto">
            <dl css={styles.datesContainer}>
              <Typography color="textSecondary" variant="body2" component="dt">
                {t('feedbackTargetView:coursePeriod')}:
              </Typography>

              <Typography color="textSecondary" variant="body2" component="dd">
                {coursePeriod}
              </Typography>

              <Typography color="textSecondary" variant="body2" component="dt">
                {t('feedbackTargetView:feedbackPeriod')}:
              </Typography>

              <Typography color="textSecondary" variant="body2" component="dd">
                {feedbackPeriod}
              </Typography>

              {continuousFeedbackEnabled && (
                <>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="dt"
                  >
                    {t('feedbackTargetView:continuousFeedbackTab')}:
                  </Typography>

                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="dd"
                  >
                    {coursePeriod}
                  </Typography>
                </>
              )}
            </dl>

            <Box sx={[styles.linkContainer, styles.hidePrint]}>
              <ExternalLink href={coursePageUrl}>
                {t('feedbackTargetView:coursePage')}
              </ExternalLink>

              {isTeacher && (
                <ExternalLink href={wikiLink}>
                  {t('footer:wikiLink')}
                </ExternalLink>
              )}

              {isTeacher && showCourseSummaryLink && (
                <MuiLink
                  to={courseSummaryPath}
                  component={Link}
                  underline="hover"
                >
                  {t('feedbackTargetView:courseSummary')}
                </MuiLink>
              )}
            </Box>
          </Box>
          {isTeacher && (
            <Box mt="1rem" mr="3rem">
              <Typography gutterBottom>
                {t('feedbackTargetView:studentsWithFeedbackTab')}
              </Typography>
              <Box display="flex">
                <PercentageCell
                  label={`${feedbackCount}/${studentCount}`}
                  percent={(feedbackCount / studentCount) * 100}
                />
              </Box>
            </Box>
          )}
          {showTags && (
            <Box mt="1rem">
              <Typography gutterBottom>{t('common:studyTracks')}</Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                width="20rem"
              >
                {feedbackTarget.courseRealisation.tags.map((tag) => (
                  <TagChip key={tag.id} tag={tag} language={i18n.language} />
                ))}
              </Box>
            </Box>
          )}

          {!!responsibleTeachers.length && (
            <Box mt="1rem" ml="1rem">
              <Typography gutterBottom>
                {t('feedbackTargetView:responsibleTeachers')}
              </Typography>
              <ResponsibleTeachersList
                teachers={responsibleTeachers}
                isAdmin={isAdmin}
                onDelete={handleDeleteTeacher}
              />
            </Box>
          )}

          {!!teachers.length && (
            <Box mt="1rem" ml="1rem">
              <Typography gutterBottom>
                {t('feedbackTargetView:teachers')}
              </Typography>
              <ResponsibleTeachersList
                teachers={teachers}
                isAdmin={isAdmin}
                onDelete={handleDeleteTeacher}
              />
            </Box>
          )}
        </Box>
      </Box>

      <Box mb={2} sx={styles.hidePrint}>
        <RouterTabs
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label={
              feedback && isOpen ? (
                <TabLabel
                  icon={<EditOutlined />}
                  text={t('feedbackTargetView:editFeedbackTab')}
                />
              ) : (
                <TabLabel
                  icon={<LiveHelpOutlined />}
                  text={t('feedbackTargetView:surveyTab')}
                />
              )
            }
            component={Link}
            to={`${url}/feedback`}
          />
          {showFeedbacksTab && (
            <RouterTab
              icon={<PollOutlined />}
              label={t('feedbackTargetView:feedbacksTab')}
              to={`${url}/results`}
            />
          )}
          {showContinuousFeedbackTab && (
            <RouterTab
              icon={<ReviewsOutlined />}
              label={t('feedbackTargetView:continuousFeedbackTab')}
              to={`${url}/continuous-feedback`}
            />
          )}
          {showEditFeedbackResponseTab && (
            <RouterTab
              icon={<EditOutlined />}
              label={t('feedbackTargetView:editFeedbackResponseTab')}
              to={`${url}/edit-feedback-response`}
              badge={!feedbackResponseEmailSent}
            />
          )}
          {showSettingsTab && (
            <RouterTab
              icon={<EditOutlined />}
              label={t('feedbackTargetView:surveySettingsTab')}
              to={`${url}/edit`}
              badge={!settingsReadByTeacher}
            />
          )}
          {showLinksTab && (
            <RouterTab
              icon={<ShareOutlined />}
              label={t('feedbackTargetView:shareTab')}
              to={`${url}/share`}
            />
          )}
          {showStudentsWithFeedbackTab && (
            <RouterTab
              icon={<PeopleOutlined />}
              label={t('feedbackTargetView:studentsWithFeedbackTab')}
              to={`${url}/students-with-feedback`}
            />
          )}
          {isAdmin && (
            <RouterTab
              icon={<ListOutlined />}
              label="Togen"
              to={`${url}/togen`}
            />
          )}
          {showLogsTab && (
            <RouterTab
              icon={<ListOutlined />}
              label="Logs"
              to={`${url}/logs`}
            />
          )}
        </RouterTabs>
      </Box>

      <Switch>
        <Route path={`${path}/edit`} component={FeedbackTargetSettings} />
        <Route path={`${path}/results`} component={FeedbackTargetResults} />
        <Route path={`${path}/feedback`} component={FeedbackView} />
        <Route
          path={`${path}/continuous-feedback`}
          component={ContinuousFeedback}
        />
        <Route
          path={`${path}/students-with-feedback`}
          component={StudentsWithFeedback}
        />
        <Route path={`${path}/share`} component={FeedbackTargetShare} />
        <Route path={`${path}/togen`} component={FeedbackLinksView} />
        <Route
          path={`${path}/edit-feedback-response`}
          component={EditFeedbackResponse}
        />
        <Route path={`${path}/logs`} component={FeedbackTargetLogs} />
        <Redirect to={`${path}/feedback`} />
      </Switch>
    </FeedbackTargetViewContext.Provider>
  )
}

export default FeedbackTargetView
