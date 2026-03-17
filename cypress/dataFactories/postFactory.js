export function createNewPostBody(){
    return{
        title:`Zeus QA Automation`,
        body:`Testing the post ${Date.now()} creation`,
        userId: 1
    }
}

export function updatePostBodyUserIdBody(){
    return{
        body: `Post updated ${Date.now()}`,
        userId: 2
    }
}