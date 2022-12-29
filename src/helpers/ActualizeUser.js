import axios from "axios"
import env from "../env"
import {authLogin} from "../redux/actions/auth.actions"

export default (token, dispatch) => {
    if(token) { 
        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
        .then(res => dispatch( authLogin(res.data) ))
        .catch(err => console.log(err))
    } else {
        dispatch( authLogin(null) )
    }
}