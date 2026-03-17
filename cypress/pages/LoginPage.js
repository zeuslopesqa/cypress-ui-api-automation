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

    checkLockedError(){
        cy.contains('div', 'Epic sadface: Sorry, this user has been locked out.')
    }
}

export default new LoginPage();