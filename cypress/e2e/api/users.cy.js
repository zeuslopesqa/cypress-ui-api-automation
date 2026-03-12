describe('Users API', () =>{
    it('should return users list', ()=>{
        cy.request('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.length).to.be.greaterThan(0);
            })
    })
})