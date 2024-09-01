import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/header-footer/Navbar";
import Footer from "../../component/header-footer/Footer";

const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
