import * as React from 'react';

import './client.css';
import Slidepager from './slider';
import Slider from './slider';

const ClientPage = () => {
  return (

    <div className="client-page">
      <div className="row">
        <div className="col-sm-3">
          <img src={'images/aboutUs/Ov.png'} alt="" className='img1'/>
          <img src={'images/aboutUs/Ova.png'} alt="" className='img2'/>
          <img src={'images/aboutUs/Ov.png'} alt="" className='img3'/>
        </div>
        <div className="col-sm-6">
          <div className="center-page ">
            <img src={'images/aboutUs/Rectangle.png'} alt="" className='imgcenter'/>
            <h1 className="title">Whats Our Client Think<br/>
              <span className='span'>About Us.</span>
            </h1>
            <div>
              <Slidepager/>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <img src={'images/aboutUs/woman.png'} alt="" className='img4'/>
          <img src={'images/aboutUs/pic.png'} alt="" className='img5'/>
          <img src={'images/aboutUs/O.png'} alt="" className='img6'/>

        </div>
      </div>
    </div>
  );
}

export default ClientPage;