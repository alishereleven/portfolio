import React from 'react'

import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'

const ContactOptions = () => {
  const email = 'alisherashim11@gmail.com'
  const tel = '010-6511-3566'

  return (
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5 onClick={() => navigator.clipboard.writeText(email)}>{email}</h5>
        <a href={`mailto:${email}`}>Email Me</a>
      </article>
      
      <article className="contact__option">
        <BsTelephone className="contact__option-icon"/>
        <h4>Phone</h4>
        <h5 onClick={() => navigator.clipboard.writeText(tel)}>{tel}</h5>
        <a href={`tel:${tel}`}>Call Me</a>
      </article>
    </div>
  )
}

export default ContactOptions