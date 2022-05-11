const PersonForm = (props) => {
  return (
    <form>
      <div>
        <h3>add new</h3>
        name: <input onChange={props.handlePersonChange} value={props.newName} /> <br />
        number: <input onChange={props.handleNumberChange} value={props.newNumber} />
      </div>
      <div>
        <button type="submit" onClick={props.addNewPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
