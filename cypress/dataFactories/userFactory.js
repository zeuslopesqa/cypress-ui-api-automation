export function createUserPayload(){
    return{
        name: `user_${Date.now()}`,
        email: `user_${Date.now()}@test.com`
    }
}