import React from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-7xl rounded-xl border border-spotter-gray bg-background p-8 md:p-12',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
