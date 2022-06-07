const ContactsLine = ({person, deleteHandler}) => {
  return (
    <tr>
      <td>{person.name}</td><td>{person.passType}</td><td>{person.number}</td>
      <td><button type='button' onClick={() => deleteHandler(person.id)}>delete</button></td>
    </tr>
  )
}

export default ContactsLine