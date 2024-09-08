import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "@mui/material";
import { useGetAllBikesQuery } from "../../redux/features/bikes/bikes.api";
import { FaBuffer } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const FeaturesBikes:React.FC = () => {
  const {data} = useGetAllBikesQuery([{name: 'limit', value: '6'}, {name:'sort', value: 'createdAt'}])


  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 uppercase text-center">
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
            loop={true}
            autoplay={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.data?.map((b) => (
              <SwiperSlide key={b._id}>
                <div className="p-3 border shadow rounded-md bg-white">
                  <img
                    src={b?.images[0]}
                    alt={b?.name}
                    className="rounded-md h-60 w-full"
                  />
                  <div>
                    <h3 className="font-bold text-xl h-10 mt-2">
                      {b?.name}
                    </h3>
                  </div>
                  <div className=" my-4">
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Brand:</p>
                <TwoWheelerIcon color="primary" />
                <p className="font-semibold">{b?.brand}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Model:</p>
                <FaBuffer className="text-primary-500" />
                <p className="font-semibold">{b?.model}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Age Group:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/Age.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.ageGroup}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Registration year:</p>
                <SlCalender className="text-primary-500" />
                <p className="font-semibold">{b?.introductionYear}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Maximum speed:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/year.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.maximumSpeed}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Engine Type:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/Cooling.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.engineType}</p>
              </div>
            </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="flex items-center gap-1">
                        <p className="text-lg font-semibold text-primary-500">
                          {b?.pricePerHour} TK.
                        </p>
                        <p className="text-sm">per Hour</p>
                      </span>
                    </div>
                    <Link to={`/bikes/${b?._id}`}>
                    <Button variant="contained" color="primary">
                      View More
                    </Button>
                    </Link>
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
