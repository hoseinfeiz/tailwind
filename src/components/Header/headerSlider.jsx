import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const HeaderSlider = () => {
  return (
    <div className="mt-8">
      <Swiper modules={[Autoplay, Pagination]} autoplay={false} spaceBetween={10} pagination={{ clickable: true }} slidesPerView={4} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider1.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider3.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg" alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeaderSlider
