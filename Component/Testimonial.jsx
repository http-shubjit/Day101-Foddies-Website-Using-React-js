import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


import img1 from '../assets/collection1.png'
import img2 from '../assets/collection2.png'
import img3 from '../assets/foofie1.png';




const Testimonial = () => {
  return (

    <div className="container-fluid Topcollection  py-5">
      <h1 className='main_heading text-center'> What  <span>Our Clients say</span>

      </h1>


      <div className="container text-cente py-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className="row">
              <div className="col-md-4">
                <div className="test_col1">
                  <img src="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="test_col2">
                  <h5>Johm Smith</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, provident? Voluptatibus aliquid odio molestias amet inventore, dolorem ipsa autem libero!</p>

                  <span class="badge badge-pill badge-primary ">Dancer</span>


                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-4">
                <div className="test_col1">
                  <img src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="test_col2">
                  <h5>Johm Smith</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, provident? Voluptatibus aliquid odio molestias amet inventore, dolorem ipsa autem libero!</p>

                  <span class="badge badge-pill badge-primary ">Master</span>


                </div>
              </div>
            </div>


          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-md-4">
                <div className="test_col1">
                  <img src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="test_col2">
                  <h5>Johm Smith</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, provident? Voluptatibus aliquid odio molestias amet inventore, dolorem ipsa autem libero!</p>

                  <span class="badge badge-pill badge-primary ">Devloper</span>


                </div>
              </div>
            </div>


          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-md-4">
                <div className="test_col1">
                  <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="test_col2">
                  <h5>Johm Smith</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, provident? Voluptatibus aliquid odio molestias amet inventore, dolorem ipsa autem libero!</p>

                  <span class="badge badge-pill badge-primary ">Teacher</span>


                </div>
              </div>
            </div>


          </SwiperSlide>


        </Swiper>
      </div>
    </div >


  )
}

export default Testimonial