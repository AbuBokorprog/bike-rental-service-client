import React, { useEffect, useRef, useState } from 'react';
import BikeComponent from '../../component/bikes/BikeComponent';
import BikesFilter from '../../component/bikes/BikesFilter';
import { Link, Pagination, Typography } from '@mui/material';
import CustomBreadcrumbs from '../../component/Breadcrumbs';
import { useGetAllBikesQuery } from '../../redux/features/bikes/bikes.api';
import { motion, useInView } from 'framer-motion';
import Title from '../../component/helmet/Title';
const AllBikes: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [brand, setBrand] = useState<string | undefined>(undefined);
  const [model, setModel] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);
  const [available, setAvailable] = useState<string | undefined>(undefined);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useGetAllBikesQuery([
    brand
      ? { name: 'brand', value: brand }
      : model
      ? { name: 'model', value: model }
      : age
      ? { name: 'ageGroup', value: age }
      : available
      ? { name: 'isAvailable', value: available }
      : { name: 'page', value: page },
  ]);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const brands = [
    { id: 1, brand: 'Honda' },
    { id: 2, brand: 'Yamaha' },
    { id: 3, brand: 'Suzuki' },
    { id: 4, brand: 'Kawasaki' },
    { id: 5, brand: 'Ducati' },
    { id: 6, brand: 'Harley-Davidson' },
    { id: 7, brand: 'BMW' },
    { id: 8, brand: 'Triumph' },
    { id: 9, brand: 'KTM' },
    { id: 10, brand: 'Royal Enfield' },
    { id: 11, brand: 'Aprilia' },
    { id: 12, brand: 'Bajaj' },
    { id: 13, brand: 'Hero' },
    { id: 14, brand: 'TVS' },
    { id: 15, brand: 'MV Agusta' },
  ];

  const models =
    data?.data?.map((b) => ({
      model: b?.model,
      id: b?._id,
    })) || [];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary" href="/">
      Home
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }} className="">
      All Bikes
    </Typography>,
  ];

  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  return (
    <div>
      <Title
        title="All bikes - RentMyRide"
        description="This is all bikes page."
      />
      <div className="relative">
        <img
          src="./images/banner-2.png"
          alt=""
          className="rounded-md lg:h-[50vh] w-full"
        />
        <h3 className="absolute top-[10vh] uppercase lg:top-[20vh] inset-x-0 transform left-0 right-0 mx-auto text-white text-2xl font-bold lg:text-6xl text-center">
          All Bikes.
        </h3>
      </div>
      <div className="my-5">
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="my-5">
        <BikesFilter
          brands={brands}
          models={models}
          age={age}
          available={available}
          brand={brand}
          model={model}
          setAge={setAge}
          setAvailable={setAvailable}
          setBrand={setBrand}
          setModel={setModel}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 1, ease: 'linear' }}
        className="my-8 lf:my-16"
      >
        <BikeComponent bikes={data?.data} isLoading={isLoading} />
      </motion.div>

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
