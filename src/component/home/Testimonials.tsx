import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { TTestimonial } from '../../types/home/testimonials.type';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TTestimonial[]>();

  useEffect(() => {
    fetch('/testimonial.json')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

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
          {testimonials?.map((b: TTestimonial) => (
            <SwiperSlide key={b.id}>
              <div className="p-5 border shadow-md rounded-md bg-white">
                {b?.review}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={b?.image} className="w-14 h-14 rounded-full" />
                    <h3 className="font-semibold text-xl">{b?.name}</h3>
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
