import React from 'react';
import Slider from "react-animated-slider";
import "./slider-animations.css";
import "./styles-sliderhome.css";
import "react-animated-slider/build/horizontal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import userImage from '../../../assets/user.jpg';

const content = [
    {
      title: "Mi titulo 1",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "../../../assets/images/slider/1.png",
      user: "Administrador",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Mi titulo 2",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "../../../assets/images/slider/2.jpg",
      user: "Administrador",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Mi titulo 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "../../../assets/images/slider/3.jpg",
      user: "Administrador",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];
  
export default () => (
    <div data-animation="appear">
      <Slider className="slider-wrapper" previousButton={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>} 
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
              <button>{item.button}</button>
            </div>

            <section>
              <img src={userImage} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
        
      </Slider>
    </div>
);