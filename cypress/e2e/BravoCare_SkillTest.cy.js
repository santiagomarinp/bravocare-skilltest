import LoginPage from './page_objects/LoginPage';
import ShoppingPage from './page_objects/ShoppingPage';
import PaymentPage from './page_objects/PaymentPage';
import ContactPage from './page_objects/ContactPage';


describe("BravoCare Skill Test 1", () => {
  it("tests BravoCare Skill Test 1", () => {

    // Step 1: Visit the website and scroll halfway down
    cy.visit("https://automationexercise.com/");
    cy.get("div:nth-of-type(25) div.choose a").click();

    // Step 2: Choose a product and view it
    cy.location("href").should("eq", "https://automationexercise.com/product_details/30");
    
    // Step 3: Enter quantity
      const shoppingPage = new ShoppingPage();
      shoppingPage.clearQuantityInput();
      shoppingPage.setQuantity("5");
      shoppingPage.clickAddToCartButton();
      shoppingPage.clickViewCartLink();
  
    // Step 6: Click on Proceed to Checkout
    cy.contains('Proceed To Checkout').click();

    // Step 7: Click on Register/login from pop-up
    cy.get("#do_action u").click();
    cy.location("href").should("eq", "https://automationexercise.com/login");

    // Step 8: Enter name and email for Signing up
    cy.get("[data-qa='signup-name']").type("Santiago QA");
    const randomString = Math.random().toString(36).substring(7);
    const baseEmail = 'santiagomarin';
    const randomEmail = `${baseEmail}+${randomString}@domain.com`;
    cy.get("[data-qa='signup-email']").type(randomEmail);
    cy.get('button').contains('Signup').click()
    
    // Step 9: Fill information and Create Account
    cy.get("#id_gender1").click();
    const password = 'passwordBravo!';
    cy.get("[data-qa='password']").type(password);
    cy.get("[data-qa='days']").select('16');
    cy.get("[data-qa='months']").select('September');
    cy.get("[data-qa='years']").select('1982');
    cy.get("[data-qa='first_name']").type("Santiago");
    cy.get("[data-qa='last_name']").type("Marin");
    cy.get("[data-qa='company']").type("BravoCare QA");
    cy.get("[data-qa='address']").type("LA 2024");
    cy.get("[data-qa='country']").select("United States");
    cy.get("[data-qa='state']").type("California");
    cy.get("[data-qa='city']").type("Los Angeles");
    cy.get("[data-qa='zipcode']").type("90001");
    cy.get("[data-qa='mobile_number']").click();
    cy.get("[data-qa='mobile_number']").type("3168646615");
    cy.get("[data-qa='create-account']").click();
    cy.location("href").should("eq", "https://automationexercise.com/account_created");
  
    // Step 10: Click on Continue under "Account Created" title
    cy.get("[data-qa='continue-button']").click();
    cy.location("href").should("eq", "https://automationexercise.com/");
    
    // Step 11: Click on the cart on the header
    cy.get("#header li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "https://automationexercise.com/view_cart");
    
    // Step 12: Click on Proceed to Checkout    
    cy.get("#do_action > div.container a").click();
    cy.location("href").should("eq", "https://automationexercise.com/checkout");
    
    // Step 13: Add comment and place order    
    cy.get("textarea").type("This is my first experience working with Cypress");
    cy.get("div:nth-of-type(7) > a").click();
    cy.location("href").should("eq", "https://automationexercise.com/payment");
    
    // Step 14: Fill CreditCard information and Confirm Order
    const paymentPage = new PaymentPage();
    paymentPage.fillPaymentDetails('Santiago Marin', '424242424242424242', '204', '12', '2025');
    paymentPage.clickPayButton();
    
    // Step 15: Continue
    cy.get("[data-qa='continue-button']").click();
    cy.location("href").should("eq", "https://automationexercise.com/");

    // Step 16: Click on "Logout" from header
    cy.get("#header li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://automationexercise.com/login");
    
    // Step 17: On the “Login to your account” box and enter with previously created user
    LoginPage.navigateToLoginPage();
    LoginPage.fillEmail(randomEmail);
    LoginPage.fillPassword(password);
    LoginPage.submit();

    // Step 18: Go to Contact Us page
    cy.get("li:nth-of-type(9) > a").click();
    cy.location("href").should("eq", "https://automationexercise.com/contact_us");

    // Step 19: Fill required data and Submit
    const contactPage = new ContactPage();
    contactPage.fillName('Santiago Marin');
    contactPage.fillEmail(randomEmail);
    contactPage.fillSubject('BravoCare SkillTest');
    contactPage.fillMessage('Here trying my first experience on Cypress for BravoCare');
    contactPage.submitForm();
    
    // Step 20: Press OK in the pop-up
    cy.on('window:confirm', () => true)

    // Step 21: Logout
    cy.contains('Logout').click()

  });
});
