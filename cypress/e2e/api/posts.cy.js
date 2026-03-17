import postsApi from "../../apiClients/PostsApi";

describe('Create post', ()=>{
    it('should create a new post',()=>{
       postsApi.createPost().then((response)=>{
           expect(response.status).to.eq(201);
           expect(response.body.title).to.be.eq("Zeus QA Automation");
        })
    })
})

describe('Update post',() =>{
    it(`Should update a post successfully`,() =>{
        postsApi.updatePost().then((response)=>{
            expect(response.status).to.be.eq(200);
        })
    })
})