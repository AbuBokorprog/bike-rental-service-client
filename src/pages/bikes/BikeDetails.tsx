import React, { useEffect } from 'react';
import BikeComponent from '../../component/bikes/BikeComponent';
import ImageGallery from 'react-image-gallery';
import { MdCompare } from 'react-icons/md';
import 'react-image-gallery/styles/css/image-gallery.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BikeProcessModal from '../../component/bikes/BikeProcessModal';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleBikeQuery } from '../../redux/features/bikes/bikes.api';
import { useAppSelector } from '../../redux/hooks/hooks';
import { currentToken } from '../../redux/store';
import { useCreateComparisonMutation } from '../../redux/features/comparison/comparison.api';
import { useGetProfileInfoQuery } from '../../redux/features/user/User';
import { toast } from 'sonner';

const BikeDetails = () => {
  const token = useAppSelector(currentToken);
  const { data: user } = useGetProfileInfoQuery({ undefined });
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useGetSingleBikeQuery(slug);

  const images =
    data?.data?.images?.map((image: string) => ({
      original: image,
      thumbnail: image,
    })) || [];

  const [createComparison, { isLoading }] = useCreateComparisonMutation();
  // console.log(user?.data[0]._id);
  const createCompareHandler = async (id: string) => {
    const toastId = toast.loading('Loading...');
    try {
      const res = await createComparison({
        userId: user?.data[0]._id,
        bikeId: id,
      }).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <div className="my-5 lg:my-16"></div>
      <div className="lg:flex items-start justify-between lg:gap-10 mx-auto">
        {/* slider and description */}
        <div className="md:w-2/3 w-full">
          <ImageGallery items={images} />

          <div className="my-5 lg:my-16">
            <p>{data?.data?.description}</p>
          </div>
        </div>
        {/* price and information. */}
        <div className="md:w-1/3">
          <div className="bg-black text-white p-6">
            <div className="flex items-center justify-between mx-auto">
              <p className="text-xl font-semibold">Price</p>
              <p>
                <span className="text-2xl font-bold">
                  {data?.data?.pricePerHour} TK
                </span>{' '}
                <span>/Hour</span>
              </p>
            </div>
            <div className="mt-4">
              {token ? (
                <div className="flex items-center justify-between gap-4 mx-auto">
                  <Button
                    variant="outlined"
                    onClick={() => createCompareHandler(data?.data?._id)}
                  >
                    <MdCompare className="w-6 h-6" />
                  </Button>
                  <div className="w-full">
                    <BikeProcessModal id={data?.data?._id} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4 mx-auto">
                  <Link to={'/login'}>
                    <Button variant="outlined">
                      <MdCompare className="w-6 h-6" />
                    </Button>
                  </Link>
                  <Link to={'/login'}>
                    <Button variant="contained" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="my-3 lg:my-6">
            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase font-semibold"
                >
                  Engine and Performance
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">CC</p>
                    <p className="font-semibold">{data?.data?.cc}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Engine</p>
                    <p className="font-semibold">{data?.data?.engine}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Carburetion Type</p>
                    <p className="font-semibold">
                      {data?.data?.carburetionType}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Engine Type</p>
                    <p className="font-semibold">{data?.data?.engineType}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Emission Control</p>
                    <p className="font-semibold">
                      {data?.data?.emissionControl}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Bore Stroke</p>
                    <p className="font-semibold">{data?.data?.boreStroke}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Compression Ratio</p>
                    <p className="font-semibold">
                      {data?.data?.compressionRatio}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Maximum Speed</p>
                    <p className="font-semibold">{data?.data?.maximumSpeed}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Traction Control</p>
                    <p className="font-semibold">
                      {data?.data?.tractionControl}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Transmission Type</p>
                    <p className="font-semibold">
                      {data?.data?.transmissionType}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Clutch Type</p>
                    <p className="font-semibold">{data?.data?.clutchType}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Number Of Speeds</p>
                    <p className="font-semibold">
                      {data?.data?.numberOfSpeeds}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Primary Drive</p>
                    <p className="font-semibold">{data?.data?.primaryDrive}</p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase font-semibold"
                >
                  Chassis and Suspension
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Frame</p>
                    <p className="font-semibold">{data?.data?.frame}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Suspension Front Type</p>
                    <p className="font-semibold">
                      {data?.data?.suspensionFrontType}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Suspension Rear Type</p>
                    <p className="font-semibold">
                      {data?.data?.suspensionRearType}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Suspension Front Size</p>
                    <p className="font-semibold">
                      {data?.data?.suspensionFrontSize}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">frontTravel</p>
                    <p className="font-semibold">{data?.data?.frontTravel}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Rear Travel</p>
                    <p className="font-semibold">{data?.data?.rearTravel}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Brake Type</p>
                    <p className="font-semibold">{data?.data?.brakeType}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Brake Front Diameter</p>
                    <p className="font-semibold">
                      {data?.data?.brakeFrontDiameter}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500"> Brake Rear Diameter</p>
                    <p className="font-semibold">
                      {data?.data?.brakeRearDiameter}
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase font-semibold"
                >
                  Dimensions and Weight
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Length</p>
                    <p className="font-semibold">{data?.data?.length}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Width</p>
                    <p className="font-semibold">{data?.data?.width}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Wheelbase</p>
                    <p className="font-semibold">{data?.data?.wheelbase}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Weight</p>
                    <p className="font-semibold">{data?.data?.weight}</p>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase font-semibold"
                >
                  Other Details
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Identification</p>
                    <p className="font-semibold">
                      {data?.data?.identification}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">IntroductionYear</p>
                    <p className="font-semibold">
                      {data?.data?.introductionYear}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mx-auto my-1">
                    <p className=" text-secondary-500">Accessories Included</p>
                    <p className="font-semibold">
                      {data?.data?.accessoriesIncluded}
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* Related bikes */}
      {/* <div>
        <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 uppercase">
          Related Bikes.
        </h3>
        <BikeComponent bikes={undefined} />
      </div> */}
    </div>
  );
};

export default BikeDetails;
