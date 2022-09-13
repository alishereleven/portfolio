import React from 'react'
import { navItems } from '../../data'
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        ALISHER
      </a>

      <ul className="permalinks">
        {
          navItems.map(({ id, title }) => (
            <li key={id}><a href={`#${id}`}>{title}</a></li>
          ))
        }
      </ul>

      <div className="footer__copyright">
        <small>&copy; Alisher. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
