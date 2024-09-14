import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useUpdateProfileInfoMutation } from '../../redux/features/user/User';
import { toast } from 'sonner';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

// user interface
interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}
// interface of react props.
interface UpdateProfileModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
}

// update profile modal.
const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({
  open,
  handleClose,
  user,
}) => {
  // react hook form
  const { handleSubmit, control } = useForm();
  // update profile mutation.
  const [updateInfo] = useUpdateProfileInfoMutation();
  // Update profile on form submission
  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Loading...');

    try {
      const res = await updateInfo(data).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error as unknown);
      toast.error(error as string, { id: toastId, duration: 2000 });
    }

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Profile</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Controller
            control={control}
            name="name"
            defaultValue={user?.name}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                margin="dense"
                label="Name"
                variant="outlined"
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            defaultValue={user?.email}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                margin="dense"
                label="Email"
                variant="outlined"
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            defaultValue={user?.phone}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                margin="dense"
                label="Phone"
                variant="outlined"
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            defaultValue={user?.address}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                margin="dense"
                label="Address"
                variant="outlined"
              />
            )}
          />

          <Controller
            control={control}
            name="image"
            defaultValue={user?.image}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                margin="dense"
                label="Image"
                variant="outlined"
              />
            )}
          />
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
  );
};

export default UpdateProfileModal;
