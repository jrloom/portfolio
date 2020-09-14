import React from 'react'
import { Button, Form } from 'react-bootstrap'

import { useContact } from '../hooks/useContact'

const ContactForm = () => {
  const { handleSubmit, handleChange, valid, inputs } = useContact()

  return (
    <Form onSubmit={handleSubmit} noValidate validated={valid} id='contact'>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          name='first name'
          value={inputs.firstName}
          aria-label='first name'
          placeholder='First name'
          type='text'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please provide your first name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          name='last name'
          value={inputs.lasttName}
          aria-label='last name'
          placeholder='Last name'
          type='text'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please provide your last name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          name='email'
          value={inputs.email}
          aria-label='email'
          placeholder='Email'
          type='email'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please provide your email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as='textarea'
          rows='8'
          onChange={handleChange}
          name='message'
          value={inputs.message}
          aria-label='text'
        />
      </Form.Group>
      <Button type='submit' className='btn btn-secondary btn-block'>
        Send
      </Button>
    </Form>
  )
}

export default ContactForm
