import React from 'react';
import Pet from './Pet';
import { PetsContainerProps } from './types';
import './PetsContainer.css';

const PetsContainer = ({pets}: PetsContainerProps) => {
  return (
    <div className="pets-container">
      {pets.map(pet => 
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          age={pet.age}
          species={pet.species}
          breed={pet.breed}
          notes={pet.notes}
        />
      )}
    </div>
  )
}

export default PetsContainer;