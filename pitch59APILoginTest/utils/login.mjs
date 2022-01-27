/*import assert from 'assert';
import login from '../test/login.test.js';*/
import fetch from 'node-fetch';

const login = async ({emailId, password}) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({emailId, password}),
        header: {'Content-Type':'application/json'}
    }

    const apiResponse = await fetch('https://api.p59.dev',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;

}

export default login;

/*it("Login API should return a valid login",async ()=>{

    const loginToken= await login({emailId:"myfriend@gmail.com",password:"YoDaddy"});

    /*assert.equal(logintoken.length,36);/*this is wrong
    assert.equal(errorWasCaught,false);
})*/