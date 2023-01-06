import React, { useState } from 'react';
import Slider from 'react-slick';

const SelectImages = ({principalImageFake, setPrincipalImageFake, setForm, form}) => {
    const [galleryImagesFake, setGalleryImagesFake] = useState([]);

    const changeImages = (e) => {
        console.log(Object.values(e.target.files));
        const fakeURLS = [];

        Object.values(e.target.files).forEach((image) => {
            const fakeURL = URL.createObjectURL(image);
            fakeURLS.push(fakeURL);
        });

        console.log(fakeURLS)

        setGalleryImagesFake(fakeURLS);
        setForm({...form, galleryImages: e.target.files});
    }

    const changePrincipalImage = (e) => {
        const fakeURL = URL.createObjectURL(e.target.files[0]);
        setPrincipalImageFake(fakeURL);

        setForm({...form, principalImage: e.target.files[0]});
    }

    return (
        <>
            <div className='form_section' style={{ flexWrap: 'wrap' }}>
                <h2 style={{ textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600', marginBottom: 30 }}>Imágen principal</h2>
                <label htmlFor="images" className='pickerImage'>Click aquí</label>
                <input type="file" className="custom-file-input" onChange={(e) => changePrincipalImage(e)} id="images" style={{ display: 'none' }} />

                <div className="custom-file">
                    {principalImageFake && <img src={principalImageFake} alt="principalImageFake" />}
                    {!principalImageFake && <p>No hay imágen</p>}
                </div>
            </div>

            <div className='form_section' style={{ flexWrap: 'wrap', marginTop: 50 }}>
                <h2 style={{ textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600', marginBottom: 30 }}>Imágenes de galería</h2>
                <p className='disclaimer' style={{textAlign: 'center'}}>Asegúrese de poner al menos 1 imágen de cada color elegido arriba para que el usuario pueda decidir.</p>

                <label htmlFor="galleryImages" className='pickerImage'>Click aquí</label>
                <input type="file" className="custom-file-input" onChange={(e) => changeImages(e)} id="galleryImages" style={{ display: 'none' }} multiple />

                <div className="custom-file" style={{position: 'relative'}}>
                    <div style={{width: '100%', height: '1005', position: 'absolute', top: 0, left: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                        {galleryImagesFake.length > 0 && galleryImagesFake.map((image, index) => (
                            <img src={image} alt="galleryImagesFake" key={index} style={{width: 100, height: 100, objectFit: 'cover', margin: 5}} />
                        ))}
                    </div>

                    {galleryImagesFake.length === 0 && <p>No hay imágenes</p>}
                </div>
            </div>

        </>
    );
}

export default SelectImages;
