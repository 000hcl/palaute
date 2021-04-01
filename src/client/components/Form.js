import React, { useEffect } from 'react'
import { Button, Container } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'

import {
  reSubmitFormAction,
  submitFormAction,
  getUserCourseFeedbackAction,
} from '../util/redux/formReducer'
import { setError } from '../util/redux/errorReducer'
import { getCoursesAction } from '../util/redux/courseReducer'

import Question from './QuestionBase'
import { getCourseQuestionsAction } from '../util/redux/questionReducer'

const Form = () => {
  const dispatch = useDispatch()
  const courseId = useParams().id
  const history = useHistory()
  const form = useSelector((state) => state.form)
  const courseData = useSelector((state) => state.courses)
  const questions = useSelector((state) => state.questions)

  useEffect(() => {
    dispatch(getCoursesAction())
    dispatch(getUserCourseFeedbackAction(courseId))
  }, [])

  // we must ensure that courses have been created before getting questions
  useEffect(() => {
    dispatch(getCourseQuestionsAction(courseId))
  }, [courseData.pending])

  const handleSubmit = (event) => {
    event.preventDefault()
    const answers = form.data
    let complete = true
    questions.data.questions.forEach((question) => {
      if (
        !question.required ||
        (answers[question.id] !== undefined && answers[question.id] !== '')
      )
        return
      dispatch(setError(question.id))
      complete = false
    })
    if (complete) {
      if (form.found) {
        dispatch(reSubmitFormAction(answers, form.feedbackId))
      } else {
        dispatch(submitFormAction(answers, courseId))
      }
      history.push(`/view/${courseId}`)
    }
  }

  if (courseData.pending || form.pending || questions.pending) return null

  const currentCourse = courseData.data.find((course) => course.id === courseId)

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="md">
        <h1>{currentCourse.name.fi}</h1>
        {questions.data.questions.map((question) => (
          <Question question={question} key={question.id} />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Anna palautetta!
        </Button>
      </Container>
    </form>
  )
}

export default Form
