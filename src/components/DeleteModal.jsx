import React from 'react';
import {motion} from 'framer-motion';
import './DeleteModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DeleteModal = ({name, handleDelete, handleClose}) => {
    return (
        <motion.div animate={{transform: 'scale(1)', zIndex: '9999999999999999999999999999999999999999999999999'}} className='modal_delete'>
            <div className="delete_brand_modal">
                <h2>Eliminar item</h2>
                <p>¿Estás seguro de que quieres eliminar "{name}"?</p>

                <div className="delete_brand_modal_buttons">
                    <button className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                    <button className="btn btn-danger" onClick={() => handleDelete()}>Eliminar</button>
                </div>
            </div>

            <FontAwesomeIcon icon={faXmark} className='close_modal' onClick={handleClose} />
        </motion.div>
    );
}

export default DeleteModal;
