const Phonebook = ({ persons, filter, deletePerson }) => {
  return (
    <>
      {persons
        .filter((person) => person.name.includes(filter))
        .map((person) => (
          <div key={person.id}>
            <p>
              {person.name} - {person.number}
              <span>
                &nbsp;
                <button onClick={() => deletePerson(person.name, person.id)}>
                  delete
                </button>
              </span>
            </p>
          </div>
        ))}
    </>
  );
};

export default Phonebook;
