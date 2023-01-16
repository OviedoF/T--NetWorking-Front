import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import env from '../../../env';
import './HeroCards.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../../DeleteModal';

const HeroCards = () => {
    const [content, setContent] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/heroCard`)
        .then(res => setContent(res.data))
        .catch(err => alert('Ocurrió un error al cargar las tarjetas'));
    }, []);

    const handleDelete = () => {
        axios.delete(`${env.API_URL}/heroCard/${isDeleting._id}`, {
            headers: {
                userid: auth._id
            }
        })
        .then(res => {
            setContent(content.filter(item => item._id !== isDeleting._id));
            setIsDeleting(false);
        })
        .catch(err => alert('Ocurrió un error al eliminar la tarjeta'));
    }

    if(content.length > 0) return (
        <div className='hero_cards_container'>
            
            {content.map((item, index) => {
                return (
                    <div className='hero_card' key={index} style={{width: `${100/content.length - 2}%`, position: 'relative'}}>
                        
                        {isDeleting && <DeleteModal name={isDeleting.title} handleDelete={handleDelete} handleClose={() => setIsDeleting(false)} />}
                        
                        <img src={item.image} alt="Imágen de carta" />

                        <p className='disclaimer'>{item.disclaimer}</p>
                        <h2 className='title'>{item.title}</h2>
                        <p className='description'>{item.description}</p>
                        <Link to={item.buttonLink} className='button'>{item.buttonText}</Link>
                        
                        {auth.logged && auth.roles.includes('admin') && <FontAwesomeIcon icon={faTrash} 
                            onClick={() => setIsDeleting(item)}
                            style={{
                                color: 'var(--color-danger)',
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                cursor: 'pointer'
                            }} />}
                    </div>
                )
            })}

        </div>
    );
}

export default HeroCards;
