import React from 'react';
import CTA from './ui/CTA';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='shadow'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex flex-shrink-0 items-center gap-1'>
            <Image
              src='/imgs/logo/logo.png'
              alt='Spotter Logo'
              width={70}
              height={35}
            />
            <span className='text-2xl font-medium text-spotter-dark'>
              Spotter
            </span>
          </div>

          <div className='grid h-full place-items-center'>
            <CTA className='mt-0 text-lg font-medium'>Get Started</CTA>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
