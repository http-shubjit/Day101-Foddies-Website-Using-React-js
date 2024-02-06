import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


import img1 from '../assets/collection1.png'
import img2 from '../assets/collection2.png'
import img3 from '../assets/foofie1.png';




const Topcollection = () => {
  return (

    <div className="container-fluid Topcollection  py-5">
      <h1 className='main_heading text-center'> Top <span>Collection</span>
        <p className='text-center main_p py-3'>All Our Meals Are So Delicious</p>
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

          <SwiperSlide><img src={img1} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>

          <SwiperSlide style={{ height: '300px' }}>
            <img src={img2} alt="" className="img-fluid rounded mx-auto d-block rounded" style={{ width: '80%' }} />
          </SwiperSlide>
          <SwiperSlide><img src={img3} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>
          <SwiperSlide><img src={img1} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>
          <SwiperSlide style={{ height: '300px' }}>
            <img src={img2} alt="" className="img-fluid rounded mx-auto d-block rounded" style={{ width: '80%' }} />
          </SwiperSlide>
          <SwiperSlide><img src={img3} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>
          <SwiperSlide><img src={img1} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>
          <SwiperSlide style={{ height: '300px' }}>
            <img src={img2} alt="" className="img-fluid rounded mx-auto d-block rounded" style={{ width: '80%' }} />
          </SwiperSlide>
          <SwiperSlide><img src={img3} alt="" className='img-fluid rounded mx-auto d-block rounded' /></SwiperSlide>
        </Swiper>
      </div>
    </div >


  )
}

export default Topcollection