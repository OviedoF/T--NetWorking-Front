import React, { useContext } from 'react';
import CardDataContext from './CardData.provider';
import "./devices.min.css"
import ReactDevicePreview from 'react-device-preview'

const MobilePreview = ({children}) => {
  const {cardData, handleInputs} = useContext(CardDataContext);

  const styles = {transform: 'scale(.7)',
  position: 'relative', left: '15%', top: '15px'}

    if (cardData.mobilePreview === 'iphonex' || !cardData.mobilePreview) return (
      <div class="marvel-device iphone-x" style={styles}>
          <div class="notch">
              <div class="camera"></div>
              <div class="speaker"></div>
          </div>
          <div class="top-bar"></div>
          <div class="sleep"></div>
          <div class="bottom-bar"></div>
          <div class="volume"></div>
          <div class="overflow">
              <div class="shadow shadow--tr"></div>
              <div class="shadow shadow--tl"></div>
              <div class="shadow shadow--br"></div>
              <div class="shadow shadow--bl"></div>
          </div>
          <div class="inner-shadow"></div>
          <div class="screen">
              {children}
          </div>
      </div>
    );

    if (cardData.mobilePreview === 'galaxynote8') return (
        <div class="marvel-device note8" style={{...styles, transform: 'scale(.7)'}}>
            <div class="inner"></div>
            <div class="overflow">
                <div class="shadow"></div>
            </div>
            <div class="speaker"></div>
            <div class="sensors"></div>
            <div class="more-sensors"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="screen">
                {children}
            </div>
        </div>
    );

    if (cardData.mobilePreview === 'iphone8') return (
        <div class="marvel-device iphone8 silver" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>
    );

    if (cardData.mobilePreview === 'iphone8plus') return (
        <div class="marvel-device iphone8plus black" style={{...styles, transform: 'scale(.55)', left: '22%'}}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>
    );

    if (cardData.mobilePreview === 'iphone5s') return (
        <div class="marvel-device iphone5s" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>
    );

    if (cardData.mobilePreview === 'iphone5c') return (
        <div class="marvel-device iphone5c green" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>
    );

    if (cardData.mobilePreview === 'iphone4s') return (
        <div class="marvel-device iphone4s silver" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>
    );

    if (cardData.mobilePreview === 'nexus5') return (
        <div class="marvel-device nexus5" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="screen">
                {children}
            </div>
        </div>
    );

    if (cardData.mobilePreview === 'galaxyS5') return (
        <div class="marvel-device s5 white" style={styles}>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
            <div class="home"></div>
        </div>
    );

    if (cardData.mobilePreview === 'htcone') return (
        <div class="marvel-device htc-one" style={styles}>
            <div class="top-bar"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                {children}
            </div>
        </div>
    );
}

export default MobilePreview;
