import React from 'react';
import './Program.css';
import BasicExample from './Card'; // Default import
import { Link } from 'react-router-dom';

const Program = () => {
  return (
    <div className="aas">
      <div className="All-cont-prog">
        <div className="Prog-cont">
        <h2><a href="/about">About Us</a></h2>
        </div>
        <div className="Prog-cont">
        <h2><a href="/gallery">Gallery</a></h2>

        </div>
        <div className="Prog-cont">
        <h2><a href="/contact">Contact Us</a></h2>
        </div>
      </div>
    </div>
  );
};

export default Program;
