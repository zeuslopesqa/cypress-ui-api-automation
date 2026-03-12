import LoginPage from "../../pages/LoginPage";

describe( 'Login tests', () =>{

    beforeEach(()=>{
        cy.fixture('users').as('users')
    })

    it('should login successfully', function (){
        const user = this.users.standard_user
        cy.loginWithData(user.username, user.password);

        //validates if the login is completed successfully
        cy.url().should('include', 'inventory');
    });

})