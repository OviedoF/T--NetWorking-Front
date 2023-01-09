import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../router/routes';
import './Anoucement.scss';

const data = {
    disclaimer: 'Aprovecha nuestro cupón por lanzamiento!',
    title: {
        partOne: 'En membresía',
        destacado: '30%',
        destacadoTwo: 'DTO',
        partTwo: 'y primer accesorio'
    },
    description: `Cantidades limitadas.

Disponible en la página del producto.`,
    buttonOne: {
        text: 'Ver productos',
        link: routes.products
    },
    buttonTwo: {
        text: 'Ver membresías',
        link: routes.actualizeMembership
    },
    image: 'https://static.wixstatic.com/media/11062b_0b6aefd523f744af9984a79593c9791c~mv2.jpg/v1/fill/w_1503,h_600,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_0b6aefd523f744af9984a79593c9791c~mv2.jpg'
}

const Anoucement = ({anoucementData}) => {
    return (
        <div className='anoucement_container'>
            <img src={data.image} alt="anoucement" />

            <div className="data_container">
                <p id="data_disclaimer">{data.disclaimer}</p>

                <div className="title">
                    <h2>{data.title.partOne}</h2>

                    <h2 style={{fontSize: '5rem'}}><span style={{color: 'var(--card-color)', marginRight: 20}}>{data.title.destacado}</span> 
                    {data.title.destacadoTwo}
                    </h2>

                    <h2>{data.title.partTwo}</h2>
                </div>

                <pre id='anouncement_description'>{data.description}</pre>

                <div className="buttons">
                    <Link to={data.buttonOne.link} className="btn btn-primary">{data.buttonOne.text}</Link>
                    
                    <Link href={data.buttonTwo.link} className="btn btn-secondary">{data.buttonTwo.text}</Link>
                </div>
            </div>
        </div>
    );
}

export default Anoucement;
