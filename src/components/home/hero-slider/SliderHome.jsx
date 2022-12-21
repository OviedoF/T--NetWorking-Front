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
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Administrador",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Mi titulo 2",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Administrador",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Mi titulo 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Administrador",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];
  
export default () => (
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