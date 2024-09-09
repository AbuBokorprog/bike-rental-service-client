import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleRentalQuery } from "../redux/features/rentals/rentals.api";

const Payment:React.FC = () => {
  const {id} = useParams()
 
  const {data} = useGetSingleRentalQuery(id)

  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center uppercase">
        Payment.
      </h3>
    </div>
  );
};

export default Payment;
