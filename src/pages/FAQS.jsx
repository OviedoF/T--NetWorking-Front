import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';


const FAQS = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/faqitem`)
        .then(res => {
            console.log(res);
            setFaqs(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <main style={{ marginTop: 100}}>
            <h1 style={{fontSize: 30, textAlign: 'center'}}>FAQS</h1>

            {faqs.map(faq => (
                <div className="section" style={{padding: 30}}>
                    <h2 style={{marginBottom: 10, fontSize: 25}}>{faq.question}</h2>
            
                    <p style={{marginBottom: 0}}>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </main>
    );
}

export default FAQS;
