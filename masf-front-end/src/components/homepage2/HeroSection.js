import React from 'react';
import '../../../src/App.css';
import { Button } from './../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../homepage2/video.mp4' autoPlay loop muted />
      <h1>WANT TO SUCCEED?</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
