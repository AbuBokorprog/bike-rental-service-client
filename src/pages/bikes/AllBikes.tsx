import React from "react";
import BikeComponent from "../../component/bikes/BikeComponent";
import BikesFilter from "../../component/bikes/BikesFilter";
import { Pagination } from "@mui/material";

const AllBikes = () => {
  return (
    <div>
      <div>
        <img
          src="/src/assets/images/banner-5.png"
          alt=""
          className="rounded-md"
        />
      </div>
      {/* <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-10 text-center uppercase">
        All Bikes.
      </h3> */}

      <div className="my-5 lg:my-10">
        <BikesFilter />
      </div>

      <div className="my-8 lf:my-16">
        <BikeComponent bikes={undefined} />
      </div>

      <div className="flex items-center justify-center">
        <Pagination page={1} count={10} color="primary" shape="rounded" />
      </div>
    </div>
  );
};

export default AllBikes;
