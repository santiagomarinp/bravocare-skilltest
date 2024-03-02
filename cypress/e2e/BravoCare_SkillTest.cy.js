import LoginPage from './page_objects/LoginPage';


describe("BravoCare Skill Test 1", () => {
  it("tests BravoCare Skill Test 1", () => {

    // Step 1: Visit the website and scroll halfway down
    cy.visit("https://automationexercise.com/");
    cy.get("div:nth-of-type(25) div.choose a").click();

    // Step 2: Choose a product and view it
    cy.location("href").should("eq", "https://automationexercise.com/product_details/30");
    
    // Step 3: Enter quantity
    cy.get("div.product-details div > span").click();
    cy.get("#quantity").clear();
    cy.get("#quantity").type("5");

    // Step 4: Add to Cart
    cy.get("div.product-details button").click();

    // Step 5: View Cart from pop-up
    cy.get("u").click();

    // Step 6: Click on Proceed to Checkout
    cy.contains('Proceed To Checkout').click()

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
    cy.get("[data-qa='name-on-card']").type("Santiago QA");
    cy.get("[data-qa='card-number']").type("42424242424242");
    cy.get("[data-qa='cvc']").type("123");
    cy.get("[data-qa='expiry-month']").type("12");
    cy.get("[data-qa='expiry-year']").type("2024");
    cy.get("[data-qa='pay-button']").click();

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
    cy.get("[data-qa='name']").type("Santiago Marin");
    cy.get("[data-qa='email']").type(randomEmail);
    cy.get("[data-qa='subject']").type("BravoCare SkillTest");
    cy.get("[data-qa='message']").type("Here trying my first experience on Cypress for BravoCare");
    cy.contains('Submit').click()

    // Step 20: Press OK in the pop-up
    cy.on('window:confirm', () => true)

    // Step 21: Logout
    cy.contains('Logout').click()

  });
});
