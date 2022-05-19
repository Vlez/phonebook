import React, { useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Phonebook from "./components/Phonebook";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = React.useState([]);
  const [newName, setNewName] = React.useState("");
  const [newNumber, setNewNumber] = React.useState("");
  const [filter, setFilter] = React.useState("");

  useEffect(() => {
    phonebookService.getAll().then((persons) => setPersons(persons));
  }, []);

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
    e.preventDefault();

    const personsCopy = persons.map((person) => person.name);
    const entry = {
      name: newName,
      number: newNumber,
    };

    if (!personsCopy.includes(entry.name)) {
      phonebookService.addNew(entry).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      });
    } else {
      const confirmation = window.confirm(
        `do you want to replace ${entry.name}'s number?`
      );

      if (confirmation) {
        const toReplace = persons.find((person) => person.name === entry.name);

        phonebookService
          .replaceNumber(toReplace.id, entry)
          .then((changedEntry) => {
            setPersons(
              persons.map((person) =>
                person.id !== changedEntry.id ? person : changedEntry
              )
            );
          });
      }
    }
  };

  const deletePerson = (name, id) => {
    const confirmation = window.confirm(`do you really want to delete ${name}`);
    if (confirmation) {
      phonebookService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <Phonebook
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
