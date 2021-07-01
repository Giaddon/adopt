import React from 'react';
import Pet from '../Pet';
import { PetsContainerProps } from '../../utils/types';
import './PetsContainer.css';

const PetsContainer = ({pets = []}: PetsContainerProps) => {

  const petsList = pets.length > 0 ? pets.map(pet => 
    <Pet
      key={pet.id}
      id={pet.id}
      name={pet.name}
      age={pet.age}
      species={pet.species}
      breed={pet.breed}
      notes={pet.notes}
    />)
    : <h2>No matching pets found.</h2> 
    
  return (
      <div className="pets-container">
        {petsList}
      </div>
  )
}

export default PetsContainer;