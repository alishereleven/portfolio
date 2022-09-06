import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alisherashim11/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/alishereleven">
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials