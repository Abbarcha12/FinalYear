"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
const Carsoul = () => {
  return (
    <div className='container mx-auto my-8 w-[100%]'>
      <Swiper spaceBetween={50} slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // Add more breakpoints as needed
          }}
      >
        <SwiperSlide className=''>
          <div className='flex border border-indigo-[#B32346] justify-center items-center h-[80px] w-[100%] shadow-lg bg-white rounded-lg shadow-[#000]-900 '>
            <p className='text-[#D2D2D2]  text-[18px] md:text-[48px] lg:text-[48px]   font-[700]'>NCC</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex border border-indigo-[#B32346] justify-center items-center h-[80px] w-[100%] shadow-lg bg-white rounded-lg shadow-[#000]-900 '>
            <p className='text-[#D2D2D2]  text-[18px] md:text-[48px] lg:text-[48px]  font-[700]'>KIU</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex border border-indigo-[#B32346] justify-center items-center h-[80px] w-[100%] shadow-lg bg-white rounded-lg shadow-[#000]-900 '>
            <p className='text-[#D2D2D2]  text-[18px] md:text-[48px] lg:text-[48px]  font-[700] p-7'>Tech  Zoid</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex border border-indigo-[#B32346] justify-center items-center h-[80px] w-[100%] shadow-lg bg-white rounded-lg shadow-[#000]-900 '>
            <p className='text-[#D2D2D2]  text-[18px] md:text-[48px] lg:text-[48px]  font-[700]'>CMH</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carsoul;
