import React, { useEffect } from 'react';

const FAQ: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">How do I rent a bike?</h2>
        <p className="mb-4">
          To rent a bike, simply register on our website, browse the available
          bikes, and select the one you want to rent. Follow the steps to
          complete the booking.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          What documents are required?
        </h2>
        <p className="mb-4">
          You will need to provide a valid driver’s license, and in some cases,
          additional ID proof may be required.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Can I cancel my booking?</h2>
        <p className="mb-4">
          Yes, you can cancel your booking. Please refer to our Refund Policy
          for more information on cancellation timelines and refunds.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          What happens if I return the bike late?
        </h2>
        <p className="mb-4">
          Late returns will incur additional fees. Please make sure to return
          the bike on time to avoid extra charges.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
