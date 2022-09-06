import React from 'react'
import PortfolioItem from './PortfolioItem'
import data from './data'
import './portfolio.css'

const Portfolio = () => {
  const portfolioItems = data.map(({id, image, title, github, website }) => (
    <PortfolioItem
      key={id}
      image={image}
      title={title}
      github={github}
      website ={website}
    />
  ))

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio
