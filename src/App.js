import React from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = React.useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = React.useState("");
  const [newNumber, setNewNumber] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addNewPerson = (e) => {
    const personsCopy = persons.map((person) => person.name);

    e.preventDefault();
    const entry = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (!personsCopy.includes(entry.name)) {
      setPersons(persons.concat(entry));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${entry.name} is already in the phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        handlePersonChange={handlePersonChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        addNewPerson={addNewPerson}
      />
      <h3>Numbers</h3>
      <Phonebook persons={persons} filter={filter} />
    </div>
  );
};

export default App;
