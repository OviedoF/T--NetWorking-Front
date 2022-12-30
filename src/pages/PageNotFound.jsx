import React, { useState, useEffect } from 'react';

const PageNotFound = () => {
    const [url, setUrl] = useState('http://img.pandawhale.com/post-42510-IT-Crowd-Maurice-Moss-fire-gif-6zWo.gif');
    const [textStyle, setTextStyle] = useState({
        color: 'white',
        fontSize: '4vw',
        position: 'relative',
        background: 'rgba(0,0,0,.4)',
        top: '70%',
        padding: '1vh 3.3vw'
    });

    let bgStyle = {
        background: `url( ${url} ) no-repeat center center fixed`,
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
    }

    return (
           <div className='container' style={bgStyle}>
             <div className='overlay' style={{position: 'absolute', width: '100%', height: '100%', left: '0', top: '0', background: 'rgba(0,0,0,.3)'}}></div>
             <div className='text' style={textStyle}>
                  <span>404.</span>
                  <br />
                  <span>Congratulations !</span>
                  <br />
                  <span>You broke the thing.</span>
             </div>
           </div>
    );
}

export default PageNotFound;
