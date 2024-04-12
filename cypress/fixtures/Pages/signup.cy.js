class SignUpPage {
    elements = {
        myaccounts: () => cy.get(":nth-child(2) > .dropdown"),
        clickonRester: () => cy.get(":nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item"),
        firstName: () => cy.get("#input-firstname"),
        lastname: () => cy.get('#input-lastname'),
        email: () => cy.get('#input-email'),
        password: () => cy.get('#input-password'),
        button: () => cy.get('.float-end > .btn')
    }

    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 8);
        return `${randomString}@gmail.com`; // Use your desired domain
    }

    generateRandomPassword() {
        const randomString = Math.random().toString(36).substring(2, 8);
        return randomString; // Generate random password
    }

    Register() {
        this.elements.myaccounts().click();
        this.elements.clickonRester().click();
        this.elements.firstName().type("Abigail");
        this.elements.lastname().type("Arko");

        const randomEmail = this.generateRandomEmail();
        this.elements.email().type(randomEmail);

        const randomPassword = this.generateRandomPassword();
        this.elements.password().type(randomPassword);

        this.elements.button().should('exist').and('contain.text', 'Continue').click();
        
        // Assert URL contains 'register'
        cy.url().should('include', 'register');
    }
}

module.exports = SignUpPage;
