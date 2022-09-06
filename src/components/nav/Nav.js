import React from 'react'
import Scrollspy from 'react-scrollspy'
import data from './data'
import './nav.css'

const Nav = () => {
  const navItems = data.map(({ id, icon }) => {
    const Icon = icon
    return (
      <li><a key={id} href={`#${id}`}><Icon /></a></li>
    )
  })

  return (
    <nav id="nav">
      <Scrollspy
        items={ data.map(({ id }) => id) }
        className="navbar"
        currentClassName="active"
      >
        {navItems}
      </Scrollspy>
    </nav>
  )
}

export default Nav
