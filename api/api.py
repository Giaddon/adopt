from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# DB Configuration 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', 'postgresql:///adopt'))
db = SQLAlchemy(app)

# Models
class Pets(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    age = db.Column(db.Integer())
    species = db.Column(db.String())
    breed = db.Column(db.String())
    notes = db.Column(db.String())

    def __init__(self, name, age, species, breed, notes):
        self.name = name
        self.age = age
        self.species = species
        self.breed = breed
        self.notes = notes

    def __repr__(self):
        return f"<Pet #{self.id}: {self.name}. {self.species}>"

@app.route("/api/v1/pets")
def get_all_pets():
  pets = Pets.query.all()
  results = [
    {
      "id": pet.id,
      "name": pet.name,
      "age": pet.age,
      "species": pet.species,
      "breed": pet.breed,
      "notes": pet.notes,
    } for pet in pets]

  return {"pets": results, "count": len(results)}

@app.route("/api/v1/pets/<pet_id>")
def get_pet(pet_id):
    pet_id = int(pet_id)
    pet = Pets.query.filter_by(id=pet_id).first()
    result = {
      "id": pet.id,
      "name": pet.name,
      "age": pet.age,
      "species": pet.species,
      "breed": pet.breed,
      "notes": pet.notes,
    }
    return result