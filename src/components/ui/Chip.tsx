'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

type CTAProps = {
  children: React.ReactNode;
  className?: string;
};

const Chip = ({ children, className }: CTAProps) => {
  return (
    <span
      className={twMerge(
        'mb-4 inline-flex items-center rounded border border-gray-200 px-2 py-1 text-sm text-gray-500',
        className
      )}
    >
      {children}

      <motion.span
        className='ml-0.5'
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.2, // one full blink cycle in 1.2s
          repeat: Infinity, // loop forever
          ease: 'easeInOut', // smooth fade in/out
        }}
      >
        _
      </motion.span>
    </span>
  );
};

export default Chip;
