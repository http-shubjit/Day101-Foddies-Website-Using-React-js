import React from 'react'
import logo from '../assets/logo-tCGWTeGX.png'
import cart from '../assets/cart.png'

const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg Nav_main bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Facility</a>
            </li>
          </ul>
          <form className="d-flex align-items-center" role="search">
            <div className="icons">
              <i class="fa-solid fa-magnifying-glass" ></i>
              <img src={cart} alt=""
                height="32"
                width="27"
                bgcolor="white"
                className='img-small mx-3' />
            </div>

            <button className="btn1 mx-lg-3" type="button">Login</button>

          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar