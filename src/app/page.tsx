import Card from '@/components/ui/Card';
import Chip from '@/components/ui/Chip';
import CTA from '@/components/ui/CTA';
import FeatureCard from '@/components/FeatureCard';
import Heading, { HeadingFocus } from '@/components/ui/Heading';
import SpotterComparisonChart from '@/components/SpotterComparisonChart';

import { FEATURES } from '@/lib/Constants';

export default function Home() {
  return (
    <>
      <div className='relative z-10 grid min-h-[92.5dvh] place-items-center'>
        <section className='box-border grid max-w-7xl grid-cols-1 gap-2 border-gray-200 p-2 md:border-x lg:grid-cols-14'>
          {/* LEFT COLUMN */}
          <Left />

          {/* RIGHT COLUMN */}
          <Right />
        </section>
      </div>
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

      <SpotterComparisonChart />
    </Card>
  );
};

const Right = () => {
  return (
    <div className='flex flex-col gap-2 lg:col-span-6'>
      {FEATURES.map((feature, index) => (
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
