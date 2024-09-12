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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TBike } from '../types/bikes/bike.type';

const Compare = () => {
  const products = [
    {
      name: 'MENS CLASSIC PANJABI',
      image: '/path/to/classic-panjabi.jpg',
      price: 3290,
      model: 'SA-EA60-HMCP-0865',
      brand: 'Sailor',
      availability: 'Out of Stock',
      rating: 0,
      summary: '',
    },
    {
      name: 'MENS FUSION PANJABI',
      image: '/path/to/fusion-panjabi.jpg',
      price: 3190,
      model: 'TM-EA60-HMFP-0700',
      brand: 'Sailor',
      availability: 'Out of Stock',
      rating: 0,
      summary: '',
    },
    {
      name: 'MENS FUSION PANJABI',
      image: '/path/to/fusion-panjabi.jpg',
      price: 3190,
      model: 'TM-EA60-HMFP-0700',
      brand: 'Sailor',
      availability: 'Out of Stock',
      rating: 0,
      summary: '',
    },
  ];

  useEffect(() => {
    // scroll top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <h3 className="text-center my-5 lg:my-10 uppercase">Compare</h3>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Product Details</TableCell>
              {products.map((product, index) => (
                <TableCell key={index} className="relative">
                  {product.name}
                  <IconButton
                    size="small"
                    className="absolute top-0 right-0"
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(products[0]).map(
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
                    {products.map((product, index) => (
                      <TableCell key={index}>
                        {key === 'images' ? (
                          <img
                            src={
                              'https://sailors3bucket1.s3.ap-southeast-1.amazonaws.com/uploads/all/gwhY2kEAR9YGhbUNdB6KSf9wkmh1UK4DArckLdUe.jpg'
                            }
                            alt={product?.name}
                            className="w-24 h-auto"
                          />
                        ) : (
                          product[key]
                        )}
                      </TableCell>
                    ))}
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

// name (String): Unique identifier for the bike.
// pricePerHour (Number): Cost factor for rentals, important for price comparison.
// cc (Number): Engine displacement, crucial for performance comparison.
// brand (String): Helps in comparing different manufacturers.
// model (String): Used to differentiate models within a brand.
// type (ObjectId - reference to 'type'): Type of bike (e.g., mountain, road, track).
// color (String): Aesthetic comparison.
// size (String): Important for user preferences based on height or body size.
// maximumSpeed (String): Useful for performance and speed comparisons.
// suspensionFrontType and suspensionRearType (String): Crucial for ride quality.
// brakeFrontType and brakeRearType (String): Important for safety and performance.
// weight (Number): Affects handling and portability.
// condition (String): Important for assessing bike quality.
// ageGroup (String): Defines the target audience (Child or Adult).
