import React from 'react';
import { twMerge } from 'tailwind-merge';

type CTAProps = {
  children: React.ReactNode;
  className?: string;
};

const CTA = ({ children, className }: CTAProps) => {
  return (
    <>
      <button
        className={twMerge(
          'mt-6 cursor-pointer rounded bg-spotter-teal px-2 py-1 text-sm font-light text-white transition-colors hover:bg-spotter-teal/90 hover:shadow',
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default CTA;
