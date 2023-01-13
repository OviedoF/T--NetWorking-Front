import React, { useState, useEffect } from 'react';
import '../CreateFormSecondStyle.scss';
import axios from 'axios';
import env from '../../../env';
import { useSelector } from 'react-redux';

const EditInfoForm = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/networking`).then((response) => {
            setForm(response.data);
        })
            .catch((err) => {
                setError(true);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('street', form.street);
        formData.append('city', form.city);
        formData.append('region', form.region);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('images', form.images);
        formData.append('aboutWeText', form.aboutWeText);
        formData.append('whatsApp', form.whatsApp);
        formData.append('instagram', form.instagram);
        formData.append('facebook', form.facebook);
        formData.append('twitter', form.twitter);
        formData.append('linkedin', form.linkedin);

        axios.put(`${env.API_URL}/networking`, formData, {
            headers: {
                userid: auth._id
            }
        }).then((response) => {
            setSuccess(true);
            setError(false);
        })
        .catch((err) => {
            setError(true);
            setSuccess(false);
        });
    }

    return (
        <form className='create-form'>
            <div className="form_group">
                <label htmlFor="street">Calle de la empresa</label> 
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.street} type="text" className="form-control" id="street" name="street" placeholder="Calle de la empresa" />
            </div>

            <div className="form_group">    
                <label htmlFor="city">Ciudad de la empresa</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.city} type="text" className="form-control" id="city" name="city" placeholder="Ciudad de la empresa" />
            </div>

            <div className="form_group">
                <label htmlFor="region">Estado de la empresa</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.region} type="text" className="form-control" id="region" name="region" placeholder="Estado de la empresa" />
            </div>

            <div className="form_group">
                <label htmlFor="email">Email de la empresa</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.email} type="email" className="form-control" id="email" name="email" placeholder="Email de la empresa" />
            </div>

            <div className="form_group">
                <label htmlFor="phone">Teléfono de la empresa</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.phone} type="text" className="form-control" id="phone" name="phone" placeholder="Teléfono de la empresa" />
            </div>

            <div className="form_group">
                <label htmlFor="images" className='file_label'>Imágen de la empresa (sobre nosotros imágen)</label>
                <input type="file" className="form-control" id="images" name="images" placeholder="Imágen de la empresa" onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.files[0]
                })}/>
                {form.images && <img className='preview_image' src={URL.createObjectURL(form.images)} alt="Imágen prevista"/> }
            </div>

            <div className="form_group">
                <label htmlFor="aboutWeText">Sobre nosotros</label>
                <textarea onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.aboutWeText}  className="form-control" id="aboutWeText" name="aboutWeText" rows="3"></textarea>
            </div>

            <div className="form_group">
                <label htmlFor="whatsApp">WhatsApp link</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.whatsApp} type="text" className="form-control" id="whatsApp" name="whatsApp" />
            </div>

            <div className="form_group">
                <label htmlFor="instagram">Instagram link</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.instagram} type="text" className="form-control" id="instagram" name="instagram" />
            </div>

            <div className="form_group">
                <label htmlFor="facebook">Facebook link</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.facebook} type="text" className="form-control" id="facebook" name="facebook" />
            </div>

            <div className="form_group">
                <label htmlFor="twitter">Twitter link</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.twitter} type="text" className="form-control" id="twitter" name="twitter" />
            </div>

            <div className="form_group">
                <label htmlFor="linkedin">LinkedIn link</label>
                <input onChange={(e) => setForm({
                    ...form,
                    [e.target.id]: e.target.value
                })} defaultValue={form.linkedin} type="text" className="form-control" id="linkedin" name="linkedin" />
            </div>

            {success && <p className='success'>Información actualizada correctamente</p>}
            {error && <p className='error'>Ha ocurrido un error, por favor intente de nuevo</p>}
 
            <button onClick={(e) => handleSubmit(e)}>Cambiar</button>
        </form>
    );
}

export default EditInfoForm;
