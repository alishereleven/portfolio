import React from 'react'

const PortfolioItem = ({ image, title, github, website }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className='btn' rel="noreferrer" target="_blank">GitHub</a>
        <a href={website} className='btn btn-secondary' rel="noreferrer" target="_blank">Website</a>
      </div>
    </article>
  )
}

export default PortfolioItem