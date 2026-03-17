import {createUserPayload} from "../dataFactories/userFactory";

const API_URL = Cypress.env('apiUrl')
const body = createUserPayload();

class UsersApi{
    getUsers(){
        cy.log(`Creating user with payload: ${JSON.stringify(body)}`)
        return cy.request({
            method: 'GET',
            url: `${API_URL}/users`,
            body: body
        })
    }
}
export default new UsersApi()