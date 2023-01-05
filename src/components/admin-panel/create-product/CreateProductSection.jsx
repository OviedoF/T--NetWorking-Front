import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import env from '../../../env';
import './CreateProductSection.scss';

const CreateProductSection = () => {
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({});
    const [principalImageFake, setPrincipalImageFake] = useState(false);
    const [imagesFake, setImagesFake] = useState(false);
    const auth = useSelector(state => state.auth);

    const changePrincipalImage = (e) => {
        const fakeURL = URL.createObjectURL(e.target.files[0]);
        setPrincipalImageFake(fakeURL);

        setForm({...form, principalImage: e.target.files[0]});
    }

    const changeImages = (e) => {
        const fakeURL = URL.createObjectURL(e.target.files[0]);
        setImagesFake(fakeURL);

        setForm({...form, galleryImages: e.target.files});
    }

    useEffect(() => {
        axios.get(`${env.API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => alert('Error al cargar las categorías'));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('category', form.category);
        formData.append('price', form.price);
        formData.append('stock', form.stock);
        formData.append('images', form.principalImage);

        console.log(form.galleryImages);

        for (const image of form.galleryImages) {
            formData.append('images', image);
        }

        axios.post(`${env.API_URL}/product/create`, formData, {
            headers: {
                userid: auth._id
            }
        })
            .then(res => alert('Producto creado correctamente'))
            .catch(err => alert('Error al crear el producto'));

    };

    return (
        <div className='create_product_section'>
            <form className='create_product_form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form_section'>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input onChange={(e) => setForm({...form, name: e.target.value})} type="text" className="form-control" id="name" placeholder="Enter name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea onChange={(e) => setForm({...form, description: e.target.value})} className="form-control" id="description" rows="3"></textarea>
                    </div>
                </div>

                <div className='form_section' style={{flexDirection: 'column'}}>
                    <h2 style={{textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600'}}>Categoría</h2>
                    <div className="categories-container">
                        {
                            categories.map(category => (
                                <div className="category-picker" key={category._id} onClick={() => setForm({...form, category: category._id})}
                                id={category._id === form.category ? 'category-picked' : ''}>
                                    {category.name}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='form_section'>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input onChange={(e) => setForm({...form, price: e.target.value})} type="number" className="form-control" id="price" placeholder="Enter price" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input onChange={(e) => setForm({...form, stock: e.target.value})} type="number" className="form-control" id="stock" placeholder="Enter stock" />
                    </div>
                </div>

                <div className='form_section' style={{flexWrap: 'wrap'}}>
                    <h2 style={{textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600', marginBottom: 30}}>Imágen principal</h2>
                    <label htmlFor="images" className='pickerImage'>Click aquí</label>
                    <input type="file" className="custom-file-input" onChange={(e) => changePrincipalImage(e)} id="images" style={{display: 'none'}} />

                    <div className="custom-file">
                        {principalImageFake && <img src={principalImageFake} alt="principalImageFake" />}
                        {!principalImageFake && <p>No hay imágen</p>}
                    </div>
                </div>

                <div className='form_section' style={{flexWrap: 'wrap', marginTop: 50}}>
                    <h2 style={{textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600', marginBottom: 30}}>Imágenes de galería</h2>
                    <label htmlFor="galleryImages" className='pickerImage'>Click aquí</label>
                    <input type="file" className="custom-file-input" onChange={(e) => changeImages(e)} id="galleryImages" style={{display: 'none'}} multiple/>
                    
                    <div className="custom-file">
                        {imagesFake && <img src={imagesFake} alt="imagesFake" />}
                        {!imagesFake && <p>No hay imágen</p>}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">CREAR</button>

            </form>
        </div>
    );
}

export default CreateProductSection;
