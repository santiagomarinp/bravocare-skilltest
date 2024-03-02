// Login Page

class LoginPage {
    navigateToLoginPage() {
      cy.visit('https://automationexercise.com/login');
    }
  
    fillEmail(randomEmail) {
        cy.get("[data-qa='login-email']").type(randomEmail);
    }
  
    fillPassword(password) {
        cy.get("[data-qa='login-password']").type(password);
    }
  
    submit() {
        cy.get("[data-qa='login-button']").click();
    }
  }
  
  export default new LoginPage();