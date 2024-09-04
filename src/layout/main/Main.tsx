import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/header-footer/Navbar";
import Footer from "../../component/header-footer/Footer";

const Main: React.FC = () => {
  return (
    <div className="px-2 lg:px-10">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
