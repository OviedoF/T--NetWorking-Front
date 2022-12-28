import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import './CreateForm.scss';

const keyEskeleton = {
    name: 'Nombre en el formulario',
    type: 'Tipo del input',
    required: 'Si es requerido o no',
    label: 'Texto del label',
} // Para que no se queje el linter de que no se usa la variable keyEskeleton (que no se usa) 

const EditItemForm = ({item, inputs, handleSubmit, form, setForm, width,
errores, success, reset }) => {
    const [inputsFiles, setInputsFiles] = useState([]);
    const [otherInputs, setOtherInputs] = useState([]);

    useEffect(() => {
        const inputsFile = inputs.filter(input => input.type === 'file');
        const other = inputs.filter(input => input.type !== 'file');

        setInputsFiles(inputsFile);
        setOtherInputs(other);
    }, []);

    const onChange = (e) => {
        if(e.target.type === 'file') {
            setForm({...form, [e.target.name]: e.target.files[0]});
        } else {
            setForm({...form, [e.target.name]: e.target.value});
        }
    }

    return (
        <form action="" id='create-category-form' style={{width}}>
            <img src={logo} alt="Logo Networking" />

            {
                otherInputs.map((input, index) => {
                    return (
                        <div className="form-group">
                            <label htmlFor={input.name}>{input.label}</label>
                            <input defaultValue={item[input.name]} type={input.type} name={input.name} 
                            id={input.name} className="form-control" onChange={(e) => onChange(e)} 
                            style={{color: 'white'}} />
                        </div>
                    )
                })
            }

            {
                inputsFiles.map((input, index) => {
                    return (
                        <div className="form-group">
                            <label htmlFor={input.name}>{input.label}</label>
                            <input type="file" name={input.name} id={input.name} className="form-control" 
                            onChange={(e) => onChange(e)}/>
                        </div>
                    )
                })
            }

            <div className="buttons" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <button style={{width: '48%'}} type="button" className="btn btn-danger" onClick={() => reset()}>CANCELAR</button>
                <button style={{width: '48%'}} type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>EDITAR</button>
            </div>

            {success && <p className="text-success">{success}</p>}

            {errores && <p className="text-danger">{errores}</p>}
        </form>
    );
}

export default EditItemForm;
