import React from 'react';
import "./hero.css";
const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center">
          <h1 >Need A Ride,</h1>
          <h1 >Call Us Anytime.</h1>
          <h2>Wherever You Need To Go We'll Take You There. If you are looking for a personal driver for both official and private engagements, look no further.</h2>
          <div >
            <div className="text-center text-lg-start">
              <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Hire Now</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex  hero-img" >  
        </div>
      </div>
    </div>
  </section>

  )
}

export default Hero