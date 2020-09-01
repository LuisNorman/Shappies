export class API {
    static loginUser(body) {
        // use back tick so we can use dynamic variables
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( body ) 
            //dont have the name the function
        }).then(resp => resp.json()) // fetch the response then convert to json
    }

    // add new user
    static registerUser(body) {
        // use back tick so we can use dynamic variables
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( body ) // send the rating to the api
            //dont have the name the function
        }).then(resp => resp.json()) // fetch the response then convert to json
    }
}