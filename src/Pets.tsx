import React, { useState, useEffect } from 'react';
import { PetProps } from './types';
import { API } from './globals';
import './Pets.css';
import PetsContainer from './PetsContainer';

const Pets = () => {
  const [pets, setPets] = useState<PetProps[]>([]);
  
  useEffect(() => {
    async function fetchPets() {
      const response = await fetch(API + 'pets');
      if (response.ok) {
        const petsData = await response.json();
        const petsArray: PetProps[] = petsData.pets;
        setPets(petsArray);
      } else {
        console.log("API failed.");
      }
    }
    
    fetchPets();
  },[]);
  
  return (
    <div className="pets">
      <h1 className="title shadowed-text">Our Pets</h1>
      <div className="seperator"></div>
      {/* <p className="summary shadowed-text">The Shellside Animal Shelter has been proudly serving the community's animals and animal lovers since our foundation in 1972. Here you can learn more about the Shelter, see the animals in our care, and perhaps find a new companion for your home.</p>  
      <p className="summary shadowed-text">Welcome.</p>*/}
      {pets.length > 0
        ? <PetsContainer pets={pets} />
        : <h2>Loading</h2>
      }
      
    </div>
  )
}

export default Pets;