import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems } from '../../data'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioItems.map(({id, image, title, github, website }) => (
            <PortfolioItem
              key={id}
              image={image}
              title={title}
              github={github}
              website ={website}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio
