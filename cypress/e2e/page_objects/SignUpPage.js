//SignUp Page

class SignUpPage {

    get nameInput() {
      return cy.get("[data-qa='signup-name']");
    }
  
    get emailInput() {
      return cy.get("[data-qa='signup-email']");
    }
  
    get signUpButton() {
      return cy.contains('button', 'Signup');
    }
  
    signUpWithRandomEmail(name) {
      const randomString = Math.random().toString(36).substring(7);
      const baseEmail = 'santiagomarin';
      const randomEmail = `${baseEmail}+${randomString}@domain.com`;
  
      this.nameInput.type(name);
      this.emailInput.type(randomEmail);
      this.signUpButton.click();
    }
  }
  
  export default new SignUpPage();