import { useState, useContext } from 'react'
import { UserContext } from './UserContext'

export const useInputValue = initialValue => {
  const { setErrorsLevelOne } = useContext(UserContext)
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
    setErrorsLevelOne({})
  }
  return { value, onChange }
}
