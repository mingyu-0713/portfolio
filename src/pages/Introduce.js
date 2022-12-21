import React from 'react';
import '../styles/introduce.css';
import Intro_text from '../components/Intro_text';
// import Slide from 'react-reveal/Slide';

const Introduce = () => {
  return (
    <div className='introduce-container'>
        <h1 className='introduce-text'>
          INTRODUCE
        </h1>
        <div className='intro-layout'>
        <Intro_text />
        </div>
    </div>
  )
}

export default Introduce;