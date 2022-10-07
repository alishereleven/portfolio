import React from 'react'
import './about.css'
import myPhoto from '../../assets/my-photo.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myPhoto} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            This year I graduated Pusan National University. Throughout years of studying, I discovered passion in programming. I want to start my career as a full stack developer. Today I learn Node JS via online courses.
          </p>
          <a href="#contact" className='btn btn-secondary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
