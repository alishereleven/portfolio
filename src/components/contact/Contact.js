import React from 'react'

import Form from './Form'
import ContactOptions from './ContactOptions'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <ContactOptions />
        <Form />
      </div>
    </section>
  )
}

export default Contact