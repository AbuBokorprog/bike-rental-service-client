import {
  //   Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

type TBrands = {
  brand: string;
  id: number;
};

type TModels = {
  model: string;
  id: string;
};

type TProps = {
  brands: TBrands[];
  models: TModels[] | [];
  brand: string | undefined;
  model: string | undefined;
  age: string | undefined;
  available: string | undefined;
  setBrand: React.Dispatch<React.SetStateAction<string | undefined>>;
  setAge: React.Dispatch<React.SetStateAction<string | undefined>>;
  setModel: React.Dispatch<React.SetStateAction<string | undefined>>;
  setAvailable: React.Dispatch<React.SetStateAction<string | undefined>>;
};
// Bike filters
const BikesFilter: React.FC<TProps> = ({
  brands,
  models,
  brand,
  model,
  age,
  available,
  setBrand,
  setAge,
  setModel,
  setAvailable,
}) => {
  const { control } = useForm();

  // set brand
  const brandHandleChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };
  // set age
  const ageHandleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  // set model
  const modelHandleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value as string);
  };
  // set availability
  const availableHandleChange = (event: SelectChangeEvent) => {
    setAvailable(event.target.value as string);
  };

  return (
    <div className="bg-secondary-50 shadow-md p-8 rounded-md">
      <form>
        <div className="lg:flex items-center gap-10 mx-auto space-y-4 lg:space-y-0 my-2">
          <Controller
            name="brand"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="brand">Brand</InputLabel>
                <Select
                  {...field}
                  labelId="brand"
                  id="brand"
                  label="brand"
                  value={brand}
                  onChange={brandHandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {brands?.map((b) => (
                    <MenuItem key={b?.id} value={b?.brand}>
                      {b?.brand}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="model"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="model">Model</InputLabel>
                <Select
                  {...field}
                  labelId="model"
                  id="model"
                  label="model"
                  value={model}
                  onChange={modelHandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {models?.map((b) => (
                    <MenuItem key={b?.id} value={b?.model}>
                      {b?.model}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </div>
        <div className="lg:flex items-center gap-10 mx-auto space-y-4 lg:space-y-0 my-2">
          <Controller
            name="age"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="age">Age</InputLabel>
                <Select
                  {...field}
                  labelId="age"
                  id="age"
                  label="age"
                  value={age}
                  onChange={ageHandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Adult'}>Adult</MenuItem>
                  <MenuItem value={'Child'}>Child</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="availability"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="availability">Availability</InputLabel>
                <Select
                  {...field}
                  labelId="availability"
                  id="availability"
                  label="availability"
                  value={available}
                  onChange={availableHandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'true'}>Available</MenuItem>
                  <MenuItem value={'false'}>Not Available</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default BikesFilter;
