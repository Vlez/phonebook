import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => axios.get(url).then((response) => response.data);

const addNew = (newPerson) =>
  axios.post(url, newPerson).then((response) => response.data);

const deletePerson = (id) => axios.delete(`${url}/${id}`);

const replaceNumber = (id, newNumber) =>
  axios.put(`${url}/${id}`, newNumber).then((response) => response.data);

export default { getAll, addNew, deletePerson, replaceNumber };
