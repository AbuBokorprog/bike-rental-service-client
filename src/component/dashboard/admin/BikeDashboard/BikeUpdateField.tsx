import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { useGetAllTypesQuery } from '../../../../redux/features/types/Types.api';
import { toast } from 'sonner';
import { TBike } from '../../../../types/bikes/bike.type';
import { TType } from '../../../../types/types/types.type';
import { useUpdateBikeMutation } from '../../../../redux/features/bikes/bikes.api';

interface UpdateFieldModalProps {
  open: boolean;
  handleClose: () => void;
  Bike: TBike | undefined;
}

const BikeUpdateField: React.FC<UpdateFieldModalProps> = ({
  open,
  handleClose,
  Bike,
}) => {
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
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: Bike?.name || '',
      description: Bike?.description || '',
      type: Bike?.type || '',
      pricePerHour: Bike?.pricePerHour || '',
      cc: Bike?.cc || '',
      brand: Bike?.brand || '',
      model: Bike?.model || '',
      color: Bike?.color || '',
      size: Bike?.size || '',
      engine: Bike?.engine || '',
      carburetionType: Bike?.carburetionType || '',
      engineType: Bike?.engineType || '',
      emissionControl: Bike?.emissionControl || '',
      boreStroke: Bike?.boreStroke || '',
      compressionRatio: Bike?.compressionRatio || '',
      identification: Bike?.identification || '',
      introductionYear: Bike?.introductionYear || '',
      maximumSpeed: Bike?.maximumSpeed || '',
      suspensionFrontType: Bike?.suspensionFrontType || '',
      suspensionRearType: Bike?.suspensionRearType || '',
      suspensionFrontSize: Bike?.suspensionFrontSize || '',
      frontTravel: Bike?.frontTravel || '',
      rearTravel: Bike?.rearTravel || '',
      brakeFrontDiameter: Bike?.brakeFrontDiameter || '',
      brakeRearDiameter: Bike?.brakeRearDiameter || '',
      transmissionType: Bike?.transmissionType || '',
      clutchType: Bike?.clutchType || '',
      numberOfSpeeds: Bike?.numberOfSpeeds || '',
      gearCount: Bike?.gearCount || '',
      primaryDrive: Bike?.primaryDrive || '',
      tractionControl: Bike?.tractionControl || '',
      frame: Bike?.frame || '',
      length: Bike?.length || '',
      width: Bike?.width || '',
      wheelbase: Bike?.wheelbase || '',
      brakeType: Bike?.brakeType || '',
      suspension: Bike?.suspension || '',
      weight: Bike?.weight || '',
      material: Bike?.material || '',
      condition: Bike?.condition || '',
      images: Bike?.images.toString() || '',
      accessoriesIncluded: Bike?.accessoriesIncluded || '',
      ageGroup: Bike?.ageGroup,
    },
  });
  const [updateBike] = useUpdateBikeMutation();
  useEffect(() => {
    if (Bike && open) {
      reset({
        name: Bike?.name || '',
        description: Bike?.description || '',
        type: Bike?.type,
        pricePerHour: Bike?.pricePerHour || '',
        cc: Bike?.cc || '',
        brand: Bike?.brand || '',
        model: Bike?.model || '',
        color: Bike?.color || '',
        size: Bike?.size || '',
        engine: Bike?.engine || '',
        carburetionType: Bike?.carburetionType || '',
        engineType: Bike?.engineType || '',
        emissionControl: Bike?.emissionControl || '',
        boreStroke: Bike?.boreStroke || '',
        compressionRatio: Bike?.compressionRatio || '',
        identification: Bike?.identification || '',
        introductionYear: Bike?.introductionYear || '',
        maximumSpeed: Bike?.maximumSpeed || '',
        gearCount: Bike?.gearCount || '',
        suspensionFrontType: Bike?.suspensionFrontType || '',
        suspensionRearType: Bike?.suspensionRearType || '',
        suspensionFrontSize: Bike?.suspensionFrontSize || '',
        frontTravel: Bike?.frontTravel || '',
        rearTravel: Bike?.rearTravel || '',
        brakeFrontDiameter: Bike?.brakeFrontDiameter || '',
        brakeRearDiameter: Bike?.brakeRearDiameter || '',
        transmissionType: Bike?.transmissionType || '',
        clutchType: Bike?.clutchType || '',
        numberOfSpeeds: Bike?.numberOfSpeeds || '',
        primaryDrive: Bike?.primaryDrive || '',
        tractionControl: Bike?.tractionControl || '',
        frame: Bike?.frame || '',
        length: Bike?.length || '',
        width: Bike?.width || '',
        wheelbase: Bike?.wheelbase || '',
        condition: Bike?.condition || '',
        images: Bike?.images.toString() || '',
        accessoriesIncluded: Bike?.accessoriesIncluded || '',
        ageGroup: Bike?.ageGroup,
      });
    }
  }, [Bike, open, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.images = data.images.split(',');
    data.ageGroup = age || Bike?.ageGroup;
    data.suspension = suspension || Bike?.suspension;
    Number(data.cc);
    data.type = type || Bike?.type;
    const toastId = toast.loading('Loading...');
    try {
      const res = await updateBike({ id: Bike?._id, data: data }).unwrap();
      if (res?.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Update Bike.</DialogTitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
          //   className="max-w-screen-2xl mx-auto my-5 lg:my-16 bg-secondary-50 p-5 rounded-md border shadow-lg"
        >
          <DialogContent>
            {/* Name (Required) */}
            <div className="my-2">
              <Controller
                control={control}
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
            </div>

            {/* Description (Optional) */}
            <div className="my-2">
              <Controller
                control={control}
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
            </div>

            {/* types required */}
            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <Select
                  {...field}
                  label="Type"
                  value={field.value} // Set value to an empty string if null or undefined
                  onChange={handleAgeChange}
                  // Convert empty value to null
                  variant="outlined"
                  className="block w-full"
                >
                  <MenuItem value={Bike?.type}>Select Type</MenuItem>
                  {data?.data?.map((t: TType) => (
                    <MenuItem key={t._id} value={t._id}>
                      {t.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            {/* Price Per Hour (Required) */}
            <div className="my-2">
              <Controller
                control={control}
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
            </div>

            {/* Model (Required) */}
            <div className="my-2">
              <Controller
                control={control}
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
                defaultValue={Bike?.brakeType}
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
                defaultValue={Bike?.suspension}
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
                    <MenuItem defaultValue={field.value}>
                      {field.value}
                    </MenuItem>
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
                defaultValue={Bike?.weight}
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
                defaultValue={Bike?.material}
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
                defaultValue={Bike?.ageGroup}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Age Group"
                    labelId="ageGroup"
                    value={age}
                    onChange={handleAgeChange}
                    variant="outlined"
                    className="block w-full"

                    // helperText={errors.ageGroup ? "Age Group is required" : ""}
                  >
                    <MenuItem defaultValue={field.value}>
                      {field.value}
                    </MenuItem>
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
                  />
                )}
              />
            </div>
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
    </div>
  );
};

export default BikeUpdateField;
