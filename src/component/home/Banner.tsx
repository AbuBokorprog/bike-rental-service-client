import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import './Banner.css';

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full relative mb-32">
      <Swiper
        navigation={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={
              activeIndex === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }
            }
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-white mb-4"
              initial={{ x: -200, opacity: 0, scale: 0.8 }}
              animate={
                activeIndex === 0
                  ? { x: 0, opacity: 1, scale: 1 }
                  : { x: -200, opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 1 }}
            >
              Explore the City with Ease
            </motion.h1>
            <motion.p
              className="text-lg text-white mb-6"
              initial={{ x: 100, opacity: 0 }}
              animate={
                activeIndex === 0
                  ? { x: 0, opacity: 1 }
                  : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.8 }}
            >
              Rent the best bikes and make your journey effortless. Affordable
              prices, reliable rides!
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={activeIndex === 0 ? { y: 0, scale: 1 } : { y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-2.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={
              activeIndex === 1
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, y: 200 }
            }
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-2xl lg:text-6xl font-bold text-white lg:mb-4">
              Your Ride, Your Way
            </motion.h1>
            <motion.p className="text-md lg:text-lg text-white lg:mb-6">
              Customize your ride, pick your favorite bike, and enjoy the best
              riding experience possible.
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-3.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={activeIndex === 2 ? { opacity: 1, x: 0 } : { opacity: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-white mb-4"
              initial={{ x: -100, scale: 1.1 }}
              animate={{ x: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              Fuel Your Freedom
            </motion.h1>
            <motion.p
              className="text-md lg:text-lg text-white mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Feel the wind in your hair as you ride the best bikes in town.
              Freedom is just a ride away.
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-4.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={
              activeIndex === 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
            }
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-white mb-4"
              initial={{ x: -100, scale: 0.9 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Rent & Ride Anytime.
            </motion.h1>
            <motion.p
              className="text-md lg:text-lg text-white mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our 24/7 service means you can ride whenever you need. Book your
              bike in minutes.
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-5.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={
              activeIndex === 4
                ? { opacity: 1, rotate: 0, scale: 1.1 }
                : { opacity: 0, rotate: 20 }
            }
            initial={{ opacity: 0, rotate: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-white mb-4"
              initial={{ x: -100, scale: 0.9 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bikes for Every Journey
            </motion.h1>
            <motion.p
              className="text-md lg:text-lg mb-6 text-white font-semibold"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Whether for a short trip or a long journey, we have the perfect
              ride for you
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src="./images/banner-6.png"
            alt="banner"
            className="rounded-md object-cover w-full h-[50vh] lg:h-[80vh]"
          />
          <motion.div
            className="absolute top-20 lg:top-1/3 inset-x-0 transform -translate-x-1/2 -translate-y-1/2 text-center"
            animate={
              activeIndex === 5
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 0.8 }
            }
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-white mb-4"
              initial={{ x: -100, scale: 0.9 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Adventure Awaits.
            </motion.h1>
            <motion.p
              className="text-md lg:text-lg text-white mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hit the road with our rugged bikes, built for any terrain. Your
              next adventure starts here.
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="contained" color="primary">
                Rent Bike
              </Button>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>

      {/* Search bar */}
      <div className="bg-white border shadow max-w-screen-xl mx-auto p-5 rounded-md -bottom-20 lg:-bottom-16 absolute z-30 right-0 left-0">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full lg:h-20 p-4 ps-10 text-sm text-primary-900 border border-primary-300 rounded-lg bg-primary-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search your bike..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-0 lg:w-32 inset-y-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
