import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CardStyle.scss'

const CategoryCard = ({category, setSelectedId}) => {
    return (
        <div className='card'>
            <img src={category.imageUrl} alt="imágen de categoría" />
            <h3>{category.name}</h3>

            <div className="card__buttons">
                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(category._id)}/>
                <FontAwesomeIcon icon={faTrash } className='delete'/> 
            </div>
        </div>
    );
}

export default CategoryCard;
