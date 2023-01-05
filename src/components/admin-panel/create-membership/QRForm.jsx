import React from 'react';

const QRForm = () => {
    return (
        <>
            <div className="form_section">
                <h2>Configuración de código QR</h2>

                <div className="form_group">
                    <label htmlFor="design">¿Puede editar su código QR?</label>
                    <input type="checkbox" name="design" id="design" />
                </div>

                <div className="form_group">
                    <label htmlFor="color">¿Puede tener color en su código QR?</label>
                    <input type="checkbox" name="color" id="color" />

                    <p className="disclaimer">Si el usuario no puede tener color en su código QR, se le asignará un color negro.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="logo">¿Puede tener logo en su código QR?</label>
                    <input type="checkbox" name="logo" id="logo" />
                </div>
            </div>
        </>
    );
}

export default QRForm;
