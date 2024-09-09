import React, { useState } from "react";
import BikeComponent from "../../component/bikes/BikeComponent";
import BikesFilter from "../../component/bikes/BikesFilter";
import { Link, Pagination, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../component/Breadcrumbs";
import { useGetAllBikesQuery } from "../../redux/features/bikes/bikes.api";

const AllBikes: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  // Create filter state
  const [filters, setFilters] = useState<
    { name: string; value: string | number | undefined }[]
  >([
    { name: "page", value: 1 },
    { name: "limit", value: 10 },
  ]);

  const { data } = useGetAllBikesQuery(filters);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const brands =
    data?.data?.map((b) => ({
      brand: b?.brand,
      id: b?._id,
    })) || [];
  const models =
    data?.data?.map((b) => ({
      model: b?.model,
      id: b?._id,
    })) || [];

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
        <BikesFilter
          brands={brands}
          models={models}
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      <div className="my-8 lf:my-16">
        <BikeComponent bikes={data?.data} />
      </div>

      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          count={data?.meta?.totalPage}
          color="primary"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AllBikes;
