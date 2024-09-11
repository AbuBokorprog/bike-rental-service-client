import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center uppercase">
        Why to rent our bike.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto items-center justify-between">
        <div>
          <div className="flex items-center justify-between mx-auto gap-5 lg:flex-row-reverse my-1 bg-white p-3 rounded-md shadow">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16303/16303627.png"
                alt=""
                className="w-24 lg:w-28"
              />
            </div>
            <div>
              <h3 className="font-semibold">Many Types of Bikes</h3>
              <p>
                We can fit you with the perfect bike because we carry all sizes
                and of bikes.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mx-auto gap-5 lg:flex-row-reverse my-3 bg-white p-3 rounded-md shadow">
            <div>
              <img src="./images/star.png" alt="" className="w-28 lg:w-36" />
            </div>
            <div>
              <h3 className="font-semibold">Best Bikes in Town</h3>
              <p>
                Comfort. Safety. Our equipment is guaranteed to make your biking
                experience 100% stree-free.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary-300 rounded-md p-2 w-60 mx-auto">
          <img
            src="https://komo.vamtam.com/wp-content/uploads/2018/08/illustration-bike-woman.svg"
            alt=""
            className="mx-auto my-2 "
          />
        </div>
        <div>
          <div className="flex items-center justify-between mx-auto gap-5 lg:flex-row-reverse my-1 bg-white p-3 rounded-md shadow">
            <div>
              <img src="./images/clock.png" alt="" className="w-24 lg:w-32" />
            </div>
            <div>
              <h3 className="font-semibold">Longest Opening Hours</h3>
              <p>
                Have all the time in the world? Rent for an entire day and
                explore New York City at your leisure.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mx-auto gap-5 lg:flex-row-reverse my-3 bg-white p-3 rounded-md shadow">
            <div>
              <img
                src="./images/protection.png"
                alt=""
                className="w-24 lg:w-32"
              />
            </div>
            <div>
              <h3 className="font-semibold">Rent Fully Insured</h3>
              <p>
                A simple bodily injury claim from a customer riding your bike
                can derail your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
