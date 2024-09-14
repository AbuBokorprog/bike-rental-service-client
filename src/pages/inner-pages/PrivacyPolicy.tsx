import React, { useEffect } from 'react';
import Title from '../../component/helmet/Title';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Title
        title="Privacy policy - RentMyRide"
        description="This is privacy policy page."
      />
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At RentMyRide, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your data.
      </p>
      <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
      <p className="mb-4">
        We collect personal information such as your name, email, address,
        payment details, and rental preferences when you register, rent bikes,
        or contact us.
      </p>
      <h2 className="text-xl font-semibold mb-3">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        Your information is used to process bike rentals, provide customer
        support, and improve our services. We do not sell or share your data
        with third parties.
      </p>
      <h2 className="text-xl font-semibold mb-3">Security</h2>
      <p className="mb-4">
        We implement security measures to protect your data, but no method of
        transmission over the Internet is 100% secure.
      </p>
      <p>
        If you have any concerns regarding your privacy, feel free to contact us
        at support@rentmyride.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
