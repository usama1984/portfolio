import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data =[
  {
    avatar: AVTR1,
    name: 'Tina',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nam cupiditate repellat ea tenetur? Voluptates, eum. Nisi modi quod, animi tempore ullam ea cum error, deleniti eveniet asperiores sunt quibusdam.'
  },
  {
    avatar: AVTR2,
    name: 'Mina',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nam cupiditate repellat ea tenetur? Voluptates, eum. Nisi modi quod, animi tempore ullam ea cum error, deleniti eveniet asperiores sunt quibusdam.'
  },
  {
    avatar: AVTR3,
    name: 'Lina',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nam cupiditate repellat ea tenetur? Voluptates, eum. Nisi modi quod, animi tempore ullam ea cum error, deleniti eveniet asperiores sunt quibusdam.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='Avatar1'/>
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className='client__review'>
                  {review}
                  </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials