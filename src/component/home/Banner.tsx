import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

const Banner: React.FC = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-full">
          <img
            src="./src/assets/images/banner-3.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./src/assets/images/banner-4.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./src/assets/images/banner-5.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./src/assets/images/banner-6.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
