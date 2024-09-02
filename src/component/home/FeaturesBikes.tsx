import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@mui/material";

const FeaturesBikes = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-10">
        Latest Bikes.
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
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6]?.map((b) => (
              <SwiperSlide key={b}>
                <div className="p-3 border shadow rounded-md bg-white">
                  <img
                    src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/baptiste-david-XfbjTaxSnuw-unsplash.jpg"
                    alt=""
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="text-bold text-xl">Kawasaki KLR 650</h3>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-center my-4">
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                      <TwoWheelerIcon color="primary" />
                      <div>
                        <p className="font-semibold">BMW</p>
                        <p className=" text-secondary-400">Model</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="flex items-center gap-1">
                        <p className="text-lg font-semibold text-primary-500">
                          120 TK.
                        </p>
                        <p className="text-sm">per Hour</p>
                      </span>
                    </div>
                    <Button variant="contained" color="primary">
                      View More
                    </Button>
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

export default FeaturesBikes;
