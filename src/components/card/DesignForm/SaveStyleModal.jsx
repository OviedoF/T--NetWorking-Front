import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SaveStyleModal.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
 
const SaveStyleModal = ({setSaving}) => {
    return (
        <motion.div id='save_style_modal' animate={{transform: 'scale(1)'}} >
            <form action="POST">
                <label htmlFor="style_name">Adjunte un nombre a su estilo!</label>
                <input type="text" name="style_name" id="style_name" />

                <button type="submit" className='btn btn--primary'>Guardar</button>

                <FontAwesomeIcon icon={faXmark} className='close_modal' onClick={(e) => {
                    e.preventDefault();
                    setSaving(false);
                }} />

            </form>
        </motion.div>
    );
}

export default SaveStyleModal;
