import React, { useEffect, useState } from 'react';
import Banner from '../component/home/Banner';
import FeaturesBikes from '../component/home/FeaturesBikes';
import HowToRent from '../component/home/HowToRent';
import WhyChooseUs from '../component/home/WhyChooseUs';
import Testimonials from '../component/home/Testimonials';
import CouponsDiscount from '../component/home/CouponsDiscount';
import ContactForm from '../component/home/ContactForm';
import BikeLoader from '../component/BikeLoader';
// import { useAppSelector } from "../redux/hooks/hooks";
// import { currentToken, currentUser } from "../redux/store";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <BikeLoader />
      ) : (
        <div>
          <Banner />
          <FeaturesBikes />
          <HowToRent />
          <WhyChooseUs />
          <Testimonials />
          <CouponsDiscount />
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default Home;
