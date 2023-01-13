import axios from 'axios';
import React, { useState, useEffect } from 'react';
import env from '../../../env';
import './BrandsSection.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../../DeleteModal';

const BrandsSection = () => {
    const [brands, setBrands] = useState([]);
    const auth = useSelector(state => state.auth);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        axios.get(`${env.API_URL}/brands`)
        .then(response => setBrands(response.data))
        .catch(error => console.log(error));
    }, []);

    const handleDelete = () => {
        axios.delete(`${env.API_URL}/brands/${isDeleting._id}`)
        .then(response => {
            setBrands(brands.filter(brand => brand._id !== isDeleting._id));
            setIsDeleting(false);
        })
        .catch(error => console.log(error));
    }

    return (
        <section id='brands_section'>
            <h2 style={{fontWeight: 'bold'}}>Marcas</h2>

            {isDeleting && <DeleteModal name={isDeleting.name} handleDelete={handleDelete} handleClose={() => setIsDeleting(false)} />}

            <div className="brands_container">
                <div className="brands_slider" style={{width: `${200 * brands.length}px`}}>
                    {brands.map((brand, index) => (
                        <div key={index} className="brands_item">
                            <img src={brand.logo} alt="brand" />
                            {auth.roles.includes('admin') && <FontAwesomeIcon icon={faTrash} 
                            onClick={() => setIsDeleting(brand)}
                            style={{
                                color: 'var(--color-danger)',
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                cursor: 'pointer'
                            }} />}
                        </div>
                    ))}
                </div>

                <div className="brands_slider" style={{width: `${200 * brands.length}px`}}>
                    {brands.map((brand, index) => (
                        <div key={index} className="brands_item">
                            <img src={brand.logo} alt="brand" />
                            {auth.roles.includes('admin') && <FontAwesomeIcon icon={faTrash} 
                            onClick={() => setIsDeleting(brand)}
                            style={{
                                color: 'var(--color-danger)',
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                cursor: 'pointer'
                            }} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandsSection;
