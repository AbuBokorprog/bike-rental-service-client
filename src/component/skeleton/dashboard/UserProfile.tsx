import { Skeleton } from '@mui/material';
import React from 'react';

const UserProfile: React.FC = () => {
  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center text-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        <Skeleton width={200} className="mx-auto" />
      </h1>
      <p className="mt-4">
        <Skeleton width={200} className="mx-auto" />
      </p>

      <div className="mt-8 space-y-4 mx-auto">
        <div className="w-24 h-24 rounded-full object-cover mx-auto bg-secondary-200 animate-pulse"></div>
        <div className="text-lg">
          <p>
            <Skeleton width={200} className="mx-auto" />
          </p>
          <p>
            <Skeleton width={200} className="mx-auto" />
          </p>
          <p>
            <Skeleton width={200} className="mx-auto" />
          </p>
          <p>
            <Skeleton width={200} className="mx-auto" />
          </p>
        </div>

        <Skeleton width={140} height={60} className="mx-auto" />
      </div>
    </div>
  );
};

export default UserProfile;
