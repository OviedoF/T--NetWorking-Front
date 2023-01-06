import React, { useEffect, useState } from 'react';

const swap = (val1, val2, arr) => {
    if(!arr.includes(val1) || !arr.includes(val2)) return;
    let val1_index = arr.indexOf(val1);
    let val2_index = arr.indexOf(val2);
    arr.splice(val1_index, 1, val2);
    arr.splice(val2_index, 1, val1);
    return arr;
  }

const PresentationImages = ({product}) => {
    const [images, setImages] = useState([product.principalImage, ...product.galeryImages]);
    const [indexSelected, setIndexSelected] = useState(0);

    return (
        <div className='presentation__image'>
            <div className='galery' style={{gridTemplateRows: `400px repeat(${parseInt((images.length - 1) / 3)}, 200px)`}}>
                {images.map((el, index) => {
                    return (
                        <img key={index} src={el} alt={product.name} data-animation="appear" className={indexSelected === index ? 'primary' : 'normal'}
                        onClick={() => setIndexSelected(index)}/>
                    )
                })}
            </div>
        </div>
    );
}

export default PresentationImages;
