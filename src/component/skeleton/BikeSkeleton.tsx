import { Skeleton } from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BikeSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center gap-5 lg:gap-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((b) => (
        <div className="p-3 border shadow rounded-md bg-white" key={b}>
          <div className="rounded-md h-60 w-full bg-secondary-200 animate-pulse"></div>
          <div>
            <Skeleton />
          </div>
          <div className=" my-4">
            <div className="flex items-center gap-2 mx-auto">
              <p className=" text-secondary-500">
                {' '}
                <Skeleton width={60} />
              </p>
              <Skeleton width={60} />
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <p className=" text-secondary-500">
                {' '}
                <Skeleton width={60} />
              </p>
              <Skeleton width={60} />
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <p className=" text-secondary-500">
                {' '}
                <Skeleton width={60} />
              </p>
              <Skeleton width={60} />
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <p className=" text-secondary-500">
                {' '}
                <Skeleton width={60} />
              </p>
              <Skeleton width={60} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="flex items-center gap-1">
                <p className="text-lg font-semibold text-primary-500">
                  <Skeleton width={80} height={20} />
                </p>
                <p className="text-sm">
                  <Skeleton width={80} height={20} />
                </p>
              </span>
            </div>
            <Skeleton width={120} height={40} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeSkeleton;
