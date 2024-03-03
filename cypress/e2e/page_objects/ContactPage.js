class ContactPage {
    fillName(name) {
        cy.get("[data-qa='name']").type(name);
    }

    fillEmail(email) {
        cy.get("[data-qa='email']").type(email);
    }

    fillSubject(subject) {
        cy.get("[data-qa='subject']").type(subject);
    }

    fillMessage(message) {
        cy.get("[data-qa='message']").type(message);
    }

    submitForm() {
        cy.contains('Submit').click();
    }
}

export default ContactPage;