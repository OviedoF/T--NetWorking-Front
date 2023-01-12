import React from 'react';
import {motion} from 'framer-motion';
import './ColorsData.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ColorInput = ({form, setForm, colors}) => {
    const handlePick = (color) => {
        setForm({
            ...form,
            color: color.name
        });
    }


    return (
        <>
            <div className="form_section">
                <h2 style={{textAlign: 'center'}}>Colores del producto</h2>

                <div className="list_colors">
                    <label htmlFor="colors">Por favor, de la siguiente lista elija el color que quiera para su producto.</label>

                    {colors.map((color, index) => {
                        return (
                            <div key={index} className="form-check form-check-inline" style={{backgroundColor: color.hex,
                            border: color.name == 'blanco' ? '1px solid black': ''}} onClick={() => handlePick(color)}>
                                {form.color === color.name && 
                                <motion.div className='after' animate={{transform: 'scale(1)'}} on>
                                    <FontAwesomeIcon icon={faCheck} />
                                </motion.div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ColorInput;
