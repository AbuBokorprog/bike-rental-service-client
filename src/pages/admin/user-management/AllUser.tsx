import React from "react";
import { useGetAllUsersQuery } from "../../../redux/features/user/User";

const AllUser = () => {
  const { data } = useGetAllUsersQuery(undefined);
  console.log(data);
  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold text-center">All users</h1>
    </div>
  );
};

export default AllUser;
