import React from "react";
import BikeComponent from "../../component/bikes/BikeComponent";

const AllBikes = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-10 text-center uppercase">
        All Bikes.
      </h3>

      <BikeComponent bikes={undefined} />
    </div>
  );
};

export default AllBikes;
