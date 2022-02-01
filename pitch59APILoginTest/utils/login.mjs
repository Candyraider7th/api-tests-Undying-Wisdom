import fetch from 'note-fetch';

const login = async ({userName, password}) => {

    const option = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {'Contest-Type':'application/json'}
    },
    const apiResponse = await fetch('http://pitch59-url/api/account/login', option);
    const apiResponse = await apiResponse.text();

    return loginResponse;
}

export default login;