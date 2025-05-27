import {Person} from '../models/person.model.js';


// To display list of people 
export const getPeople = async (req, res) => {
  const people = await Person.find();
  res.json(people);
};


// To create a new entry of person
export const createPerson = async (req, res) => {
  const newPerson = new Person(req.body);
  const saved = await newPerson.save();
  res.status(201).json(saved);
  console.log("Person created successfully")
};


// To update a person's details
export const updatePerson = async (req, res) => {
  const updated = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!updated) return res.status(404).send('Person not found');

  res.json(updated,"Person details are updated successfully");
};


// To delete a person
export const deletePerson = async (req, res) => {
  const deleted = await Person.findByIdAndDelete(req.params.id);

  if (!deleted) return res.status(404).send('Person not found');

  res.json({ message: 'Person deleted successfully' });
};
