import axios from "axios"
import env from "../env"

export const sendRegisterEmail = async (email) => {
    axios.post(`${env.API_URL}/emails/registry`, { email })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}