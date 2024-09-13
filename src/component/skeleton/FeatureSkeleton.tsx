import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Skeleton } from '@mui/material';

const FeaturesSkeleton: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-10 lg:my-16 uppercase text-center">
        <Skeleton width={200} className="mx-auto" />
      </h3>

      <div>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            autoplay={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((b) => (
              <SwiperSlide key={b}>
                <div className="p-3 border shadow rounded-md bg-white">
                  <div className="rounded-md h-60 w-full bg-secondary-200 animate-pulse"></div>
                  <div>
                    <Skeleton />
                  </div>
                  <div className=" my-4">
                    <div className="flex items-center gap-2 mx-auto">
                      <p className=" text-secondary-500">
                        {' '}
                        <Skeleton width={60} />
                      </p>
                      <Skeleton width={60} />
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <p className=" text-secondary-500">
                        {' '}
                        <Skeleton width={60} />
                      </p>
                      <Skeleton width={60} />
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <p className=" text-secondary-500">
                        {' '}
                        <Skeleton width={60} />
                      </p>
                      <Skeleton width={60} />
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <p className=" text-secondary-500">
                        {' '}
                        <Skeleton width={60} />
                      </p>
                      <Skeleton width={60} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="flex items-center gap-1">
                        <p className="text-lg font-semibold text-primary-500">
                          <Skeleton width={80} height={20} />
                        </p>
                        <p className="text-sm">
                          <Skeleton width={80} height={20} />
                        </p>
                      </span>
                    </div>
                    <Skeleton width={120} height={40} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default FeaturesSkeleton;
