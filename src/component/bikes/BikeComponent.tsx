import { Button } from '@mui/material';
import React from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { Link } from 'react-router-dom';
import { TBike } from '../../types/bikes/bike.type';
import { FaBuffer } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BikeComponent: React.FC<{ bikes: TBike[] | undefined }> = ({ bikes }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-5 lg:gap-10">
      {bikes?.map((b) => (
        <div key={b?._id} className="p-3 border shadow-md rounded-md bg-white">
          <img src={b?.images[0]} alt="" className="rounded-md h-60 w-full" />
          <div>
            <h3 className="font-bold text-xl h-10 mt-2">{b?.name}</h3>
          </div>
          <div className="hidden md:block">
            <div className=" my-4">
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Brand:</p>
                <TwoWheelerIcon color="primary" />
                <p className="font-semibold">{b?.brand}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Model:</p>
                <FaBuffer className="text-primary-500" />
                <p className="font-semibold">{b?.model}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Age Group:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/Age.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.ageGroup}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Registration year:</p>
                <SlCalender className="text-primary-500" />
                <p className="font-semibold">{b?.introductionYear}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Maximum speed:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/year.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.maximumSpeed}</p>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <p className=" text-secondary-500">Engine Type:</p>
                <img
                  src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/Cooling.svg"
                  alt=""
                  className="w-5"
                />
                <p className="font-semibold">{b?.engineType}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="flex items-center gap-1">
                <p className="text-lg font-semibold text-primary-500">
                  {b?.pricePerHour} TK.
                </p>
                <p className="text-sm">per Hour</p>
              </span>
            </div>
            <Link to={`/bikes/${b?._id}`}>
              <Button variant="contained" color="primary">
                View More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeComponent;
