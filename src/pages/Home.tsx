import React from "react";
import Banner from "../component/home/Banner";
import FeaturesBikes from "../component/home/FeaturesBikes";
import HowToRent from "../component/home/HowToRent";
import WhyChooseUs from "../component/home/WhyChooseUs";
import Testimonials from "../component/home/Testimonials";
import CouponsDiscount from "../component/home/CouponsDiscount";
import Contacts from "../component/home/Contacts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesBikes />
      <HowToRent />
      <WhyChooseUs />
      <Testimonials />
      <CouponsDiscount />
      <Contacts />
    </div>
  );
};

export default Home;
