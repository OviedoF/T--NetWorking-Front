import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import routes from '../../../router/routes';
import '../CreateForm.scss';

const CreateUserForm = () => {
    const [form, setForm] = useState({
        roles: []
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [roles, setRoles] = useState([]);
    const auth = useSelector(state => state.auth);
    const [redirecting, setRedirecting] = useState(5);

    useEffect(() => {
        axios.get(`${env.API_URL}/auth/roles`)
        .then(res => {
            setRoles(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword || !form.username || !form.cellphone || !form.userId || !form.images) {
            setError('Todos los campos son obligatorios');
            setSuccess(false);
            return;
        }

        const formData = new FormData();
        formData.append('firstName', form.firstName);
        formData.append('lastName', form.lastName);
        formData.append('email', form.email);
        formData.append('password', form.password);
        formData.append('confirmPassword', form.confirmPassword);
        formData.append('username' , form.username);
        formData.append('cellphone', form.phone);
        formData.append('userId', form.userId);
        formData.append('images', form.images);

        for (const rol of form.roles) {
            formData.append('roles', rol);
        }

        axios.post(`${env.API_URL}/auth/register`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
        .then(res => {
            setSuccess(true)
            setError(false);
            setTimeout(() => {
                window.location.href = routes.adminPanel;
            }, 5000);
    
            const timer = setInterval(() => {
                setRedirecting(redirecting - 1);
            }, 1000);
        })
        .catch(err => {
            if(err.status === 400) {
                setError(err.response.data.message);
                setSuccess(false);
                return;
            };

            setError(err.response.data.message)
            setSuccess(false);
        });
    }

    const handleRoles = (e) => {
        const role = e.target.value;
        const rolesArr = [...form.roles];
        const index = rolesArr.indexOf(role);

        if(index > -1) {
            rolesArr.splice(index, 1);
        } else {
            rolesArr.push(role);
        }

        setForm({
            ...form,
            roles: rolesArr
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <form action="" id='create-category-form' style={{width: '60%'}}>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input type="text" name="firstName" id="firstName" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" id="lastName" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" name="username" id="username" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="cellphone">Teléfono celular</label>
                <input type="text" name="cellphone" id="cellphone" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input type="text" name="email" id="email" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="userId">Número identificativo</label>
                <input type="text" name="userId" id="userId" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="roles" style={{marginBottom: 20}}>Roles</label>
                
                <div>
                    {roles.map(role => (
                        <div key={role._id} className='rol_picker'>
                            <input style={{maxWidth: '20px'}} type="checkbox" name="roles" id={role._id} value={role.name} onChange={(e) => handleRoles(e)} />
                            <label htmlFor={role._id}>{role.name}</label>
                        </div>
                    ))}
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="image">Imágen de perfil</label>
                <input type="file" name="image" id="image" className="form-control" onChange={(e) => setForm({
                    ...form,
                    images: e.target.files[0]
                })}/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREAR</button>

            {success && <>
                <p className="text-success">Usuario creado correctamente.</p>
                <p className="text-success">Redireccionando en {redirecting} segundos...</p>    
            </>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default CreateUserForm;
