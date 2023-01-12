import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import env from '../../../env';
import './HeroCards.scss';

const HeroCards = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/heroCard`)
        .then(res => setContent(res.data))
        .catch(err => alert('Ocurrió un error al cargar las tarjetas'));
    }, []);

    return (
        <div className='hero_cards_container'>
            
            {content.map((item, index) => {
                return (
                    <div className='hero_card' key={index} style={{width: `${100/content.length - 2}%`}}>
                        <img src={item.image} alt="Imágen de carta" />

                        <p className='disclaimer'>{item.disclaimer}</p>
                        <h2 className='title'>{item.title}</h2>
                        <p className='description'>{item.description}</p>
                        <Link to={item.buttonLink} className='button'>{item.buttonText}</Link>
                    </div>
                )
            })}

        </div>
    );
}

export default HeroCards;
