import React from 'react'
import heroimg from '../assets/foodie-home-ak1eVlt3.png'

const Home = () => {
  return (
    <>
      <div className="container-fluid hero-main">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-lg-6">
              <div className="hero_col1 ">

                <h1>The taste of tradittion,
                  with a modern twist</h1>
                <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perferendis ad recusandae adipisci facere et quibusdam corrupti totam, earum eaque mollitia? Ab cumque quod expedita consequuntur illo. Quod, saepe pariatur?</p>
                <div className="hero-btns">
                  <button className='btn1 fs-5  btn0'>Get Sttarted</button>
                  <button className='btn1 fs-5 mx-lg-4 btn00'>See Our Menu</button>
                </div>
              </div>


            </div>
            <div className="col-lg-5">
              <div className="hero_col2">
                <img src={heroimg} alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Home