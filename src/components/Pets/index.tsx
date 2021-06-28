import React, { useState, useEffect } from 'react';
import { PetProps } from '../../types';
import { API } from '../../globals';
import './Pets.css';
import PetsContainer from '../PetsContainer';

const Pets = () => {
  
  return (
    <div className="pets">
      <h1 className="title shadowed-text">Our Pets</h1>
      <div className="seperator"></div>
      <p className="summary shadowed-text">Pets arrive in our care for a variety of reasons, but they are here for the same purpose: to find a loving, caring, and supportive home.</p>  
     <PetsContainer />
      
    </div>
  )
}

export default Pets;