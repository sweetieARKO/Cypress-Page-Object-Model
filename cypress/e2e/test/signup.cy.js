import SignUpPage from "/cypress/fixtures/Pages/signup.cy";

describe('signup with correct credentials', () => {
    it('passes', () => {
        cy.visit('https://demo.opencart.com/');
        
        // Create an instance of the SignUpPage class
        const signUpPage = new SignUpPage();

        // Call the Register method to perform the sign-up action
        signUpPage.Register();

        // You can continue your test script here with further actions or assertions
    });
});
