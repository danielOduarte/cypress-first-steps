describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialsAlert: '.oxd-alert'
}

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
   it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin12')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})