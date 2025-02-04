import React from 'react';

const ServicesGrid = () => {
  return (
    <div className=" bg-black text-white py-[72px] sm:py-24 relative overflow-clip ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-[600px] md:grid-cols-2">
        <div className="flex justify-center items-center">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Train
          </h3>
        </div>
        <div className="flex justify-start items-start flex-col">
          <h3 className="text-center mt-8  p-4 text-secondary font-bold text-4xl sm:text-5xl tracking-tighter">
            Empowering Your Team and Ours
          </h3>

          <p className=" text-start text-xl mt-8  p-4">
            Effective training is crucial for maximizing the benefits of AMR
            technology. We offer comprehensive training programs tailored to
            meet the needs of your team and ours. Our training services cover:
          </p>
          <ul className="text-start  text-lg list-disc p-4 sm:p-2 sm:m-6 m-6">
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              <a className="text-accent">Operational Training:</a> Educating
              your staff on the best practices for using and managing AMRs
              within your workflow, ensuring smooth and efficient operations.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              <a className="text-accent">In-Depth Training</a> Providing
              In-depth training for our technicians on the inner workings of
              servicing AMRs, keeping them updated with the latest advancements
              and repair techniques.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              <a className="text-accent"> Consulting Services:</a> Offering
              expert advice and guidance on optimizing your robot operations,
              enhancing productivity, and reducing costs.
            </li>
          </ul>
          <p className=" text-start text-xl mt-8  p-4 text-white/85">
            Our commitment to training ensures that both your team and ours are
            equipped with the knowledge and skills needed to excel in the
            ever-evolving field of robot operations.
          </p>
        </div>
        {/* <div className="flex justify-center items-center">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Service Name
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Service Name
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Service Name
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p>Image</p>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesGrid;
