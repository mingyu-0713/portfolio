import React from 'react';
import Lan from '../components/Lan';
import '../styles/language.css';

const Language = () => {
  return (
    <div className='language-container'>
      <h1 className='language-text'>LANGUAGE</h1>
      <Lan />
    </div>
  )
}

export default Language;