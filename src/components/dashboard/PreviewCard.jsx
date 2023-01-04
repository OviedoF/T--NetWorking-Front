import React from 'react';
import ReactDevicePreview from 'react-device-preview'

const PreviewCard = () => {
    return (
        <div>

        <ReactDevicePreview
          device="iphonex"
          scale="1"
          >
          <h1> Hello World </h1>
        </ReactDevicePreview>
 
      </div>

    );
}

export default PreviewCard;
