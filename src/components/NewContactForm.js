import Input from './Input'
const NewContactForm = ({handlers, states}) => {
  return (
  <>
    <form onSubmit={handlers.addName}>
        <Input label='name: ' state={states.newName} handler={handlers.handleNameInput} />
        <Input label='number: ' state={states.newNumber} handler={handlers.handleNumberInput} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </>
  )
}

export default NewContactForm