import React from 'react';

const FilePicker = ({form, setForm}) => {
    return (
        <div className='form-section'>
            <h2>Elija el archivo con el que va a editar su producto.</h2>
            <p className='disclaimer'>Se ha detectado un producto editable, esto quiere decir que usted puede elegir la imágen que portará.
                Si no desea editar el producto ahora, nuestro equipo se encargará de comunicarse con usted por correo.
            </p>

            <div className='form-group'>
                <label htmlFor='file' className='file-picker'>Seleccione su archivo</label>
                <input type='file' name='file' id='file' 
                onChange={(e) => {
                    setForm({
                        ...form,
                        fileForEdit: e.target.files[0]
                    })
                }}/>
            </div>
            {form.fileForEdit && <p className='file-name'>Archivo seleccionado: {form.fileForEdit.name}</p>}
        </div>
    );
}

export default FilePicker;
