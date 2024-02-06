import React from 'react'
import img1 from '../assets/delivery1-VE-uoCTq.png'
import img2 from '../assets/delivery2-1vMH2tRW.png'
import img3 from '../assets/delivery3-gpGc9IdM.png'



const Delhivery = () => {
  return (
    <>

      <div className="container-fluid text-center py-5">
        <h1 className="main_heading">Why <span>Foodie's</span></h1>
        <div className="container py-4 ">
          <div className="row gx-0 " >
            <div className="col-lg-3 mx-auto text-center">
              <div className="delivery_col1">
                <img src={img1} alt="" />
                <h3>Easy To Order</h3>
              </div>
            </div>
            <div className="col-lg-3 mx-auto text-center">
              <div className="delivery_col1">
                <img src={img2} alt="" />
                <h3>Fastest Delivery</h3>
              </div>
            </div>
            <div className="col-lg-3 mx-auto text-center">
              <div className="delivery_col1">
                <img src={img3} alt="" />
                <h3>Best Quality</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>)
}

export default Delhivery