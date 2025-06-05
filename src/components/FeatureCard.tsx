import { ReactNode } from 'react';
import Card from './ui/Card';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  topSection?: ReactNode;
};

export default function FeatureCard({
  icon,
  title,
  description,
  topSection,
}: FeatureCardProps) {
  return (
    <Card
      className={`flex ${topSection ? 'flex-col overflow-hidden py-8 md:p-0 md:py-0' : 'gap-4 md:p-8'}`}
    >
      {topSection ? (
        <>
          <div className='h-max grow'>{topSection}</div>

          <div className='flex flex-none gap-4 px-8 md:py-4 md:pb-8'>
            <span className='h-fit rounded p-1 text-lg shadow'>{icon}</span>
            <div className='space-y-2'>
              <h3 className='font-medium text-spotter-dark'>{title}</h3>
              <p className='text-justify text-sm text-gray-700'>
                {description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className='h-fit rounded p-1 text-lg shadow'>{icon}</span>
          <div className='space-y-2'>
            <h3 className='font-medium text-spotter-dark'>{title}</h3>
            <p className='text-justify text-sm text-gray-700'>{description}</p>
          </div>
        </>
      )}
    </Card>
  );
}
