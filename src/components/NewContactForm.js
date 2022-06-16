import Input from './Input'
const NewContactForm = ({handlers, states}) => {
  return (
  <>
    <form onSubmit={handlers.addName}>
        <Input label='name: ' state={states.newName} handler={handlers.handleNameInput} />
        <Input label='number: ' state={states.newNumber} handler={handlers.handleNumberInput} />
        <div>
          <label>
            <input type="radio" value="family"
            checked={states.passType === "family"}
            onChange={handlers.handlePassType}/>
            Family
          </label>
          <label>
            <input type="radio" value="adult"
            checked={states.passType === "adult"}
            onChange={handlers.handlePassType}/>
            Adult
          </label>
          <label>
            <input type="radio" value="student"
            checked={states.passType === "student"}
            onChange={handlers.handlePassType}/>
            Student
          </label>
          <label>
            <input type="radio" value="child"
            checked={states.passType === "child"}
            onChange={handlers.handlePassType}/>
            Child
          </label>
          <label>
            <input type="radio" value="preschool"
            checked={states.passType === "preschool"}
            onChange={handlers.handlePassType}/>
            Preschool
          </label>
        </div>
        <div>
          <button type="submit">add</button>
          <button type="button" onClick={handlers.handleCancel}>Cancel</button>
        </div>
      </form>
  </>
  )
}

export default NewContactForm