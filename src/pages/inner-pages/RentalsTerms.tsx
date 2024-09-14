import React, { useEffect } from 'react';
import Title from '../../component/helmet/Title';

const RentalTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Title
        title="Rental Terms - RentMyRide"
        description="This is rental terms page."
      />
      <h1 className="text-3xl font-bold mb-6">Rental Terms and Conditions</h1>
      <p className="mb-4">
        By renting a bike from RentMyRide, you agree to the following terms and
        conditions. Please read them carefully to ensure a smooth and enjoyable
        rental experience.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. Rental Eligibility</h2>
      <p className="mb-4">To rent a bike from RentMyRide, you must:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Be at least 18 years of age.</li>
        <li>Possess a valid driver's license.</li>
        <li>Provide a government-issued photo ID upon request.</li>
        <li>
          Agree to these rental terms and any other conditions set forth by
          RentMyRide.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">2. Rental Period</h2>
      <p className="mb-4">
        The rental period begins once you pick up the bike from our designated
        location and ends when the bike is returned in the same condition as it
        was rented.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Late returns will result in additional charges based on the hourly
          rate.
        </li>
        <li>
          Bikes must be returned on the agreed date and time to avoid late fees.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">3. Payment and Fees</h2>
      <p className="mb-4">
        All rental fees must be paid in full before the rental period begins.
        The rental price includes the hourly or daily rate, but additional fees
        may apply under the following conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Late return of the bike.</li>
        <li>Damage to the bike during the rental period.</li>
        <li>Loss or theft of the bike.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        4. Bike Condition and Usage
      </h2>
      <p className="mb-4">
        Bikes are rented in good condition and should be returned in the same
        condition. The renter agrees to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Inspect the bike for any damages before use.</li>
        <li>
          Notify RentMyRide immediately of any issues or malfunctions during the
          rental period.
        </li>
        <li>
          Use the bike responsibly and obey all traffic laws and regulations.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">5. Damage and Liability</h2>
      <p className="mb-4">
        The renter is responsible for any damage, loss, or theft of the bike
        during the rental period. In case of damage, the renter agrees to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Pay for repairs or replacement costs as determined by RentMyRide.
        </li>
        <li>Report any accidents or damages immediately.</li>
      </ul>
      <p className="mb-4">
        RentMyRide is not responsible for any injuries, accidents, or damage
        caused by the misuse of the bike during the rental period.
      </p>

      <h2 className="text-xl font-semibold mb-3">6. Cancellations</h2>
      <p className="mb-4">
        Cancellations made within 24 hours of the rental start time will receive
        a full refund. Cancellations made after this period may not be eligible
        for a refund.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Personal Data</h2>
      <p className="mb-4">
        Your personal information will be collected for the purpose of
        processing your rental and improving our services. Please refer to our{' '}
        <a href="/privacy-policy" className="text-blue-500">
          Privacy Policy
        </a>{' '}
        for more details.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        8. Termination of Agreement
      </h2>
      <p className="mb-4">
        RentMyRide reserves the right to terminate this rental agreement at any
        time if the renter violates any of the terms and conditions, or if the
        bike is used in a manner deemed dangerous or irresponsible.
      </p>

      <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding these terms or your rental, feel
        free to contact us at support@rentmyride.com.
      </p>
    </div>
  );
};

export default RentalTerms;
