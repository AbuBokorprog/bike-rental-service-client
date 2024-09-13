import React, { useState } from 'react';
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from '../../../redux/features/bikes/bikes.api';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
} from '@mui/material';
import Swal from 'sweetalert2';
import { TBike } from '../../../types/bikes/bike.type';
import BikeUpdateField from '../../../component/dashboard/admin/BikeDashboard/BikeUpdateField';
import { toast } from 'sonner';

const AllBikesManage: React.FC = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  const [bike, setBike] = useState<TBike | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const [deleteBike] = useDeleteBikeMutation();
  const handleOpenModal = (data: TBike) => {
    setBike(data);
    setOpen(true);
  };

  const handleOpenClose = () => {
    setBike(undefined);
    setOpen(false);
  };

  const deleteBikeHandle = async (id: string) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteBike(id).unwrap();
          if (res?.success) {
            toast.success(res.message, { duration: 2000 });
          }
        }
      });
    } catch (error) {
      toast.error('Something went wrong', { duration: 2000 });
    }
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        All Bikes
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 items-center mx-auto my-5 lg:my-16">
        {isLoading
          ? // Skeleton loader
            Array.from(new Array(8)).map((_, index) => (
              <Card key={index} sx={{ maxWidth: 345 }} className="p-4">
                <Skeleton variant="rectangular" width="100%" height={240} />
                <CardContent>
                  <Skeleton variant="text" width="60%" height={40} />
                  <Skeleton variant="text" width="80%" height={30} />
                </CardContent>
                <CardActions className="flex items-center justify-between">
                  <Skeleton variant="rectangular" width={100} height={40} />
                  <Skeleton variant="rectangular" width={100} height={40} />
                  <Skeleton variant="rectangular" width={100} height={40} />
                </CardActions>
              </Card>
            ))
          : data?.data?.map((t: TBike) => (
              <Card key={t?._id} sx={{ maxWidth: 345 }} className="">
                <CardMedia
                  sx={{ height: 240 }}
                  image={t?.images[0]}
                  title={t?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t?.name}
                  </Typography>
                </CardContent>
                <CardActions className="flex items-center justify-between">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleOpenModal(t)}
                  >
                    Update
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => deleteBikeHandle(t?._id)}
                  >
                    Delete
                  </Button>
                  <Button size="small" variant="contained">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            ))}
        <BikeUpdateField
          handleClose={handleOpenClose}
          open={open}
          Bike={bike}
        />
      </div>
    </div>
  );
};

export default AllBikesManage;
