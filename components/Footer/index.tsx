import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/icons/PT - LogoLock - White Color.svg';
import Container from '../Container';
const Footer = () => {
  return (
    <footer className="bg-black">
      <Container className=" py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href={'/'}>
              <Image
                src={Logo}
                alt="sas logo"
                height={200}
                width={200}
                className="sm:text-center text-start object-cover"
              />
            </Link>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href={'/'}>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Home
                </p>
              </Link>
              {/* <Link href={'/pages/about'}>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Who We Are
                </p>
              </Link> */}
              <Link href={'/pages/services'}>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Services
                </p>
              </Link>
              <Link href={'/pages/terms'}>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Our Terms of Service
                </p>
              </Link>
              <Link href={'/pages/privacy'}>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Our Privacy Policy Statement
                </p>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300  hover:underline hover:cursor-pointer hover:text-accent">
                Robotics and Automation
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:cursor-pointer hover:text-accent">
                Autonomous mobile robotics
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300  hover:underline hover:cursor-pointer hover:text-accent">
                Technology consulting and operations & maintenance services
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-secondary md:my-8  h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div> */}

          <div className="flex gap-4 hover:cursor-pointer">
            {/* <Image
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width={30}
              height={30}
              alt="fb"
            />
            <Image
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width={30}
              height={30}
              alt="tw"
            />
            <Image
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width={30}
              height={30}
              alt="inst"
            />
            <Image
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width={30}
              height={30}
              alt="gt"
            />
            <Image
              src="https://www.svgrepo.com/show/22037/path.svg"
              width={30}
              height={30}
              alt="pn"
            /> */}
            <a href='https://www.linkedin.com/company/pintechcollective/about/'target='_blank'>

            <Image
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width={30}
              height={30}
              alt="in"
              />
              </a>
          </div>
        </div>
        <p className="font-sans text-white mt-4 text-start text-sm md:text-center md:text-lg md:p-4">
          © 2025 Pintech Collective Inc. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
