import React, { useState } from "react";
import UpdateProfileModal from "../../component/dashboard/UpdateProfileModal";
import { useGetProfileInfoQuery } from "../../redux/features/user/User";

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

const AdminDashboard = () => {

  const {data} = useGetProfileInfoQuery(undefined)
  const user = (data?.data[0])

  const [openModal, setOpenModal] = useState(false);

  // Open and close modal handlers
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle user profile update
  const handleUpdateProfile = (updatedUser: User) => {
    
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center text-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        Dashboard
      </h1>
      <p className="mt-4">Welcome, {user?.name}!</p>

      <div className="mt-8 space-y-4 mx-auto">
        <img
          src={user?.image}
          alt="User profile"
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />
        <div className="text-lg">
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Address:</strong> {user?.address}
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="bg-primary-500 text-white px-4 py-2 rounded-md"
        >
          Update Profile
        </button>
      </div>

      {/* Modal for updating profile */}
      <UpdateProfileModal
        open={openModal}
        handleClose={handleCloseModal}
        user={user}
        
      />
    </div>
  );
};

export default AdminDashboard;
