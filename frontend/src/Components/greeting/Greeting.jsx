import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import greet1 from "../../assets/UserDashboard/greet1.png"
import greet2 from "../../assets/UserDashboard/bsw.png"

function Greeting() {
  return (
    <div className="greet">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        navigation
        className="swiper"
      >
        <SwiperSlide>
          <div className="greeting">
            <div className="greet_left">
              <h1 className="hello_user">Hello!</h1>
              <p className="greet_text1">Need a quick loan?</p>
              <p className="greet_text2">Tap here to explore personalized loans.</p>
              <button className="quick_button">Click here</button>
            </div>
            <div className="greet_right">
              <img src={greet2} alt="Loan Illustration" className="greet1" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="greeting">
            <div className="greet_left">
              <h1 className="hello_user">Welcome Back!</h1>
              <p className="greet_text1">Good to see you again.</p>
              <p className="greet_text2">Let's manage your money smartly.</p>
              <button className="quick_button">View Now</button>
            </div>
            <div className="greet_right">
              <img src={greet1} alt="Transactions" className="greet1" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Greeting
