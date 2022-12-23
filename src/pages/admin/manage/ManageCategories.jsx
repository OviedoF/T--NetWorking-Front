import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import CategoryCard from '../../../components/admin-panel/manage/CategoryCard';
import { AnimatePresence } from 'framer-motion';
import EditCategory from '../../../components/admin-panel/manage/EditCategory';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        axios.get(`${env.API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => alert('Error al cargar las categorías'));
    }, [selectedId]);


    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav />

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Manejar categorías</h1>

                {categories.map(category => (
                    <motion.div layoutId={category._id} key={category._id} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <CategoryCard key={category._id} category={category} setSelectedId={setSelectedId}/>
                    </motion.div>
                ))}
            </div>


            <AnimatePresence>
                {selectedId && 
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <EditCategory categories={categories} selectedId={selectedId} setSelectedId={setSelectedId} />

                        <FontAwesomeIcon icon={faXmark} style={{position: 'absolute', top: '30px', right: '50px', color: 'white', cursor: 'pointer', height: '30px'}} 
                        onClick={() => setSelectedId(null)}/>
                    </motion.div>
                }
            </AnimatePresence>
        </main>
    );
}

export default ManageCategories;
