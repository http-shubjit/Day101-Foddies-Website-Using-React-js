import img1 from '../assets/cheif1.png'
import img2 from '../assets/cheif2.png'
import img3 from '../assets/cheif3.png'
import img4 from '../assets/cheif4.png'

const Team = () => {
  return (
    <div className="container-fluid Team my-lg-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 py-3">
            <h1 className="main_heading">Meet Our <span>Chefs</span></h1>
          </div>
          <div className="col-lg-2 text-end">
            <button className='btn1 fs-6'>See All <i className="fa-solid fa-arrow-right ps-3"></i></button>

          </div>
        </div>
        <div className="row gx-0 py-5 text-center">
          <div className="col-lg-3">
            <div className="team_col1">
              <img src={img1} alt="" />
              <h5>mr. Gulati</h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team_col1">
              <img src={img2} alt="" />
              <h5>Mr Roy</h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team_col1">
              <img src={img3} alt="" />
              <h5>David goyal</h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team_col1">
              <img src={img4} alt="" />
              <h5>Gayke roi</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team