import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {useTranslation} from 'react-i18next'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {

  const {t} = useTranslation();

  const data =[

    {
      avatar: AVTR1,
      name: 'Leon Trujillo',
      review: t('testimonial.test1')
    },
    {
      avatar: AVTR2,
      name: 'German Caceres',
      review: t('testimonial.test2')
    },
    {
      avatar: AVTR3,
      name: 'Milton Mejia',
      review: t('testimonial.test3')
    },
    {
      avatar: AVTR4,
      name: 'Edwin Almira',
      review: t('testimonial.test4')
    },
    {
      avatar:"",
      name: 'Publisoft',
      review:t('testimonial.test5')
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
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