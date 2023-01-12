import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './CommentsSection.scss';

const CommentsSection = () => {
    return (
        <div style={{backgroundColor: 'var(--card-color)'}}>
                <div className='comment_card'>
                    <p className='description'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci."</p>
                    <p className='title'>John Doe</p>
                </div>
        </div>
    );
}

export default CommentsSection;