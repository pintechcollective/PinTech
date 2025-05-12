import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import Container from '../Container';
const AnnouncementBar = () => {
  return (
    <div className="text-center">
      <Container className="flex flex-col gap-1 justify-center items-center  bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Automate your workflow and boost productivity
        </p>
        <Link
          href={'/pages/services'}
          className=" flex items-center justify-center gap-2 text-accent hover:text-white"
        >
          <span>View Solutions</span>
          <FaArrowRightLong className="h-4 w-4 inline-flex justify-center items-center" />
        </Link>
      </Container>
    </div>
  );
};

export default AnnouncementBar;
