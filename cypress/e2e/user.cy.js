import { eq } from 'lodash'
import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialsAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  middleNameField: '[name="middleName"]',
  lastNameField: '[name="lastName"]',
  employeeID: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  otherID: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  driversLicense: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  dlExpireDate: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',

}


  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Daniel")
    cy.get(selectorsList.middleNameField).clear().type("Oliveira")
    cy.get(selectorsList.lastNameField).clear().type("Duarte")
    cy.get(selectorsList.employeeID).clear().type("800800800")
    cy.get(selectorsList.otherID).clear().type("123456789")
    cy.get(selectorsList.driversLicense).clear().type("987654321")
    cy.get(selectorsList.dlExpireDate).clear().type("2026-04-27")
  })
   
  
  
  
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.username)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})