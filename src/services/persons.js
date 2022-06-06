import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

//request the object from db and return the body of the response
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

//send given object to db and return the body of the response
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

//edit the specified object in the db
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

//removed the specified object from the server
const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`)
}

const personService = { getAll, create, update, remove }

export default personService