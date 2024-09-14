/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  useDeleteComparisonMutation,
  useGetAllComparisonQuery,
} from '../redux/features/comparison/comparison.api';
import { TComparison } from '../types/comparison/comparison.type';
import CompareSkeleton from '../component/skeleton/CompareSkeleton';
import { toast } from 'sonner';
import Title from '../component/helmet/Title';

// *Compare page.
const Compare: React.FC = () => {
  const { data, isLoading, isError } = useGetAllComparisonQuery(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [deleteComparison] = useDeleteComparisonMutation();
  const handleDelete = async (id: string) => {
    const toastId = toast.loading('Loading...');
    try {
      const res = await deleteComparison(id).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) {
    return (
      <div>
        <Typography
          variant="h3"
          className="text-center my-10 lg:my-16 uppercase font-bold"
        >
          Compare
        </Typography>
        <CompareSkeleton />
      </div>
    );
  }

  if (!data?.data?.length) {
    return (
      <Typography variant="h6" className="text-center mt-10 text-red-500">
        No comparison data available.
      </Typography>
    );
  }

  return (
    <div>
      <Title
        title="Compare - RentMyRide"
        description="This is Bikes compare page."
      />
      <h3 className="text-center my-10 lg:my-16 uppercase font-bold">
        Compare
      </h3>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Product Details</TableCell>
              {data?.data?.map((comparison: TComparison, index: number) => (
                <TableCell key={index} className="relative">
                  {comparison.bikeId.name}
                  <IconButton
                    size="small"
                    className="absolute top-0 right-0"
                    aria-label="close"
                    onClick={() => handleDelete(comparison?._id)}
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data?.data[0]?.bikeId || {}).map(
              (key) =>
                key !== 'name' && (
                  <TableRow key={key}>
                    <TableCell
                      component="th"
                      scope="row"
                      className="font-semibold"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </TableCell>
                    {data?.data?.map(
                      (comparison: TComparison, index: number) => (
                        <TableCell key={index}>
                          {key === 'images' ? (
                            <img
                              src={comparison.bikeId.images[0]}
                              alt={comparison.bikeId.name}
                              className="w-24 h-auto"
                            />
                          ) : (
                            (comparison.bikeId as any)[key]
                          )}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Compare;
