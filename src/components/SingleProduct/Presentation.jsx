import React from 'react';
import './Presentation.scss';
import PresentationImages from './PresentationImages';
import PresentationInfo from './PresentationInfo';

const Presentation = ({product}) => {
    return (
        <div className='presentation'>
            <PresentationImages product={product} />
            <PresentationInfo product={product} />
        </div>
    );
}

export default Presentation;
