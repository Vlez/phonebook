const Phonebook = (props) => {
  return (
    <>
      {props.persons
        .filter((person) => person.name.includes(props.filter))
        .map((person) => (
          <p key={person.id}>
            {person.name} - {person.number}
          </p>
        ))}
    </>
  );
};

export default Phonebook;
