import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

import Heading from '../../../components/Heading/Heading';

const Category = () => {
    return (
        <section>
            <Heading 
                heading="Order Online" 
                subheading="From 10 AM - 10 PM" 
            />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-20'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-20'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-20'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-20'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-20'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
