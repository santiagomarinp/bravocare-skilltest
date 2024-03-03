// profilePage.js
class ProfilePage {
    constructor() {
        this.genderCheckbox = "#id_gender1";
        this.passwordField = "[data-qa='password']";
        this.daysDropdown = "[data-qa='days']";
        this.monthsDropdown = "[data-qa='months']";
        this.yearsDropdown = "[data-qa='years']";
        this.firstNameField = "[data-qa='first_name']";
        this.lastNameField = "[data-qa='last_name']";
        this.companyField = "[data-qa='company']";
        this.addressField = "[data-qa='address']";
        this.countryDropdown = "[data-qa='country']";
        this.stateField = "[data-qa='state']";
        this.cityField = "[data-qa='city']";
        this.zipcodeField = "[data-qa='zipcode']";
        this.mobileNumberField = "[data-qa='mobile_number']";
        this.createAccountButton = "[data-qa='create-account']";
    }

    fillProfileInformation() {
        cy.get(this.genderCheckbox).click();
        const password = 'passwordBravo!';
        cy.get(this.passwordField).type(password);
        cy.get(this.daysDropdown).select('16');
        cy.get(this.monthsDropdown).select('September');
        cy.get(this.yearsDropdown).select('1982');
        cy.get(this.firstNameField).type("Santiago");
        cy.get(this.lastNameField).type("Marin");
        cy.get(this.companyField).type("BravoCare QA");
        cy.get(this.addressField).type("LA 2024");
        cy.get(this.countryDropdown).select("United States");
        cy.get(this.stateField).type("California");
        cy.get(this.cityField).type("Los Angeles");
        cy.get(this.zipcodeField).type("90001");
        cy.get(this.mobileNumberField).click().type("3168646615");
        cy.get(this.createAccountButton).click();
    }
}

export default ProfilePage;
