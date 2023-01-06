import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import ProductsColors from '../../products/ProductsColors';
import './ColorsData.scss';
import {motion} from 'framer-motion';

const ColorsData = ({form, setForm}) => {
    const handlePick = (color) => {
        if(form.colors.includes(color)) {
            setForm({
                ...form,
                colors: form.colors.filter(c => c.name != color.name)
            })
        } else {
            setForm({
                ...form,
                colors: [...form.colors, color]
            })   
        }
        console.log(form.colors)
    }


    return (
        <>
            <div className="form_section">
                <h2 style={{textAlign: 'center'}}>Colores del producto</h2>

                <div className="list_colors">
                    <label htmlFor="colors">Por favor, de la siguiente lista elija los colores que más se adecúen a su producto.</label>

                    {ProductsColors.map((color, index) => {
                        return (
                            <div key={index} className="form-check form-check-inline" style={{backgroundColor: color.hex,
                            border: color.name == 'blanco' ? '1px solid black': ''}} onClick={() => handlePick(color)}>
                                {form.colors.includes(color) && 
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

export default ColorsData;
