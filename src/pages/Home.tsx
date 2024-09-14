import React, { useEffect } from 'react';
import Banner from '../component/home/Banner';
import FeaturesBikes from '../component/home/FeaturesBikes';
import HowToRent from '../component/home/HowToRent';
import WhyChooseUs from '../component/home/WhyChooseUs';
import Testimonials from '../component/home/Testimonials';
import CouponsDiscount from '../component/home/CouponsDiscount';
import ContactForm from '../component/home/ContactForm';
import Title from '../component/helmet/Title';

// *This is Home page.
const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Title
          title="RentMyRide - Your Premier Bike Rental Service"
          description="RentMyRide offers a wide range of bikes for rent, from mountain bikes to city bikes, with flexible rental options and competitive prices."
        />
        <Banner />
        <FeaturesBikes />
        <HowToRent />
        <WhyChooseUs />
        <Testimonials />
        <CouponsDiscount />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
