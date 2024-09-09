import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center uppercase">
        What Clients Say about Us.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quod illum laborum voluptatum ea dignissimos. Dolor illo
                architecto optio est alias. Quaerat dolor distinctio deleniti!
                Ex excepturi magni labore incidunt?
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1725148800&semt=ais_hybrid"
                      alt=""
                      className="w-16 rounded-full"
                    />
                    <h3>Abu Bokor</h3>
                  </div>
                  <div>
                    <img
                      src="/src/assets/images/left.png"
                      alt=""
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
