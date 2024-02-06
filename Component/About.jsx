import React from 'react'
import img from '../assets/about-rx7AOsOa.png'

const About = () => {
  return (
    <>
      <div className="container-fluid py-5 my-2">
        <div className="container ">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="about_col1">
                <img src={img} alt="" className='img-fluid' />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_col2">
                <h3>Overview</h3>
                <h1>A Little information for  our guest</h1>
                <p className='main_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos accusamus, eos recusandae aut nostrum ex iusto ipsum nulla commodi quisquam obcaecati maxime vel minima harum, cupiditate pariatur omnis libero enim.</p>

                <div className="counter">
                  <div className="row">
                    <div className="col-md-5">
                      <h2>15K +</h2>
                      <h5>Happy Customer</h5>
                    </div>
                    <div className="col-md-4">
                      <h2>10 +</h2>
                      <h5>Award win</h5>
                    </div>
                    <div className="col-md-3">
                      <h2>30 +</h2>
                      <h5>Food Menu</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About