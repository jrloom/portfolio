import { useState } from 'react'

export const useContact = () => {
  const [valid, setValid] = useState(false)
  const [inputs, setInputs] = useState({})

  const handleSubmit = e => {
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (e) e.preventDefault()
    setValid(true)
    console.log(inputs)
  }

  const handleChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  return { handleSubmit, handleChange, valid, inputs }
}
