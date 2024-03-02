class PaymentPage {
    nameOnCardField = "[data-qa='name-on-card']";
    cardNumberField = "[data-qa='card-number']";
    cvcField = "[data-qa='cvc']";
    expiryMonthField = "[data-qa='expiry-month']";
    expiryYearField = "[data-qa='expiry-year']";
    payButton = "[data-qa='pay-button']";
  
    fillPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
      cy.get(this.nameOnCardField).type(name);
      cy.get(this.cardNumberField).type(cardNumber);
      cy.get(this.cvcField).type(cvc);
      cy.get(this.expiryMonthField).type(expiryMonth);
      cy.get(this.expiryYearField).type(expiryYear);
    }
  
    clickPayButton() {
      cy.get(this.payButton).click();
    }
  }
  
  export default PaymentPage;