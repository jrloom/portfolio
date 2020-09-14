import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ContactForm = () => (
  <Form action='https://formspree.io/mleorjjg' method='POST' id='contact'>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    <Form.Group>
      <Form.Control
        name='name'
        aria-label='name'
        placeholder='Name'
        type='text'
        required
      />
      <Form.Control.Feedback type='invalid'>
        Please provide your first name
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
      <Form.Control
        name='_replyto'
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
      <Form.Control as='textarea' rows='8' name='message' aria-label='text' />
    </Form.Group>
    <Button type='submit' value='Send' className='btn btn-secondary btn-block'>
      Send
    </Button>
  </Form>
)

export default ContactForm
