import {
  //   Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  availability: string;
  brand: string;
  model: string;
  age: string;
}

const BikesFilter = () => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      //   MyCheckbox: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <div className="bg-secondary-50 shadow-md p-8 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex items-center gap-10 mx-auto space-y-4 lg:space-y-0 my-2">
          <Controller
            name="brand"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="brand">Brand</InputLabel>
                <Select {...field} labelId="brand" id="brand" label="brand">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                <Select {...field} labelId="model" id="model" label="model">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                <Select {...field} labelId="age" id="age" label="age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"adult"}>Adult</MenuItem>
                  <MenuItem value={"children"}>Children</MenuItem>
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
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </div>
        {/* <div>
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </div> */}
      </form>
    </div>
  );
};

export default BikesFilter;
