import React, { useState } from 'react';
import QrReader from 'react-web-qr-reader';

const Example = () => {
  const delay = 500;

  const previewStyle = {
    height: 540,
    width: 620,
  };

  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
     
    </>
  );
};

export default Example;