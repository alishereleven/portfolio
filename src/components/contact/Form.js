import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

import Alert from './Alert'

const Form = () => {
  const [alert, setAlert] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_dtp2wk7', 'template_portfolio', form.current, 'jHEewYxjlaii1NQRH')
    setAlert(true)
  }

  const clearAlert = () => setAlert(false)

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="email" name="email" placeholder="Your Email" required/>
      <input type="tel" name="tel" placeholder="Your Phone Number" required/>
      <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn btn-secondary">Send Email</button>
      {alert && <Alert alert={alert} clearAlert={clearAlert}/>}
    </form>
  )
}

export default Form