import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Homepage