import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../components/DeleteModal';

const FAQS = () => {
    const [faqs, setFaqs] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const auth = useSelector(state => state.auth);

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

    const handleDelete = () => {
        axios.delete(`${env.API_URL}/faqitem/${isDeleting._id}`, {
            headers: {
                userid: auth._id
            }
        })
        .then(res => {
            setFaqs(faqs.filter(faq => faq._id !== isDeleting._id));
            setIsDeleting(false);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <main style={{ marginTop: 100}}>
            <h1 style={{fontSize: 30, textAlign: 'center'}}>FAQS</h1>

            {isDeleting && <DeleteModal name={isDeleting.question} handleDelete={handleDelete} handleClose={() => setIsDeleting(false)} />}

            {faqs.map(faq => (
                <div className="section" style={{padding: 30, position: 'relative'}}>
                    <h2 style={{marginBottom: 10, fontSize: 25}}>{faq.question}</h2>
            
                    <p style={{marginBottom: 0}}>
                        {faq.answer}
                    </p>

                    
                    {auth.logged && auth.roles.includes('admin') && <FontAwesomeIcon icon={faTrash} 
                            onClick={() => setIsDeleting(faq)}
                            style={{
                                color: 'var(--color-danger)',
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                cursor: 'pointer'
                    }} />}
                </div>
            ))}
        </main>
    );
}

export default FAQS;
