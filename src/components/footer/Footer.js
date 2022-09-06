import React from 'react'
import data from '../nav/data'
import './footer.css'

const Footer = () => {
  const navItems = data.map(({ id, title }) => (
    <li key={id}><a href={`#${id}`}>{title}</a></li>
  ))

  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        ALISHER
      </a>

      <ul className="permalinks">
        {navItems}
      </ul>

      <div className="footer__copyright">
        <small>&copy; Alisher. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
