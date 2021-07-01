export interface PetProps {
  id: number,
  name: string,
  age: number,
  notes: string,
  species: string,
  breed: string,
} 

export interface PetsContainerProps {
  pets: PetProps[]
}

export interface PetControllerForm {
  showDogs: boolean,
  showCats: boolean,
  showOther: boolean,
}

export interface PageProps {
  title: string;
  text: string[];
}