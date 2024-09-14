import React, { useEffect } from 'react';
import {
  useGetUserRentalsQuery,
  useRentalPaymentMutation,
} from '../../../redux/features/rentals/rentals.api';
import { Box, Button, Tab, Tabs } from '@mui/material';
import { TRental } from '../../../types/rentals/rentals.type';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyRentals: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { data, isError } = useGetUserRentalsQuery(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paidRental = data?.data?.filter(
    (r: TRental) => r?.paymentStatus === 'Paid'
  );
  const unPaidRental = data?.data?.filter(
    (r: TRental) => r?.paymentStatus === 'Unpaid'
  );
  const confirmRentals = data?.data?.filter(
    (r: TRental) => r?.isConfirm === true
  );
  const [payment] = useRentalPaymentMutation();
  const paymentHandler = async (id: string) => {
    try {
      const res = await payment(id).unwrap();
      if (res?.success) {
        window.location.href = res?.data?.payment_url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center text-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        My Rental Bikes.
      </h1>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Rentals" {...a11yProps(0)} />
            <Tab label="Paid" {...a11yProps(1)} />
            <Tab label="Unpaid" {...a11yProps(2)} />
            <Tab label="Confirmed" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* All rentals */}
        <CustomTabPanel value={value} index={0}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto">
            {data?.data?.length > 0 ? (
              data?.data?.map((rental: TRental, index: number) => (
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
                        <strong>Total Cost:</strong> $
                        {rental?.totalCost?.toFixed(2)}
                      </p>
                    )}
                    {rental?.returnTime && (
                      <p className="text-gray-800 font-medium mt-2">
                        <strong>Due Cost:</strong> $
                        {rental?.duePayment?.toFixed(2)}
                      </p>
                    )}
                    {/* Pay Button if Unpaid */}
                    {rental?.paymentStatus === 'Unpaid' && (
                      <Button
                        variant="contained"
                        onClick={() => paymentHandler(rental?._id)}
                      >
                        Pay
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
              <div className="col-span-3">
                <p>
                  No rentals? Don’t worry, the perfect bike is waiting for you!
                  Explore now and start your journey!
                </p>
              </div>
            )}
          </div>
        </CustomTabPanel>
        {/* Paid rentals */}
        <CustomTabPanel value={value} index={1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto">
            {paidRental?.length > 0 ? (
              paidRental?.map((rental: TRental, index: number) => (
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
                        <strong>Total Cost:</strong> $
                        {rental?.totalCost?.toFixed(2)}
                      </p>
                    )}
                    {rental?.returnTime && (
                      <p className="text-gray-800 font-medium mt-2">
                        <strong>Due Cost:</strong> $
                        {rental?.duePayment?.toFixed(2)}
                      </p>
                    )}
                    {/* Pay Button if Unpaid */}
                    {rental?.paymentStatus === 'Unpaid' && (
                      <Button
                        variant="contained"
                        onClick={() => paymentHandler(rental?._id)}
                      >
                        Pay
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
              <div className="col-span-3">
                <p>
                  No rentals? Don’t worry, the perfect bike is waiting for you!
                  Explore now and start your journey!
                </p>
              </div>
            )}
          </div>
        </CustomTabPanel>
        {/* unpaid rentals */}
        <CustomTabPanel value={value} index={2}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto">
            {unPaidRental?.length > 0 ? (
              unPaidRental?.map((rental: TRental, index: number) => (
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
                        <strong>Total Cost:</strong> $
                        {rental?.totalCost?.toFixed(2)}
                      </p>
                    )}
                    {rental?.returnTime && (
                      <p className="text-gray-800 font-medium mt-2">
                        <strong>Due Cost:</strong> $
                        {rental?.duePayment?.toFixed(2)}
                      </p>
                    )}
                    {/* Pay Button if Unpaid */}
                    {rental?.paymentStatus === 'Unpaid' && (
                      <Button
                        variant="contained"
                        onClick={() => paymentHandler(rental?._id)}
                      >
                        Pay
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
              <div className="col-span-3">
                <p>
                  No rentals? Don’t worry, the perfect bike is waiting for you!
                  Explore now and start your journey!
                </p>
              </div>
            )}
          </div>
        </CustomTabPanel>
        {/* confirm rental */}
        <CustomTabPanel value={value} index={3}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto">
            {confirmRentals?.length > 0 ? (
              confirmRentals?.map((rental: TRental, index: number) => (
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
                        <strong>Total Cost:</strong> $
                        {rental?.totalCost?.toFixed(2)}
                      </p>
                    )}
                    {rental?.returnTime && (
                      <p className="text-gray-800 font-medium mt-2">
                        <strong>Due Cost:</strong> $
                        {rental?.duePayment?.toFixed(2)}
                      </p>
                    )}
                    {/* Pay Button if Unpaid */}
                    {rental?.paymentStatus === 'Unpaid' && (
                      <Button
                        variant="contained"
                        onClick={() => paymentHandler(rental?._id)}
                      >
                        Pay
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
              <div className="col-span-3">
                <p>
                  No rentals? Don’t worry, the perfect bike is waiting for you!
                  Explore now and start your journey!
                </p>
              </div>
            )}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default MyRentals;
