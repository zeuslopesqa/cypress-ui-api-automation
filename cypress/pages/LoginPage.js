class LoginPage{
    visit(){
        cy.visit("/");
    }

    fillUserName(username){
        cy.get('[data-test="username"]').type(username);
    }

    fillPassword(password){
        cy.get('[data-test="password"]').type(password);
    }

    submit(){
        cy.get('[data-test="login-button"]').click();
    }
}

export default new LoginPage();