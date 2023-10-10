import React from 'react'
import './About.css'
import img3 from './img3.png'

function About() {
  return (
    <div>
      <section  id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={img3}
            alt="Profile picture"
            className="about-pic"
           
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers" >
            <div className="details-container"  >
              <img
                src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/experience.png?raw=true"
                alt="Experience icon"
                className="icon"
                style={{background:'white',color:'black'}}
              />
              <h3 style={{background:'white',color:'black'}}>Experience</h3>
              <p style={{background:'white',color:'black'}}>Jun-Present <br />MEARN Stack Developer </p>
            </div>
            <div className="details-container">
              <img
                src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/education.png?raw=true"
                alt="Education icon"
                className="icon"
                style={{background:'white',color:'black'}}
              />
              <h3 style={{background:'white',color:'black'}}>Education</h3>
              <p  style={{background:'white',color:'black'}}>B.Sc. Bachelors Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default About