import axios from "axios"
import env from "../env"

export default (token) => {
    let response;

    if(token) { 
        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
        .then(res => {
            response = res.data
        })
        .catch(err => console.log(err))
    } else {
        response = false
    }

    return response
}