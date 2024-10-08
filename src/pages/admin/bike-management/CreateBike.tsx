import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useCreateBikeMutation } from '../../../redux/features/bikes/bikes.api';
import { useGetAllTypesQuery } from '../../../redux/features/types/Types.api';
import { toast } from 'sonner';
import { TType } from '../../../types/types/types.type';
import Title from '../../../component/helmet/Title';

const CreateBike: React.FC = () => {
  const [suspension, setSuspension] = React.useState('');

  const handleSuspensionChange = (event: SelectChangeEvent) => {
    setSuspension(event.target.value as string);
  };

  const [age, setAge] = React.useState('');

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [type, setType] = React.useState('');

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  //get all bike types
  const { data } = useGetAllTypesQuery(undefined);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [createBike] = useCreateBikeMutation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Loading...');
    data.images = data.images.split(',');
    data.type = type;
    data.ageGroup = age;
    data.suspension = suspension;
    Number(data.cc);

    try {
      const res = await createBike(data).unwrap();
      if (res?.success) {
        toast?.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }

    reset();
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <Title
        title="Create bike - Admin Dashboard"
        description="This is create bike admin dashboard panel."
      />
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        Create Bike
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-2xl mx-auto my-5 lg:my-16 bg-secondary-50 p-5 rounded-md border shadow-lg"
      >
        {/* Name (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: 'Name is required' }}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
          <p className="text-red-500">{errors.name?.message as string}</p>
        </div>

        {/* Description (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: 'Description is required!' }}
            name="description"
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                className="block w-full"
              />
            )}
          />
          <p className="text-red-500">
            {errors.description?.message as string}
          </p>
        </div>

        {/* types required */}
        <div className="my-2">
          <InputLabel id="type">Types</InputLabel>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select
                {...field}
                label="Type"
                labelId="typ"
                value={type}
                onChange={handleTypeChange}
                variant="outlined"
                className="block w-full"
                error={!!errors.type}
                // helperText={errors.ageGroup ? "Age Group is required" : ""}
              >
                <MenuItem defaultValue={''}>Select Age</MenuItem>
                {data?.data?.map((t: TType) => (
                  <MenuItem key={t?._id} value={t?._id}>
                    {t?.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </div>

        {/* Price Per Hour (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: 'Price per hour is required' }}
            name="pricePerHour"
            render={({ field }) => (
              <TextField
                {...field}
                label="Price Per Hour"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
          <p className="text-red-500">
            {errors.pricePerHour?.message as string}
          </p>
        </div>

        {/* CC (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="cc"
            render={({ field }) => (
              <TextField
                {...field}
                label="CC"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brand (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: 'Brand is required' }}
            name="brand"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brand"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
          <p className="text-red-500">{errors.brand?.message as string}</p>
        </div>

        {/* Model (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: 'Model is required' }}
            name="model"
            render={({ field }) => (
              <TextField
                {...field}
                label="Model"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
          <p className="text-red-500">{errors.model?.message as string}</p>
        </div>

        {/* Color (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="color"
            render={({ field }) => (
              <TextField
                {...field}
                label="Color"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Size (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="size"
            render={({ field }) => (
              <TextField
                {...field}
                label="Size"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Engine (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="engine"
            render={({ field }) => (
              <TextField
                {...field}
                label="Engine"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Carburetion Type (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="carburetionType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Carburetion Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Engine Type (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="engineType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Engine Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Emission Control (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="emissionControl"
            render={({ field }) => (
              <TextField
                {...field}
                label="Emission Control"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Bore Stroke (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="boreStroke"
            render={({ field }) => (
              <TextField
                {...field}
                label="Bore Stroke"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Compression Ratio (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="compressionRatio"
            render={({ field }) => (
              <TextField
                {...field}
                label="Compression Ratio"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Identification (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="identification"
            render={({ field }) => (
              <TextField
                {...field}
                label="Identification"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Introduction Year (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="introductionYear"
            render={({ field }) => (
              <TextField
                {...field}
                label="Introduction Year"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Maximum Speed (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="maximumSpeed"
            render={({ field }) => (
              <TextField
                {...field}
                label="Maximum Speed"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Suspension Front Type (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="suspensionFrontType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Suspension Front Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Suspension Rear Type (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="suspensionRearType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Suspension Rear Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brakes Front (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="brakesFront"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brakes Front"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brakes Rear (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            name="brakesRear"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brakes Rear"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Suspension Front Size */}
        <div className="my-2">
          <Controller
            control={control}
            name="suspensionFrontSize"
            render={({ field }) => (
              <TextField
                {...field}
                label="Suspension Front Size"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Front Travel */}
        <div className="my-2">
          <Controller
            control={control}
            name="frontTravel"
            render={({ field }) => (
              <TextField
                {...field}
                label="Front Travel"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Rear Travel */}
        <div className="my-2">
          <Controller
            control={control}
            name="rearTravel"
            render={({ field }) => (
              <TextField
                {...field}
                label="Rear Travel"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brake Front Diameter */}
        <div className="my-2">
          <Controller
            control={control}
            name="brakeFrontDiameter"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brake Front Diameter"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brake Rear Diameter */}
        <div className="my-2">
          <Controller
            control={control}
            name="brakeRearDiameter"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brake Rear Diameter"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Transmission Type */}
        <div className="my-2">
          <Controller
            control={control}
            name="transmissionType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Transmission Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Clutch Type */}
        <div className="my-2">
          <Controller
            control={control}
            name="clutchType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Clutch Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Number of Speeds */}
        <div className="my-2">
          <Controller
            control={control}
            name="numberOfSpeeds"
            render={({ field }) => (
              <TextField
                {...field}
                label="Number of Speeds"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Primary Drive */}
        <div className="my-2">
          <Controller
            control={control}
            name="primaryDrive"
            render={({ field }) => (
              <TextField
                {...field}
                label="Primary Drive"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Traction Control */}
        <div className="my-2">
          <Controller
            control={control}
            name="tractionControl"
            render={({ field }) => (
              <TextField
                {...field}
                label="Traction Control"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Frame */}
        <div className="my-2">
          <Controller
            control={control}
            name="frame"
            render={({ field }) => (
              <TextField
                {...field}
                label="Frame"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Length */}
        <div className="my-2">
          <Controller
            control={control}
            name="length"
            render={({ field }) => (
              <TextField
                {...field}
                label="Length"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Width */}
        <div className="my-2">
          <Controller
            control={control}
            name="width"
            render={({ field }) => (
              <TextField
                {...field}
                label="Width"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Wheelbase */}
        <div className="my-2">
          <Controller
            control={control}
            name="wheelbase"
            render={({ field }) => (
              <TextField
                {...field}
                label="Wheelbase"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Gear Count */}
        <div className="my-2">
          <Controller
            control={control}
            name="gearCount"
            render={({ field }) => (
              <TextField
                {...field}
                label="Gear Count"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Brake Type */}
        <div className="my-2">
          <Controller
            control={control}
            name="brakeType"
            render={({ field }) => (
              <TextField
                {...field}
                label="Brake Type"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Suspension */}
        <div className="my-2">
          <InputLabel id="suspension">Suspension</InputLabel>

          <Controller
            control={control}
            name="suspension"
            render={({ field }) => (
              <Select
                {...field}
                labelId="suspension"
                label="Suspension"
                variant="outlined"
                value={suspension}
                className="block w-full"
                onChange={handleSuspensionChange}
              >
                <MenuItem value="front">Front</MenuItem>
                <MenuItem value="rear">Rear</MenuItem>
                <MenuItem value="full">Full</MenuItem>
                <MenuItem value="none">None</MenuItem>
              </Select>
            )}
          />
        </div>

        {/* Weight */}
        <div className="my-2">
          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <TextField
                {...field}
                label="Weight"
                type="number"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Material */}
        <div className="my-2">
          <Controller
            control={control}
            name="material"
            render={({ field }) => (
              <TextField
                {...field}
                label="Material"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Accessories Included */}
        <div className="my-2">
          <Controller
            control={control}
            name="accessoriesIncluded"
            render={({ field }) => (
              <TextField
                {...field}
                label="Accessories Included"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Condition */}
        <div className="my-2">
          <Controller
            control={control}
            name="condition"
            render={({ field }) => (
              <TextField
                {...field}
                label="Condition"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Age Group */}
        <div className="my-2">
          <InputLabel id="ageGroup">Age</InputLabel>
          <Controller
            control={control}
            name="ageGroup"
            render={({ field }) => (
              <Select
                {...field}
                label="Age Group"
                labelId="ageGroup"
                value={age}
                onChange={handleAgeChange}
                variant="outlined"
                className="block w-full"
                error={!!errors.ageGroup}
                // helperText={errors.ageGroup ? "Age Group is required" : ""}
              >
                <MenuItem defaultValue={''}>Select Age</MenuItem>
                <MenuItem value="Child">Child</MenuItem>
                <MenuItem value="Adult">Adult</MenuItem>
              </Select>
            )}
          />
        </div>

        {/* Images */}
        <div className="my-2">
          <Controller
            control={control}
            name="images"
            render={({ field }) => (
              <TextField
                {...field}
                label="Images (Comma-separated URLs)"
                variant="outlined"
                type="text"
                className="block w-full"
                // error={!!errors.images}
                // helperText={errors.images ? "Images are required" : ""}
              />
            )}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="contained" className="mt-6 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateBike;
