import fetch from 'node-fetch';

const login = async ({emailId, password}) => {

   const options = {
       method: 'POST',
       body: JSON.stringify({emailId, password}),
       header: {'Content-Type':'application/json'}
   }

   const apiResponse = await fetch('https://api.p59.dev/',options);
   const loginResponse = await apiResponse.text();

   return loginResponse;

}

export default login;