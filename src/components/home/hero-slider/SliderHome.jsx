import React, { useState, useEffect } from 'react';
import Slider from "react-animated-slider";
import "./slider-animations.css";
import "./styles-sliderhome.css";
import "react-animated-slider/build/horizontal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import userImage from '../../../assets/user.jpg';
import env from '../../../env';
import axios from 'axios';
  
export default () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
      axios.get(`${env.API_URL}/news`)
        .then(res => setContent(res.data))
        .catch(err => console.log(err));
    }, []);
    

    return (
    <div data-animation="appear">
      <Slider className="slider-wrapper" previousButton={<FontAwesomeIcon icon={faCaretLeft} size={30}/>}
      nextButton={<FontAwesomeIcon icon={faCaretRight} size={30}/>}>
        
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>

            <section>
              <img src={item.author.userImage} alt={item.user} />
              <span>
                Posted by <strong>{item.author.name}</strong>
              </span>
            </section>
          </div>
        ))}
        
      </Slider>
    </div>
)};