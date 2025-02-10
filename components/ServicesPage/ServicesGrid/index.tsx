import React from 'react';
const ServicesGrid = () => {
  return (
    <div className=" bg-gradient-to-t from-[#0e83fe]/25 via-black to-[#0e83fe]/25 text-white py-[72px] sm:py-24 relative overflow-clip ">
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
              <a className="text-accent">In-Depth Training:</a> Providing
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
          <p className=" lg:text-start  text-center text-xl mt-8  p-4 text-accent/85">
            Our commitment to training ensures that both your team and ours are
            equipped with the knowledge and skills needed to excel in the
            ever-evolving field of robot operations.
          </p>
        </div>

        <div className="flex justify-center items-center py-24">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Deploy
          </h3>
        </div>
        <div className="flex justify-start items-start flex-col">
          <h3 className=" text-center  text-secondary lg:mt-24 font-bold text-4xl sm:text-5xl tracking-normal">
            Seamless Integration for Optimal Performance
          </h3>

          <p className=" text-start text-xl mt-8  p-4">
            Our deployment services are designed to ensure a smooth integration
            of AMRs into your existing operations. From initial site assessments
            to final installation, we handle every aspect of the deployment
            process. Our team of experts will:
          </p>
          <ul className="text-start  text-lg list-disc p-4 sm:p-2 sm:m-6 m-6">
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Conduct thorough site evaluations to determine the best
              configuration for your AMRs.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Install robots and hardware infrastructure with precision and
              efficiency.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Customize and configure the system to meet your specific
              operational needs.
            </li>
          </ul>
          <p className=" lg:text-start  text-center text-xl mt-8  p-4 text-accent/85">
            By leveraging our extensive experience and technical know-how, we
            guarantee a hassle-free deployment that sets the foundation for your
            AMRs’ success.
          </p>
        </div>
        <div className="flex justify-center items-center py-24">
          <h3 className="text-center text-white font-bold text-6xl sm:text-6xl tracking-tighter">
            Maintain
          </h3>
        </div>
        <div className="flex justify-start items-start flex-col">
          <h3 className=" text-center  text-secondary lg:mt-24 font-bold text-4xl sm:text-5xl tracking-tighter">
            Ensuring Maximum Uptime and Reliability
          </h3>

          <p className=" text-start text-xl mt-8  p-4">
            Keeping your robots operational with minimal downtime is our top
            priority. Our maintenance services are designed to provide proactive
            and reactive support, ensuring that your AMRs are always in peak
            condition. Our maintenance solutions include:
          </p>
          <ul className="text-start  text-lg list-disc p-4 sm:p-2 sm:m-6 m-6">
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Regularly scheduled inspections and preventative maintenance to
              identify and address potential issues before they escalate.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Rapid response repair services to minimize downtime in case of
              malfunctions or damage.
            </li>
            <li className="mt-4 sm:mt-2 p-2 sm:p-1">
              Access to a dedicated support team for troubleshooting and
              technical assistance.
            </li>
          </ul>
          <p className=" lg:text-start  text-center text-xl mt-8  p-4 text-accent/85">
            With our maintenance services, you can rely on your robots to
            perform consistently, allowing you to focus on your core business
            activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
