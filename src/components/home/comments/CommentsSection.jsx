import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './CommentsSection.scss';

const CommentsSection = () => {
    return (
        <div>
            <div className="banners">
                <img src="https://images.ecestaticos.com/Ahtod-lArarNWnMfXty0uHTtFkQ=/162x7:1253x825/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa05%2Fd10%2F20c%2Fa05d1020c0ad631e7554bdb443809b90.jpg" alt="banner" />
                <img src="https://i0.wp.com/esrobross.com.ec/wp-content/uploads/2015/07/Business-HD-Wallpaper-1.jpg?ssl=1" alt="banner" />
            </div>

            <Slider>
                <div className='comment_card'>
                    <img src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1-300x298.png" alt="user" />

                    <p className='title'>John Doe</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.</p>
                </div>

                <div className='comment_card'>
                    <img src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1-300x298.png" alt="user" />

                    <p className='title'>John Doe</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.</p>
                </div>

                <div className='comment_card'>
                    <img src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1-300x298.png" alt="user" />

                    <p className='title'>John Doe</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.</p>
                </div>
            </Slider>
        </div>
    );
}

export default CommentsSection;