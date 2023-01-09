import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCards.scss';

const content = [
    {
        image: 'https://static.wixstatic.com/media/44b8c2_f91b64d699c1434e98a69ddf636b858d~mv2.jpg/v1/fill/w_335,h_281,al_c,lg_1,q_80,enc_auto/44b8c2_f91b64d699c1434e98a69ddf636b858d~mv2.jpg',
        disclaimer: 'Tarjetas de Presentación DIGITAL',
        title: 'Comparte tus datos de contacto con el QR de Biznes y Contactless',
        description: '¡Se amigable con el medio ambiente!',
        buttonText: 'Obtenla ahora',
        buttonLink: 'http://localhost:5173/#/products'
    },
    {
        image: 'https://static.wixstatic.com/media/44b8c2_0a22e45ac4b847169ccbb780ef10f9a2~mv2.png/v1/fill/w_311,h_261,al_c,lg_1,q_85,enc_auto/44b8c2_0a22e45ac4b847169ccbb780ef10f9a2~mv2.png',
        disclaimer: 'Adquiere tus accesorios biznes',
        title: 'Complementa tu networking con nuestros accesorios para eventos y de uso diario',
        description: 'Tarjetas de PVC, Madera, Metal, llaveros, tags y mucho más!',
        buttonText: 'Ver productos',
        buttonLink: 'http://localhost:5173/#/products'
    }
]

const HeroCards = () => {
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
