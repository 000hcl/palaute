import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Box, Alert } from '@mui/material'
import useFeedbackTarget from '../../hooks/useFeedbackTarget'
import StudentTable from './StudentTable'
import useStudentsWithFeedback from '../../hooks/useStudentsWithFeedback'
import { LoadingProgress } from '../common/LoadingProgress'

const StudentsWithFeedback = () => {
  const { t } = useTranslation()
  const { id } = useParams()

  const { feedbackTarget, isLoading: feedbackTargetIsLoading } =
    useFeedbackTarget(id)

  const { students, isLoading: studentsIsLoading } = useStudentsWithFeedback(id)

  const isLoading = feedbackTargetIsLoading || studentsIsLoading

  if (isLoading) {
    return <LoadingProgress />
  }

  if (!feedbackTarget || !students) {
    return <Redirect to="/" />
  }

  const noFeedbackALert = (
    <Box mb={2}>
      <Alert severity="info">{t('studentsWithFeedback:noFeedbackInfo')}</Alert>
    </Box>
  )

  return (
    <>
      {students.length === 0 && noFeedbackALert}
      {students.length > 0 && (
        <StudentTable students={students} feedbackTarget={feedbackTarget} />
      )}
    </>
  )
}

export default StudentsWithFeedback
