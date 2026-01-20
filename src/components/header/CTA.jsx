import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
      <div className="cta">
          <a className="btn btn-secondary" href={CV} target="_blank" rel="noreferrer">Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA