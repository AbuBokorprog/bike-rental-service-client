import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllBikesQuery } from "../../redux/features/bikes/bikes.api";
import { Link, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../component/Breadcrumbs";
import BikeComponent from "../../component/bikes/BikeComponent";

const CategoriesBikes: React.FC = () => {
  const { slug } = useParams();

  const { data } = useGetAllBikesQuery([{ name: "type", value: slug }]);
  console.log(data?.data);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary" href="/">
      Home
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }} className="">
      {slug}
    </Typography>,
  ];

  return (
    <div>
      <div className="my-5">
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <BikeComponent bikes={data?.data} />
    </div>
  );
};

export default CategoriesBikes;
