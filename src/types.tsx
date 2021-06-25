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