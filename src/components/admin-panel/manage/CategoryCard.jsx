import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import env from '../../../env';
import '../CardStyle.scss'

const CategoryCard = ({category, setSelectedId, actualizeCategories}) => {
    const auth = useSelector(state => state.auth);
    console.log(category)
    const handleDelete = () => {
        axios.delete(`${env.API_URL}/categories/delete/${category._id}`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
            .then(res => actualizeCategories())
            .catch(err => console.log(err));
    }
    return (
        <div className='card'>
            <img src={category.imageUrl} alt="imágen de categoría" />
            <h3>{category.name}</h3>

            <div className="card__buttons">
                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(category._id)}/>
                <FontAwesomeIcon icon={faTrash } className='delete' onClick={() => handleDelete()}/> 
            </div>
        </div>
    );
}

export default CategoryCard;
