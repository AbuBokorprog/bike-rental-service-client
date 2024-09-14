import React, { useEffect } from 'react';
import Title from '../../component/helmet/Title';

const TermsCondition: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Title
        title="Terms & Condition - RentMyRide"
        description="This is terms & condition page."
      />
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to RentMyRide! By using our services, you agree to the following
        terms and conditions.
      </p>
      <h2 className="text-xl font-semibold mb-3">Rental Eligibility</h2>
      <p className="mb-4">
        To rent a bike, you must be at least 18 years old, possess a valid
        driver’s license, and agree to our terms.
      </p>
      <h2 className="text-xl font-semibold mb-3">Rental Period</h2>
      <p className="mb-4">
        The rental period begins when you pick up the bike and ends when you
        return it to our designated location. Late returns may incur additional
        fees.
      </p>
      <h2 className="text-xl font-semibold mb-3">Payment and Fees</h2>
      <p className="mb-4">
        All payments must be made before the rental period starts. We accept
        various payment methods, and any damages or violations during the rental
        period are your responsibility.
      </p>
      <h2 className="text-xl font-semibold mb-3">Liability</h2>
      <p className="mb-4">
        RentMyRide is not responsible for accidents, injuries, or damages
        occurring during the rental period. Please use our bikes responsibly.
      </p>
      <p>If you have any questions, feel free to contact us.</p>
    </div>
  );
};

export default TermsCondition;
