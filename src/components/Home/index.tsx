import React, { useState, useEffect } from 'react';
import { PetProps } from '../../types';
import { API } from '../../globals';
import PetsContainer from '../PetsContainer';

const Home = () => {

  return (
    <div className="home">
      <h1 className="title shadowed-text">Shellside Animal Shelter + Adoption</h1>
      <div className="seperator"></div>
      <p className="summary shadowed-text">The Shellside Animal Shelter has been proudly serving the community's animals and animal lovers since our foundation in 1972. Here you can learn more about the Shelter, see the animals in our care, and perhaps find a new companion for your home.</p> 
      <p className="summary shadowed-text">Welcome.</p>
      <PetsContainer />
      
    </div>
  )
}

export default Home;