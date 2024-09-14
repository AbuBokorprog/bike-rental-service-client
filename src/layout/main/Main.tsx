import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../component/header-footer/Navbar';
import Footer from '../../component/header-footer/Footer';
import BikeLoader from '../../component/BikeLoader';
// Main dashboard
const Main: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      {loading ? (
        <BikeLoader />
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto px-2 lg:px-10 pt-20 pb-10">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
