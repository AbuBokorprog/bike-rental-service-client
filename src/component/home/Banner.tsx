import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

const Banner: React.FC = () => {
  return (
    <div className="w-full relative mb-32">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-full">
          <img src="./images/banner.png" alt="banner" className="rounded-md" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-2.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-3.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-4.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-5.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-6.png"
            alt="banner"
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <Button variant="contained" color="primary">
              Rent Bike
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Search bar */}
      <div className="bg-white max-w-screen-xl mx-auto p-5 rounded-md -bottom-16 absolute z-30 right-0 left-0">
        <form className="w-full mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-primary-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-primary-500 dark:text-primary-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-20 p-4 ps-10 text-sm text-primary-900 border border-primary-300 rounded-lg bg-primary-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search your bike..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-0 w-32 inset-y-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
