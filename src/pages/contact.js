import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact'
import Message from '../components/message'

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <Message />
    <ContactForm />
  </Layout>
)

export default Contact
