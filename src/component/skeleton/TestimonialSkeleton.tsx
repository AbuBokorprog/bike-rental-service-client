import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React from 'react';
import { Skeleton } from '@mui/material';

const TestimonialSkeleton: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center uppercase">
        <Skeleton width={200} className="mx-auto" />
      </h3>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6]?.map((b) => (
            <SwiperSlide key={b}>
              <div className="p-5 border shadow-md rounded-md bg-white">
                <p className="bg-secondary-200 animate-pulse h-32"></p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-secondary-200 animate-pulse"></div>
                    <Skeleton width={80} />
                  </div>
                  <div className="w-14 bg-secondary-200 animate-pulse h-14 rounded-lg"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
