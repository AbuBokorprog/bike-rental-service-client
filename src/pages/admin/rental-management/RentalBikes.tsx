import React, { useEffect } from 'react';
import { Button, Skeleton } from '@mui/material';
import {
  useGetAllRentalsQuery,
  useReturnBikeMutation,
} from '../../../redux/features/rentals/rentals.api';
import { TMeta } from '../../../types/global.type';
import { TRental } from '../../../types/rentals/rentals.type';
import { toast } from 'sonner';

const RentalBikes: React.FC = () => {
  const { data, isLoading } = useGetAllRentalsQuery(undefined);

  const meta = data?.meta as TMeta;
  const rentals = data?.data?.result as TRental[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [returnBike] = useReturnBikeMutation();
  const calculateHandler = async (id: string) => {
    const toastId = toast.loading('Loading...');
    try {
      const res = await returnBike(id).unwrap();
      if (res?.success) {
        toast.success('Calculate the total cost successfully!', {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center text-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        Rental Bikes.
      </h1>

      <div className="grid gap-6 md:grid-cols-2 my-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto">
        {isLoading ? (
          // Skeleton loader
          Array.from(new Array(8)).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 relative"
            >
              <Skeleton variant="rectangular" width="100%" height={160} />
              <div className="mt-4">
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="40%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
              </div>
              <div className="mt-4">
                <Skeleton variant="rectangular" width={120} height={40} />
              </div>
              <div className="absolute top-0 left-0">
                <Skeleton variant="text" width={80} height={30} />
              </div>
            </div>
          ))
        ) : rentals?.length > 0 ? (
          rentals?.map((rental: TRental, index: number) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 relative"
            >
              <img
                src={rental?.bikeId?.images[0]}
                alt={rental?.bikeId?.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">
                {rental?.bikeId?.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Start Time:</strong>{' '}
                {new Date(rental?.startTime).toLocaleString()}
              </p>
              <div className="h-32">
                {rental?.returnTime && (
                  <p className="text-gray-600 mb-1">
                    <strong>Return Time:</strong>{' '}
                    {new Date(rental?.returnTime).toLocaleString()}
                  </p>
                )}
                {rental?.returnTime && (
                  <p className="text-gray-800 font-medium mt-2">
                    <strong>Total Cost:</strong> {rental?.totalCost?.toFixed()}{' '}
                    TK.
                  </p>
                )}
                {rental?.returnTime && (
                  <p className="text-gray-800 font-medium mt-2">
                    <strong>Due Cost:</strong> {rental?.duePayment?.toFixed()}{' '}
                    TK.
                  </p>
                )}
                {/* Pay Button if Unpaid */}
                {!rental?.returnTime && (
                  <Button
                    variant="contained"
                    onClick={() => calculateHandler(rental?._id)}
                  >
                    Calculate
                  </Button>
                )}
              </div>
              {/* payment status badge */}
              <div className="absolute top-0 left-0">
                <p
                  className={`${
                    rental?.paymentStatus === 'Paid'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  } px-2 py-1 rounded`}
                >
                  {rental?.paymentStatus}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <p className="my-5">No rentals!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentalBikes;
