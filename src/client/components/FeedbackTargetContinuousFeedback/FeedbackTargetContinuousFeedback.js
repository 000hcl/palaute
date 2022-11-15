import React, { useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Box, Paper, Typography, Alert, Button } from '@mui/material'
import { Form, Formik } from 'formik'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

import useFeedbackTargetContinuousFeedbacks from '../../hooks/useFeedbackTargetContinuousFeedbacks'
import { LoadingProgress } from '../common/LoadingProgress'
import FormikTextField from '../common/FormikTextField'
import { sendContinuousFeedbackResponse } from './utils'

const styles = {
  button: {
    width: 'fit-content',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const ResponseForm = ({ feedbackId, setShow, refetch, response = '' }) => {
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation()

  const { id } = useParams()

  const handleSubmit = async (values) => {
    try {
      if (!values.response.length) {
        enqueueSnackbar(t('norppaFeedback:feedbackLengthError'), {
          variant: 'error',
        })
      }

      await sendContinuousFeedbackResponse(values, id, feedbackId)

      setShow(false)
      refetch()

      enqueueSnackbar(
        t('feedbackTargetView:continuousFeedbackResponseSuccessAlert'),
        {
          variant: 'success',
          autoHideDuration: 6000,
        },
      )
    } catch (e) {
      enqueueSnackbar(t('unknownError'), { variant: 'error' })
    }
  }

  return (
    <Box mb={3}>
      <Formik initialValues={{ response }} onSubmit={handleSubmit}>
        {({ values, isSubmitting }) => (
          <Form sx={styles.container}>
            <FormikTextField
              name="response"
              label={t('feedbackTargetView:continuousFeedbackResponse')}
              helperText={t(
                'feedbackTargetView:continuousFeedbackResponseInfo',
              )}
              fullWidth
              minRows={4}
              multiline
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!values.response.length || isSubmitting}
              sx={styles.button}
            >
              {t('feedbackTargetView:sendContinuousFeedbackResponse')}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const ResponseItem = ({ feedbackId, response, refetch }) => {
  const { t } = useTranslation()

  const [showEdit, setShowEdit] = useState(false)

  return (
    <Box ml={2} mt={-1} mb={2}>
      <Paper>
        <Box padding={2} marginBottom={2}>
          <Typography variant="body2">
            {t('feedbackTargetView:continuousFeedbackResponse')}
          </Typography>
          <Typography variant="body1">{response}</Typography>
          <Box display="flex" justifyContent="flex-end" mt={-2}>
            <Button onClick={() => setShowEdit(!showEdit)}>
              {showEdit
                ? t('feedbackTargetView:closeRespondContinuousFeedback')
                : t('feedbackTargetView:editContinuousFeedbackResponse')}
            </Button>
          </Box>
        </Box>
      </Paper>
      {showEdit && (
        <ResponseForm
          feedbackId={feedbackId}
          setShow={setShowEdit}
          refetch={refetch}
          response={response}
        />
      )}
    </Box>
  )
}

const FeedbackItem = ({ feedback, refetch }) => {
  const { t } = useTranslation()

  const { id, createdAt, data, response } = feedback

  const [showResponse, setShowResponse] = useState(false)

  return (
    <Box>
      <Paper>
        <Box padding={2} marginBottom={2}>
          <Typography variant="body1">{data}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" alignSelf="flex-end">
              {format(new Date(createdAt), 'dd.MM.yy HH.mm')}
            </Typography>
            {!response && (
              <Button onClick={() => setShowResponse(!showResponse)}>
                {showResponse
                  ? t('feedbackTargetView:closeRespondContinuousFeedback')
                  : t('feedbackTargetView:respondContinuousFeedback')}
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
      {response && (
        <ResponseItem feedbackId={id} response={response} refetch={refetch} />
      )}
      {showResponse && (
        <ResponseForm
          feedbackId={id}
          setShow={setShowResponse}
          refetch={refetch}
        />
      )}
    </Box>
  )
}

const FeedbackTargetContinuousFeedback = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  const { continuousFeedbacks, isLoading, refetch } =
    useFeedbackTargetContinuousFeedbacks(id)

  if (isLoading) {
    return <LoadingProgress />
  }

  if (!continuousFeedbacks) {
    return <Redirect to="/" />
  }

  const sortedFeedbacks = continuousFeedbacks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  )

  return (
    <Box margin={3}>
      <Typography mb={1} textTransform="uppercase">
        {t('feedbackTargetView:continuousFeedbackGiven')}
      </Typography>
      {sortedFeedbacks.length ? (
        sortedFeedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            feedback={feedback}
            refetch={refetch}
          />
        ))
      ) : (
        <Alert severity="info">
          {t('feedbackTargetView:noContinuousFeedbackGiven')}
        </Alert>
      )}
    </Box>
  )
}

export default FeedbackTargetContinuousFeedback
