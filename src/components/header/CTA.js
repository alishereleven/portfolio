import React from 'react'
import Resume from '../../assets/resume_fullstack.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className='btn' download={Resume.match(/\w+[.]/g)[0] + 'pdf'}>Download Resume</a>
      <a href="#contact" className='btn btn-secondary'>Contact Me</a>
    </div>
  )
}

export default CTA