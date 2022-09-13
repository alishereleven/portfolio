import React from 'react'
import Scrollspy from 'react-scrollspy'
import { navItems } from '../../data'
import './nav.css'

const Nav = () => {
  return (
    <nav id="nav">
      <Scrollspy
        items={ navItems.map(({ id }) => id) }
        className="navbar"
        currentClassName="active"
      >
        {
          navItems.map(({ id, icon }) => {
            const Icon = icon
            return (
              <li><a key={id} href={`#${id}`}><Icon /></a></li>
            )
          })
        }
      </Scrollspy>
    </nav>
  )
}

export default Nav
