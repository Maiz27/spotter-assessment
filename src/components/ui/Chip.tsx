import React from 'react';
import { twMerge } from 'tailwind-merge';

type CTAProps = {
  children: React.ReactNode;
  className?: string;
};

const Chip = ({ children, className }: CTAProps) => {
  return (
    <span
      className={twMerge(
        'mb-4 rounded border border-gray-200 px-2 py-1 text-sm text-gray-500',
        className
      )}
    >
      {children}_
    </span>
  );
};

export default Chip;
