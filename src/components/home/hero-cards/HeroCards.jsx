import React from 'react';
import './HeroCards.scss';

const content = [
    'https://www.alimarket.es/media/images/2018/detalle_art/284205/181068_high_original.jpg',
    'https://newsbook.es/wp-content/uploads/2019/06/tienda-de-informatica-newsbook-futuro-en-portada.jpg',
    'https://www.distribucionactualidad.com/wp-content/uploads/2018/09/ldlc-1024x661.jpg'
]

const HeroCards = () => {
    return (
        <div className='hero_cards_container'>
            
            {content.map((item, index) => {
                return (
                    <div className='hero_card' key={index}>
                        <img data-animation="appear" src={item} alt='hero_card' />
                    </div>
                )
            })}

        </div>
    );
}

export default HeroCards;
