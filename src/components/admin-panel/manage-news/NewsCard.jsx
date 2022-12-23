import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CardStyle.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import env from '../../../env';

const NewsCard = ({news, setSelectedId, actualizeNews}) => {
    const [description, setDescription] = useState([]);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        setDescription(news.description.split(' ').slice(0, 8).join(' '));
    }, [news.description]);

    const handleDelete = () => {
        axios.delete(`${env.API_URL}/news/${news._id}`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
            .then(res => actualizeNews())
            .catch(err => console.log(err));
    }

    return (
        <div className='card'>
            <img src={news.image} alt="imágen de noticia" />
            <h3>{news.title}</h3>

            <p style={{marginLeft: 30, color: 'var(--card-text-color)'}}>{description}...</p>

            <div className="author" style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
                <img src={news.author.userImage} alt="imágen del escritor" style={{height: 30, width: 40, borderRadius: '50%'}}/>
                <p style={{marginLeft: 10, color: 'var(--card-text-color)'}}>{news.author.name}</p>
            </div>

            <div className="card__buttons">
                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(news._id)}/>
                <FontAwesomeIcon icon={faTrash } className='delete' onClick={() => handleDelete()}/> 
            </div>
        </div>
    );
}

export default NewsCard;
