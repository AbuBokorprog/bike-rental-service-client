import React from 'react';
import { Button, Skeleton } from '@mui/material';

const coupons = [
  {
    code: 'SUMMER10',
    discount: '10% OFF',
    description: 'Valid on all mountain bikes.',
    expires: 'Expires: 09/30/2024',
  },
  {
    code: 'FIRST15',
    discount: '15% OFF',
    description: 'For first-time renters only.',
    expires: 'Expires: 10/15/2024',
  },
  // Add more coupons as needed
];

const CouponSkeleton: React.FC = () => {
  return (
    <section className="">
      <div className=" mx-auto">
        <h3 className="text-xl lg:text-3xl font-semibold my-10 lg:my-16 text-center uppercase">
          <Skeleton width={200} className="mx-auto" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((c, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Skeleton height={50} />
              <Skeleton />
              <Skeleton height={20} />
              <Skeleton width={100} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouponSkeleton;
