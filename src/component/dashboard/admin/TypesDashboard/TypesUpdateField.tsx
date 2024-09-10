import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { TType } from '../../../../types/types/types.type';
import { useUpdateTypesMutation } from '../../../../redux/features/types/Types.api';
import { toast } from 'sonner';

interface UpdateFieldModalProps {
  open: boolean;
  handleClose: () => void;
  id: TType | undefined;
}

const TypesUpdateField: React.FC<UpdateFieldModalProps> = ({
  open,
  handleClose,
  id,
}) => {
  const { handleSubmit, control, reset } = useForm();
  const [updateType] = useUpdateTypesMutation();
  useEffect(() => {
    if (id && open) {
      reset({
        name: id?.name || '',
        image: id?.image || '',
      });
    }
  }, [id, open, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Loading...');
    try {
      const res = await updateType({ id: id?._id, data: data }).unwrap();
      if (res?.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Type.</DialogTitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
          //   className="max-w-screen-2xl mx-auto my-5 lg:my-16 bg-secondary-50 p-5 rounded-md border shadow-lg"
        >
          <DialogContent>
            <div className="my-2">
              <Controller
                control={control}
                rules={{ required: 'Name is required' }}
                name="name"
                defaultValue={id?.name}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    className="block w-full"
                  />
                )}
              />
            </div>
            <div className="my-2">
              <Controller
                control={control}
                rules={{ required: 'Image is required' }}
                name="image"
                defaultValue={id?.image}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Image"
                    variant="outlined"
                    className="block w-full"
                  />
                )}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default TypesUpdateField;
