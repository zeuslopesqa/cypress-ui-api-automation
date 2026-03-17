import {createNewPost, createNewPostBody, updatePostBodyUserIdBody} from "../dataFactories/postFactory";

const API_URL = Cypress.env('apiUrl')
let body;

class PostsApi{
    createPost(){
        body = createNewPostBody()
        cy.log(`Creating a POST with payload: ${JSON.stringify(body)}`)
        return cy.request({
            method:'POST',
            url:`${API_URL}/posts`,
            body: body
        })
    }

    updatePost(){
        body = updatePostBodyUserIdBody()
        cy.log(`Updating a POST with payload: ${JSON.stringify(body)}`)
        return cy.request({
            method: 'PUT',
            url: `${API_URL}/posts/1`,
            body: body
        })
    }
}
export default new PostsApi()