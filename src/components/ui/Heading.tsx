import React from 'react';
import { twMerge } from 'tailwind-merge';

type CTAProps = {
  children: React.ReactNode;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  className?: string;
};

const Heading = ({ children, Tag = 'div', className }: CTAProps) => {
  return (
    <Tag
      className={twMerge(
        'text-3xl leading-snug font-medium text-balance text-spotter-dark md:text-4xl',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;

export const HeadingFocus = ({ children }: CTAProps) => {
  return <span className='font-[600] text-spotter-magenta'>{children}</span>;
};
