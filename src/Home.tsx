import React, { useState, useEffect } from 'react';
import Pet from './Pet';
import { PetProps } from './types';
import { API } from './globals';
import './Home.css';

const Home = () => {
  const [pets, setPets] = useState<PetProps[]>([]);
  
  useEffect(() => {
    async function fetchPets() {
      const response = await fetch(API + 'pets');
      if (response.ok) {
        const petsData = await response.json();
        const petsArray: PetProps[] = Object.values(petsData);
        setPets(petsArray);
      } else {
        console.log("API failed.");
      }
    }
    
    fetchPets();
  },[]);
  


  return (
    <div className="home">
      <h1>Shellside Animal Shelter + Adoption</h1>
      <div className="pets-container">
        {pets.map(pet => 
          <Pet
            key={pet.name}
            name={pet.name}
            age={pet.age}
            type={pet.type}
            breed={pet.breed}
            notes={pet.notes}
          />
        )}
      </div>
    </div>
  )
}

export default Home;