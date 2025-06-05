import Card from '@/components/ui/Card';
import Chip from '@/components/ui/Chip';
import CTA from '@/components/ui/CTA';
import FeatureCard from '@/components/FeatureCard';
import Heading, { HeadingFocus } from '@/components/ui/Heading';

import {
  HiOutlineDeviceMobile,
  HiOutlineMap,
  HiOutlineSparkles,
} from 'react-icons/hi';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen items-center justify-center'>
        <section className='box-border grid max-w-7xl grid-cols-1 gap-2 border-gray-200 p-2 md:border-x lg:grid-cols-14'>
          {/* LEFT COLUMN */}
          <Left />

          {/* RIGHT COLUMN */}
          <Right />
        </section>
      </main>
    </>
  );
}

const Left = () => {
  return (
    <Card className='flex flex-col justify-between p-0 md:p-0 lg:col-span-8'>
      <div className='flex flex-col items-start p-8 md:p-12'>
        <Chip>Why Spotter</Chip>
        <Heading Tag='h2'>
          The smartest way to <br />
          <HeadingFocus>match loads </HeadingFocus>
          with drivers
        </Heading>
        <p className='mt-4 max-w-md text-base text-gray-700 md:text-lg'>
          AI-powered accuracy that lasts across trips, preferences, and markets
          — even with route changes.
        </p>
        <CTA>Explore More</CTA>
      </div>

      {/* Placeholder for graph */}
      <div className='flex h-40 items-center justify-center rounded-lg bg-gray-100 text-gray-400'>
        Graph goes here
      </div>
    </Card>
  );
};

const Right = () => {
  const features = [
    {
      icon: <HiOutlineDeviceMobile className='text-spotter-magenta' />,
      title: 'Seamless across devices.',
      description:
        'Connect and synchronize fleet data effortlessly — whether on web, mobile, or onboard systems.',
    },
    {
      icon: <HiOutlineMap className='text-spotter-magenta' />,
      title: 'Optimize fleet performance.',
      description:
        'Use AI to match loads, reduce idle time, and ensure efficient routing across your entire network.',
      topSection: (
        <div className='flex flex-1 items-center justify-center rounded-lg bg-gray-100 text-gray-400'>
          <span className='text-2xl'>Graph Placeholder</span>
        </div>
      ),
    },
    {
      icon: <HiOutlineSparkles className='text-spotter-magenta' />,
      title: 'Empower your operations team.',
      description:
        'Simplify workflows and improve engagement with intelligent tools that help your team work smarter and faster.',
    },
  ];
  return (
    <div className='flex flex-col gap-2 lg:col-span-6'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          topSection={feature.topSection}
        />
      ))}
    </div>
  );
};
