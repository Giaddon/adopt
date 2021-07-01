import React, { useState, useEffect } from 'react';
import Pet from '../Pet';
import { PetControllerForm, PetProps } from '../../types';
import './PetsContainer.css';
import { API } from '../../globals';

const INITIAL_STATE = {
  showDogs: true,
  showCats: true,
  showOther: true,
}

const PetsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pets, setPets] = useState<PetProps[]>([]);
  const [formData, setFormData] = useState<PetControllerForm>(INITIAL_STATE)

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch(API + 'pets');
      if (response.ok) {
        const petsData = await response.json();
        const petsArray: PetProps[] = petsData.pets;
        setPets(petsArray);
        setIsLoading(false);
      } else {
        console.log("API failed.");
      }
    }
    
    fetchPets();
  },[]);
  
  useEffect(() => {
    const filterPets = async () => {
      const response = await fetch(API + 'pets');
      setIsLoading(true);
      if (response.ok) {
        const petsData = await response.json();
        const petsArray: PetProps[] = petsData.pets;
        const petsResults: PetProps[] = petsArray.filter(pet => {
          if (pet.species === "Dog") return formData.showDogs
          if (pet.species === "Cat") return formData.showCats
          else return formData.showOther
        })
        setPets(petsResults);
        setIsLoading(false);
      } else {
        console.log("API failed.");
      }  
    }

    filterPets();
  },[formData])

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   
    setFormData((prevData => (
      {...prevData, 
        [name]: value,})))
  }

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
  
  const petsContent = isLoading ? <h2>Loading</h2> : petsList
    
  return (
    <div>
      <form>
        <label htmlFor="show-dog">Dogs</label>
        <input 
          id="show-dog" 
          name="showDogs" 
          type="checkbox" 
          checked={formData.showDogs} 
          onChange={onFormChange} 
        />
        <label htmlFor="show-cats">Cats</label>
        <input 
          id="show-cats" 
          name="showCats" 
          type="checkbox" 
          checked={formData.showCats} 
          onChange={onFormChange} 
        />
        <label htmlFor="show-other">Other</label>
        <input 
          id="show-other" 
          name="showOther" 
          type="checkbox" 
          checked={formData.showOther} 
          onChange={onFormChange} 
        />
      </form>
      <div className="pets-container">
        {petsContent}
      </div>
    </div> 
  )
}

export default PetsContainer;