import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface UpdateProfileModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
  handleUpdate: (updatedUser: User) => void;
}

const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({
  open,
  handleClose,
  user,
  handleUpdate,
}) => {
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  // Handler for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  // Update profile on form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdate(updatedUser);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Profile</DialogTitle>
      <form onSubmit={handleFormSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            value={updatedUser.phone}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="dense"
            label="Address"
            name="address"
            value={updatedUser.address}
            onChange={handleChange}
            variant="outlined"
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
