'use client';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '@/public/icons/PT - LogoLock - Dark  BG.svg';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileLogo from '@/public/icons/PT - LogoMark - BLGR.svg';
import { usePathname } from 'next/navigation';
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  //use params to determine what page
  //use state to determine weather or not user is on the page or not

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? 'border-b-2 border-[#9cd633]  lg:text-xl text-secondary'
      : '';
  };

  return (
    <header className="sticky top-0 z-10">
      <div className="flex gap-3 justify-center items-center py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Automate your workflow and boost productivity
        </p>
        <Link href={'/pages/about'} className="text-accent hover:text-white">
          <div className="inline-flex gap-1 items-center">
            <p>Learn More Now</p>
            <FaArrowRightLong className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </Link>
      </div>
      <div className="py-5 bg-black">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={'/'}>
              <Image
                src={Logo}
                alt="sas logo"
                height={150}
                width={150}
                className="text-center m-4 object-cover"
              />
            </Link>
            <div className="relative">
              <IoMenu
                className={
                  !isOpen
                    ? 'absolute top-[-30px] right-4 h-10 w-10 md:hidden text-white m-2'
                    : 'hidden'
                }
                onClick={() => setOpen(!isOpen)}
              />

              <div
                className={
                  isOpen
                    ? 'fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-black/90 md:hidden lg:hidden m-0 p-0'
                    : 'hidden'
                }
              >
                {/* <IoIosClose
                  className="absolute top-[50px] right-4 left-4 h-14 w-14 md:hidden text-white "
                  onClick={() => setOpen(!isOpen)}
                /> */}
                <nav className="flex justify-center flex-col items-center text-white/90 gap-16 text-4xl">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: -5, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.75,
                      delay: 0.25,
                    }}
                    className="flex justify-center items-center flex-col gap-8 w-full"
                  >
                    <Link
                      href={'/pages/about'}
                      className={`text-foreground ${isActive(
                        '/pages/about'
                      )} m-2`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      About
                    </Link>
                    <Link
                      href={'/pages/pricing'}
                      className={`text-foreground ${isActive(
                        '/pages/pricing'
                      )}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href={'/pages/contact'}
                      className={`text-foreground ${isActive(
                        '/pages/contact'
                      )}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                  <Link href={'/'}>
                    <Image
                      src={MobileLogo}
                      alt="sas logo"
                      height={100}
                      width={100}
                      onClick={() => setOpen(!isOpen)}
                      className="mx-auto object-cover"
                    />
                  </Link>
                </nav>
              </div>
            </div>
            <nav className="hidden md:flex gap-6  text-white/90 items-center">
              <Link
                href={'/pages/about'}
                className={`text-foreground ${isActive('/pages/about')}`}
              >
                About
              </Link>
              <Link
                href={'/pages/pricing'}
                className={`text-foreground ${isActive('/pages/pricing')}`}
              >
                Pricing
              </Link>
              <Link
                href={'/pages/contact'}
                className={`text-foreground ${isActive('/pages/contact')}`}
              >
                Contact Us
              </Link>
              <Link
                href={'/pages/solutions'}
                className={`border-2 border-accent text-white px-4 py-2 font-medium inline-flex align-items justify-center tracking-right clip-diagonal ${isActive(
                  '/pages/solutions'
                )}`}
              >
                Solutions
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
