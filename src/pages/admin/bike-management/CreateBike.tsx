import { zodResolver } from "@hookform/resolvers/zod";
import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const CreateBike: React.FC = () => {
  const schema = z.object({
    name: z.string({ required_error: "This is required field" }),
    description: z.string({ required_error: "This is required field" }),
    pricePerHour: z.number({ required_error: "This is required field" }),
    isAvailable: z.boolean().default(true),
    cc: z.number({ required_error: "This is required field" }),
    brand: z.string({ required_error: "This is required field" }),
    model: z.string({ required_error: "This is required field" }),
    type: z.enum(["mountain", "road", "hybrid", "electric"]),
    size: z.string({ required_error: "This is required field" }),
    engine: z.string({ required_error: "This is required field" }),
    carburetionType: z.string({ required_error: "This is required field" }),
    engineType: z.string({ required_error: "This is required field" }),
    emissionControl: z.string({ required_error: "This is required field" }),
    boreStroke: z.string({ required_error: "This is required field" }),
    compressionRatio: z.string({ required_error: "This is required field" }),
    identification: z.string({ required_error: "This is required field" }),
    warranty: z.string({ required_error: "This is required field" }),
    introductionYear: z.string({ required_error: "This is required field" }),
    registrationYear: z.string({ required_error: "This is required field" }),
    maximumSpeed: z.string({ required_error: "This is required field" }),
    suspensionFrontType: z.string({ required_error: "This is required field" }),
    suspensionFrontSize: z.string({ required_error: "This is required field" }),
    frontTravel: z.string({ required_error: "This is required field" }),
    suspensionRearType: z.string({ required_error: "This is required field" }),
    rearTravel: z.string({ required_error: "This is required field" }),
    brakeFrontType: z.string({ required_error: "This is required field" }),
    brakeFrontDiameter: z.string({ required_error: "This is required field" }),
    brakeRearType: z.string({ required_error: "This is required field" }),
    brakeRearDiameter: z.string({ required_error: "This is required field" }),
    transmissionType: z.string({ required_error: "This is required field" }),
    clutchType: z.string({ required_error: "This is required field" }),
    numberOfSpeeds: z.number({ required_error: "This is required field" }),
    primaryDrive: z.string({ required_error: "This is required field" }),
    tractionControl: z.string({ required_error: "This is required field" }),
    frame: z.string({ required_error: "This is required field" }),
    length: z.string({ required_error: "This is required field" }),
    width: z.string({ required_error: "This is required field" }),
    wheelbase: z.string({ required_error: "This is required field" }),
    dryWeight: z.string({ required_error: "This is required field" }),
    wetWeight: z.string({ required_error: "This is required field" }),
    packagingWeight: z.string({ required_error: "This is required field" }),
    packagingDimensions: z.string({ required_error: "This is required field" }),
    gearCount: z.number({ required_error: "This is required field" }),
    brakeType: z.string({ required_error: "This is required field" }),
    suspension: z.enum(["front", "rear", "full", "none"]),
    weight: z.number({ required_error: "This is required field" }),
    material: z.string({ required_error: "This is required field" }),
    accessoriesIncluded: z.array(z.string()),
    condition: z.string({ required_error: "This is required field" }),
    maintenanceHistory: z.string({ required_error: "This is required field" }),
    location: z.string({ required_error: "This is required field" }),
    ageGroup: z.string({ required_error: "This is required field" }).array(),
    color: z.string({ required_error: "This is required field" }),
    images: z.string({ required_error: "This is required field" }).array(),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // { resolver: zodResolver() }
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold text-center">Create Bike</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-2xl mx-auto my-5 lg:my-10 bg-secondary-50 p-5 rounded-md border shadow-lg"
      >
        {/* Name (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "Name is required" }}
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
            rules={{ required: "Description is required!" }}
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

        {/* Price Per Hour (Required) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "Price per hour is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "Brand is required" }}
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
            rules={{ required: "Model is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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

        {/* Warranty (Optional) */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="warranty"
            render={({ field }) => (
              <TextField
                {...field}
                label="Warranty"
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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

        {/* Dry Weight */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="dryWeight"
            render={({ field }) => (
              <TextField
                {...field}
                label="Dry Weight"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Wet Weight */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="wetWeight"
            render={({ field }) => (
              <TextField
                {...field}
                label="Wet Weight"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Packaging Weight */}
        <div className="my-2">
          <Controller
            control={control}
            name="packagingWeight"
            rules={{ required: "This is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Packaging Weight"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Packaging Dimensions */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="packagingDimensions"
            render={({ field }) => (
              <TextField
                {...field}
                label="Packaging Dimensions"
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="suspension"
            render={({ field }) => (
              <TextField
                {...field}
                label="Suspension"
                select
                variant="outlined"
                className="block w-full"
              >
                <MenuItem value="front">Front</MenuItem>
                <MenuItem value="rear">Rear</MenuItem>
                <MenuItem value="full">Full</MenuItem>
                <MenuItem value="none">None</MenuItem>
              </TextField>
            )}
          />
        </div>

        {/* Weight */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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
            rules={{ required: "This is required" }}
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

        {/* Maintenance History */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="maintenanceHistory"
            render={({ field }) => (
              <TextField
                {...field}
                label="Maintenance History"
                variant="outlined"
                className="block w-full"
              />
            )}
          />
        </div>

        {/* Age Group */}
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="ageGroup"
            render={({ field }) => (
              <TextField
                {...field}
                label="Age Group"
                select
                variant="outlined"
                className="block w-full"
                error={!!errors.ageGroup}
                helperText={errors.ageGroup ? "Age Group is required" : ""}
              >
                <MenuItem value="Child">Child</MenuItem>
                <MenuItem value="Adult">Adult</MenuItem>
              </TextField>
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
                className="block w-full"
                error={!!errors.images}
                helperText={errors.images ? "Images are required" : ""}
              />
            )}
            rules={{ required: "This is required" }}
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
