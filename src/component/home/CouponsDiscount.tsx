import React from "react";
import { Button } from "@mui/material";
// import Roulette from "../Roulette";

const coupons = [
  {
    code: "SUMMER10",
    discount: "10% OFF",
    description: "Valid on all mountain bikes.",
    expires: "Expires: 09/30/2024",
  },
  {
    code: "FIRST15",
    discount: "15% OFF",
    description: "For first-time renters only.",
    expires: "Expires: 10/15/2024",
  },
  // Add more coupons as needed
];

const CouponsDiscounts = () => {
  return (
    <section className=" py-10">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Exclusive Discounts & Coupons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((coupon, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{coupon.discount}</h3>
              <p className="text-lg mb-4">{coupon.description}</p>
              <p className="text-sm text-secondary-500 mb-4">
                {coupon.expires}
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigator.clipboard.writeText(coupon.code)}
              >
                Copy Code: {coupon.code}
              </Button>
            </div>
          ))}
        </div>

        {/* Bonus Feature: Spin the Wheel
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Try Your Luck!</h3>
          <Button variant="contained" color="secondary">
            Spin the Wheel
          </Button>
        </div> */}
        {/* <Roulette /> */}
      </div>
    </section>
  );
};

export default CouponsDiscounts;
