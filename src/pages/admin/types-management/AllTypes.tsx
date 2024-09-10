import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  useDeleteTypeMutation,
  useGetAllTypesQuery,
} from '../../../redux/features/types/Types.api';
import { TType } from '../../../types/types/types.type';
import TypesUpdateField from '../../../component/dashboard/admin/TypesDashboard/TypesUpdateField';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
const AllTypes: React.FC = () => {
  const { data } = useGetAllTypesQuery(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState<TType | undefined>();

  const [deleteType] = useDeleteTypeMutation();
  // Open and close modal handlers
  const handleOpenModal = (type: TType) => {
    setId(type);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setId(undefined);
    setOpenModal(false);
  };

  const deleteHandler = async (id: string) => {
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
          const res = await deleteType(id).unwrap();
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
        All Types.
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 items-center mx-auto my-5 lg:my-16">
        {data?.data?.map((t: TType) => (
          <Card key={t?._id} sx={{ maxWidth: 345 }} className="">
            <CardMedia sx={{ height: 240 }} image={t?.image} title={t?.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t?.name}
              </Typography>
            </CardContent>
            <CardActions className="flex items-center justify-between">
              <button
                onClick={() => handleOpenModal(t)}
                className="bg-primary-500 text-white px-4 py-2 rounded-md"
              >
                Update
              </button>

              <Button
                size="small"
                variant="outlined"
                onClick={() => deleteHandler(t._id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
        <TypesUpdateField
          handleClose={handleCloseModal}
          open={openModal}
          id={id}
        />
      </div>
    </div>
  );
};

export default AllTypes;
