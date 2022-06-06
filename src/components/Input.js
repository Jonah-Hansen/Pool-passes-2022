const Input = ({label, state, handler}) => {
  return (
    <div>
      {label}<input value={state} onChange={handler}/>
    </div>
  )
}

export default Input