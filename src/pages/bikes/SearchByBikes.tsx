import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BikeComponent from '../../component/bikes/BikeComponent';
import { useGetAllBikesQuery } from '../../redux/features/bikes/bikes.api';
import CustomBreadcrumbs from '../../component/Breadcrumbs';
import { Link, Typography } from '@mui/material';

const SearchByBikes: React.FC = () => {
  const { slug } = useParams();

  const { data, isLoading } = useGetAllBikesQuery([
    { name: 'searchTerm', value: slug },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary" href="/">
      Home
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }} className="">
      {slug}
    </Typography>,
  ];

  return (
    <div>
      <div className="my-5">
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <BikeComponent bikes={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default SearchByBikes;
