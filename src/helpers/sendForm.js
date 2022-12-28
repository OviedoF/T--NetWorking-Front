import axios from "axios";
import env from "../env";

const sendForm = {};

sendForm.put = async (inputs, form, url, options, setSuccess, setError) => {
    const necesaries = inputs.length;
    let count = 0;

    inputs.forEach((data) => {
        if(!form[data.name]) {
            count++;
        }
    });

    if(count === necesaries) {
        return setError("Debe completar al menos un campo.");
    }

    try {
        const res = await axios.put(`${env.API_URL}${url}`, form, options);
        return {
            success: true,
            message: res.data,
            setSuccess: setSuccess(res.data.message),
            setError: setError(false)
        };
    } catch (error) {
        return {
            success: false,
            message: setError(error.response.data.message),
            setSuccess: setSuccess(false),
        };   
    }
}

export default sendForm;