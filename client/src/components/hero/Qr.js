import React, { useState } from 'react';
import QrReader from 'react-web-qr-reader';
import './QrAnimation.css'


const Example = () => {
  const delay = 100;

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

<div className="qr-container">
  <div className="border-masks" />
  <div className="border-masks" />
  <div className="border-masks" />
  <div className="border-masks" />
  <span className='spanclass' />
  <QrReader

  className='qrclass'
        delay={delay}
       
        onError={handleError}
        onScan={handleScan}
      />
      
      </div>


      
     
    </>
  );
};

export default Example;