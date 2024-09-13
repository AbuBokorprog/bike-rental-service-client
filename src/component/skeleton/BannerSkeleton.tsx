import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Skeleton } from '@mui/material';

const BannerSkeleton: React.FC = () => {
  return (
    <div className="w-full relative mb-32">
      <Swiper
        navigation={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide className="relative w-full" key={i}>
            <div className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh] bg-secondary-200 animate-pulse"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search bar */}
      <div className=" border shadow max-w-screen-xl mx-auto p-5 rounded-md -bottom-20 lg:-bottom-16 absolute z-30 right-0 left-0">
        <form className="w-full mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-secondary-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Skeleton width={20} height={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full lg:h-20 p-4 ps-10 text-sm text-secondary-900 border border-secondary-300 rounded-lg bg-secondary-50 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-0 lg:w-32 inset-y-0 bg-secondary-500 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
            >
              <Skeleton />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerSkeleton;
