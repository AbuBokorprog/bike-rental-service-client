import React from 'react';
import { Helmet } from 'react-helmet-async';

// React helmet async
const Title: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="bike rental, mountain bikes, city bikes, rent bikes, bike rental service"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Discover affordable bike rentals with RentMyRide. Choose from mountain bikes, city bikes, and more with easy rental options."
      />
      <meta property="og:url" content="https://rentmyride-theta.vercel.app/" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Title;
