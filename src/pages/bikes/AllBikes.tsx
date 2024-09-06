import React from "react";
import BikeComponent from "../../component/bikes/BikeComponent";
import BikesFilter from "../../component/bikes/BikesFilter";
import { Link, Pagination, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../component/Breadcrumbs";

const AllBikes = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary" href="/">
      Home
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }} className="">
      All Bikes
    </Typography>,
  ];
  return (
    <div>
      <div className="">
        <img
          src="/src/assets/images/banner-5.png"
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="my-5">
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="my-5">
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
