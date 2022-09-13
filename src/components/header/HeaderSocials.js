import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alisherashim11/" rel="noreferrer" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/alishereleven" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials