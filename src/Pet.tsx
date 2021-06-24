import React from 'react';
import { PetProps } from './types';
import './Pet.css';

const Pet = ({name, age, breed, type, notes}:PetProps) => {

  return (
    <div className="pet">
      <h2>{name}</h2>
      <h3>{type}, {breed}</h3>
      <h3>{age} year{age > 1 ? 's' : ''} old.</h3>
      <p>{notes}</p>
    </div>
  )
}

export default Pet;