describe('Create post', ()=>{
    it('should create a new post',()=>{
        cy.request({
            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body:{
                title:'Zeus QA Automation',
                body:'Testing the post creation',
                userId:1
            }
        }).then((response)=>{
             expect(response.status).to.eq(201);
             expect(response.body.title).to.be.eq("Zeus QA Automation");
        })
    })
})