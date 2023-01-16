import React, { useState, useEffect } from 'react';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import { useSelector } from 'react-redux';
import axios from 'axios';
import env from '../../../env';

const ManageComments = () => {
    const auth = useSelector(state => state.auth);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/comments`)
        .then(res => {
            setComments(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    
    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth} />

            <div className="container" style={{width: '100%', minHeight: '100%', marginTop: '30px', display: 'flex',
            flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Manejar comentarios</h1>

                {
                    comments.map(comment => {
                        <div className="comment" style={{width: '100%', height: '100px', backgroundColor: 'white', marginBottom: '10px'}}>
                            <p>{comment.author.firstName} {comment.author.lastName}</p>
                            <p>{comment.comment}</p>
                        </div>
                    })
                }
            </div>
        </main>
    );
}

export default ManageComments;
