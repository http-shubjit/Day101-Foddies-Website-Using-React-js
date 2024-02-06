import logo from '../assets/logo-tCGWTeGX.png'
const Fotter = () => {
  return (
    <div>

      <div className="container-fluid Fotter py-3">
        <div className="container">

          <div className="row gx-0 py-4  align-items-center">
            <div className="col md-3">
              <img src={logo} alt="" />
            </div>
            <div className="col md-8">
              <ul className=" Fotter_nav mx-auto d-flex mb-2 mb-lg-0 " >
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
            </div>
            <div className="col md-3">
              <div className="Fottericons text-end">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
          <div className="row  Fotter_row">
            <p className='text-white text-center  pt-4'> @copyright2024  | Shubhajit Biswal</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Fotter