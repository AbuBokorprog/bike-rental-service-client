import React, { useEffect } from "react";
import Banner from "../component/home/Banner";
import FeaturesBikes from "../component/home/FeaturesBikes";
import HowToRent from "../component/home/HowToRent";
import WhyChooseUs from "../component/home/WhyChooseUs";
import Testimonials from "../component/home/Testimonials";
import CouponsDiscount from "../component/home/CouponsDiscount";
import ContactForm from "../component/home/ContactForm";
// import { useAppSelector } from "../redux/hooks/hooks";
// import { currentToken, currentUser } from "../redux/store";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <FeaturesBikes />
      <HowToRent />
      <WhyChooseUs />
      <Testimonials />
      <CouponsDiscount />
      <ContactForm />
    </div>
  );
};

export default Home;
