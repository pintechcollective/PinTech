'use client';
import React from 'react';
import { useState } from 'react';
import Logo from '@/public/icons/PT - LogoLock - Dark  BG.svg';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileLogo from '@/public/icons/PT - LogoMark - BLGR.svg';
import { usePathname } from 'next/navigation';
import Container from '../Container';
import AnnouncementBar from '../AnnouncementBar';
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  // const [isLegalOpen, setLegalOpen] = useState(false);

  //use params to determine what page
  //use state to determine weather or not user is on the page or not`

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? 'border-b-2 border-[#9cd633]  lg:text-xl text-secondary'
      : '';
  };

  return (
    <header className="flex sticky top-0 z-10 flex-col bg-black py-3">
      <AnnouncementBar />
      {/* Container */}

      <Container>
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image
              src={Logo}
              alt="sas logo"
              height={150}
              width={150}
              className=" text-center object-cover"
            />
          </Link>
          <div className="relative">
            <IoMenu
              className={!isOpen ? 'size-10 md:hidden text-white' : 'hidden'}
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
                    href={'/'}
                    className={`text-foreground ${isActive('/pages/privacy')}`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    Home
                  </Link>
                  {/* <Link
                    href={'/pages/about'}
                    className={`text-foreground ${isActive(
                      '/pages/about'
                    )} m-2`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    About
                  </Link> */}
                  <Link
                    href={'/pages/services'}
                    className={`text-foreground ${isActive('/pages/services')}`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    Services
                  </Link>
                  {/* <Link
                      href={'/pages/privacy'}
                      className={`text-foreground ${isActive(
                        '/pages/privacy'
                      )}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      Privacy
                    </Link> */}
                  <Link
                    href={'/pages/contact'}
                    className={`text-foreground ${isActive('/pages/contact')}`}
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
            {/* <Link
              href={'/pages/about'}
              className={`text-foreground ${isActive('/pages/about')}`}
            >
              About
            </Link> */}
            {/* <div> */}
            {/* <div
                className="cursor-pointer text-foreground"
                onClick={() => setLegalOpen(!isLegalOpen)}
              >
                Legal
              </div>
              {isLegalOpen && (
                <div className="flex flex-col">
                  <Link
                    href={'/pages/terms'}
                    className={`text-foreground ${isActive('/pages/terms')}`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href={'/pages/privacy'}
                    className={`text-foreground ${isActive('/pages/privacy')}`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div> */}

            <Link
              href={'/pages/services'}
              className={`border-2 border-accent text-white px-4 py-2 font-medium inline-flex align-items justify-center tracking-right clip-diagonal ${isActive(
                '/pages/services'
              )}`}
            >
              Services
            </Link>
            <Link
              href={'/pages/contact'}
              className={`text-foreground ${isActive('/pages/contact')}`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
