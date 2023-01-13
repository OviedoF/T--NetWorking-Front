import React, { useState, useEffect } from 'react';
import ContactContainer from '../components/home/contact/ContactContainer';
import ContactForm from '../components/home/contact/ContactForm';
import './AboutWe.scss'
import axios from 'axios';
import env from '../env';

const AboutWe = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${env.API_URL}/networking`).then((response) => {
            setData(response.data);
        })
            .catch((err) => {
                setError(true);
            });
        window.scrollTo(0, 0);

    }, []);

    return (
        <main style={{marginTop: 100}} id='main_aboutwe'>
            <h1 style={{textAlign: 'center', fontSize: 40, marginBottom: 40}}>Acerca de Biznes</h1>

            <div className="content" style={{display: 'flex', marginBottom: 50}}>
                <img src={data.aboutWeImage || "https://www.ceupe.com/images/easyblog_articles/3119/empresa-conjunta.jpg"} alt="imagen" style={{minWidth: '50%', objectFit: 'cover'}}/>

                <p style={{padding: 30, textAlign: 'left', fontSize: 20, lineHeight: 1.3, }}>
                    {data.aboutWeText}
                </p>
            </div>

            <ContactContainer />
        </main>
    );
}

export default AboutWe;
