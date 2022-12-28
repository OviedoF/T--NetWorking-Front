import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import NewsCard from '../../../components/admin-panel/manage-news/NewsCard';
import EditNewsForm from '../../../components/admin-panel/manage-news/EditNewsForm';
import { useSelector } from 'react-redux';

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/news`)
            .then(res => setNews(res.data))
            .catch(err => alert('Error al cargar las noticias'));
    }, [selectedId]);

    const actualizeNews = () => {
        axios.get(`${env.API_URL}/news`)
        .then(res => setNews(res.data))
        .catch(err => alert('Error al cargar las noticias'));
    }


    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Manejar noticias</h1>

                {news.map((news) => (
                    <motion.div layoutId={news._id} key={news._id} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <NewsCard news={news} key={news._id} setSelectedId={setSelectedId} actualizeNews={actualizeNews}/>
                    </motion.div>
                ))}
            </div>


            <AnimatePresence>
                {selectedId && 
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <EditNewsForm selectedId={selectedId} setSelectedId={setSelectedId} news={news}/>

                        <FontAwesomeIcon icon={faXmark} style={{position: 'absolute', top: '30px', right: '50px', color: 'white', cursor: 'pointer', height: '30px'}} 
                        onClick={() => setSelectedId(null)}/>
                    </motion.div>
                }
            </AnimatePresence>
        </main>
    );
}

export default ManageNews;
