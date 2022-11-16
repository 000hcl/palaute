const { baseUrl } = require('../support')

describe('Continuous feedback', () => {
  it('Teacher can set continuous feedback active', () => {
    cy.setUpSecondaryTeacherView()
    cy.loginAsSecondaryTeacher()
    cy.visit(`${baseUrl}/targets/163/settings`)

    cy.get('[data-cy=activateContinuousFeedback]').click()

    cy.contains('Information has been saved')
  })

  it('Student can give continuous feedback', () => {
    cy.setFeedbackNotYetOpen()
    cy.loginAsStudent()

    cy.visit(`${baseUrl}`)

    cy.get('[data-cy=continuousTab]').click()
    cy.get('[data-cy=giveContinuousFeedback]').click()

    cy.get('textarea').first().type('Giving continuous feedback')

    cy.get('button').last().click()

    cy.contains('Feedback has been sent succesfully')
    cy.contains('Giving continuous feedback')
  })

  it('Teacher can reply to continuous feedback', () => {
    cy.setUpSecondaryTeacherView()
    cy.loginAsSecondaryTeacher()
    cy.visit(`${baseUrl}/targets/163/continuous-feedback`)

    cy.contains('Giving continuous feedback')

    cy.get('button').last().click()
    cy.get('textarea').first().type('Responding to continuous feedback')
    cy.get('button').last().click()

    cy.contains('Response sent succesfully')
    cy.contains('Responding to continuous feedback')
  })

  it('Student can see continuous feedback response', () => {
    cy.setFeedbackNotYetOpen()
    cy.loginAsStudent()

    cy.visit(`${baseUrl}/targets/163/continuous-feedback`)
    cy.contains('Responding to continuous feedback')
  })
})
