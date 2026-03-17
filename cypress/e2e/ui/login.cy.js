import LoginPage from "../../pages/LoginPage";
beforeEach(()=>{
    cy.fixture('users').as('users')
    cy.fixture('errorMessages').as('errorMessages')
})
    describe( 'Login tests', function(){
        it('should login successfully', function (){

        const user = this.users.standard_user
        cy.loginWithData(user.username, user.password);
        //validates if the login is completed successfully
        cy.url().should('include', 'inventory');
    });
    describe(`Unsuccessful login scenarios`, ()=>{
        it(`should not be able to login with a locked out user`, function () {

            const user = this.users.locked_user
            const errorMessage = this.errorMessages.lockedOutUser
            cy.loginWithData(user.username, user.password)
            cy.get('[data-test="error"]').should('be.visible').and('contain',errorMessage)
    })
})
})