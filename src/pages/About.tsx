import React from "react";
import { Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="mx-auto">
      <img src="/src/assets/images/banner-6.png" alt="" />
      <div className="p-8 bg-gray-50">
        {/* Mission Statement Section */}
        <div className="mb-16 text-center">
          <h4 className="text-2xl lg:text-3xl font-bold mb-10 text-center uppercase tracking-wider">
            Our Mission
          </h4>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our mission is to provide the best bike rental experience by
            offering a wide variety of bikes, excellent customer service, and a
            seamless rental process. We aim to inspire everyone to explore and
            enjoy biking!
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h4 className="text-2xl lg:text-3xl font-bold mb-10 text-center uppercase tracking-wider">
            Meet Our Team
          </h4>
          <Grid container spacing={4} justifyContent="center">
            {/* Team Member 1 */}
            <Grid item xs={12} md={4}>
              <Card className="bg-white shadow-md h-52">
                <CardContent className="flex flex-col items-center">
                  <Avatar
                    alt="John Doe"
                    src="/images/john-doe.jpg"
                    className="w-32 h-32 mb-4"
                  />
                  <Typography variant="h6" className="font-bold">
                    John Doe
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    CEO & Founder
                  </Typography>
                  <Typography variant="body1" className="mt-4 text-center">
                    John has 15 years of experience in the cycling industry and
                    is passionate about promoting eco-friendly transportation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Member 2 */}
            <Grid item xs={12} md={4}>
              <Card className="bg-white shadow-md h-52">
                <CardContent className="flex flex-col items-center">
                  <Avatar
                    alt="Jane Smith"
                    src="/images/jane-smith.jpg"
                    className="w-32 h-32 mb-4"
                  />
                  <Typography variant="h6" className="font-bold">
                    Jane Smith
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Head of Operations
                  </Typography>
                  <Typography variant="body1" className="mt-4 text-center">
                    Jane oversees our daily operations to ensure every customer
                    has a smooth rental experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Member 3 */}
            <Grid item xs={12} md={4}>
              <Card className="bg-white shadow-md h-52">
                <CardContent className="flex flex-col items-center">
                  <Avatar
                    alt="Mike Johnson"
                    src="/images/mike-johnson.jpg"
                    className="w-32 h-32 mb-4"
                  />
                  <Typography variant="h6" className="font-bold">
                    Mike Johnson
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Customer Support Lead
                  </Typography>
                  <Typography variant="body1" className="mt-4 text-center">
                    Mike leads our customer support team and ensures every
                    client has a great experience with us.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        {/* History & Milestones Section */}
        <div className="mb-16 text-center">
          <h4 className="text-2xl lg:text-3xl font-bold mb-10 text-center uppercase tracking-wider">
            Our Journey
          </h4>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Established in 2015, our platform has grown from a small local bike
            shop to a full-service bike rental platform. From launching our
            mobile app in 2018 to expanding internationally in 2020, we have
            continuously innovated to provide our customers with the best
            experience.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-purple-600 p-10 text-white rounded-lg shadow-lg">
          <h4 className="text-2xl lg:text-3xl font-bold mb-10 text-center uppercase tracking-wider">
            Get In Touch
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Office Address */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-full text-primary-500 shadow-lg">
                <FaMapMarkerAlt className="text-4xl" />
              </div>
              <h5 className="text-lg font-semibold">Office Address</h5>
              <p className="text-center">
                1234 Cycling Avenue, Ride City, RC 12345
              </p>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-full text-primary-500 shadow-lg">
                <FaPhoneAlt className="text-4xl" />
              </div>
              <h5 className="text-lg font-semibold">Phone</h5>
              <p className="text-center">+1 (123) 456-7890</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-full text-primary-500 shadow-lg">
                <FaEnvelope className="text-4xl" />
              </div>
              <h5 className="text-lg font-semibold">Email</h5>
              <p className="text-center">contact@bikerentals.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
