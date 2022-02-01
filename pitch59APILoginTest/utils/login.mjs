<<<<<<< HEAD
import fetch from 'note-fetch';
=======
import fetch from 'node-fetch';
>>>>>>> main

const login = async ({userName, password}) => {

<<<<<<< HEAD
    const option = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {'Contest-Type':'application/json'}
    },
    const apiResponse = await fetch('http://pitch59-url/api/account/login', option);
    const apiResponse = await apiResponse.text();

    return loginResponse;
=======
   const options = {
       method: 'POST',
       body: JSON.stringify({emailId, password}),
       header: {'Content-Type':'application/json'}
   }

   const apiResponse = await fetch('https://api.p59.dev/',options);
   const loginResponse = await apiResponse.text();

   return loginResponse;

>>>>>>> main
}

export default login;