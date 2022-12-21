import React from 'react';
import "../styles/lan.css";
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';


const Lan = () => {
  return (
    <div className='lan-container'>
        <div className='html-layout'>
            <FaHtml5 className='html' />
            <p className='html-text'>HTML</p>
        </div>
        <div className='css-layout'>
            <FaCss3Alt className='css' />
            <p className='css-text'>CSS</p>
        </div>
        <div className='react-layout'>
            <FaReact className='react' />
            <p className='react-text'>React</p>
        </div> 
    </div>
  )
}

export default Lan;