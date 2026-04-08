import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialsAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'

}


  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
  })
   
  
  
  
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.username)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})