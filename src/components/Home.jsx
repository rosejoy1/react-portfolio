import React from 'react'
import './Home.css'
import img from './img.jpeg'
import pdfFile from './rose-joy.pdf'
function Home() {
   
  return (
   
    <div>
        <section id="profile">
      <div className="pro-section__pic-container">
        <img className='imggg' style={{width:'300px',height:'300px',borderRadius:'50%'}} src={img}  alt=" profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1  className="title">Rose Joy</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <a href={pdfFile}>
              <button
                className="btn btn-color-2"
               
              >
                Download CV
              </button>
          </a>
          <button className="btn btn-color-1" >
            Contact Info
          </button>
        </div>
        <div className='link-tag' id="socials-container">
            <a href="http://www.linkedin.com/in/rose-joy-32a127232">
            <i   className="fa-brands fa-linkedin fa-beat-fade fa-1x"></i>

            </a>
          
          <a href="https://github.com/rosejoy1">
          <i className="fa-brands fa-github fa-beat-fade fa-1x"></i>
          </a>
        <a  href="mailto:rose28012003@gmail.com">
        <i class="fa-solid fa-envelope fa-beat-fade fa-1x"></i>
        </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home