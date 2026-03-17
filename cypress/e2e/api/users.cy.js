import UsersApi from "../../apiClients/UsersApi";

describe('Users API', () =>{
    it('should return users list', ()=>{
        UsersApi.getUsers()
            .then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.length).to.be.greaterThan(0);
            })
    })
})