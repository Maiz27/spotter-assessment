// ─────────────────────────────────────────────────────────────
// /src/lib/Constants.js
// ─────────────────────────────────────────────────────────────

import GridReveal from '@/components/GridReveal';
import {
  HiOutlineDeviceMobile,
  HiOutlineMap,
  HiOutlineSparkles,
} from 'react-icons/hi';

export const FEATURES = [
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
    topSection: <GridReveal />,
  },
  {
    icon: <HiOutlineSparkles className='text-spotter-magenta' />,
    title: 'Empower your operations team.',
    description:
      'Simplify workflows and improve engagement with intelligent tools that help your team work smarter and faster.',
  },
];

/**
 * ┌───────────────────────────────────────────────────────────────┐
 * │ 1) Expand the mock data to include more “day” checkpoints   │
 * └───────────────────────────────────────────────────────────────┘
 */
export const COMPARISON_CHART_MOCK_DATA = [
  { day: 0, spotter: 100, competitorA: 100, competitorB: 100 },
  { day: 15, spotter: 98, competitorA: 90, competitorB: 95 },
  { day: 30, spotter: 95, competitorA: 85, competitorB: 90 },
  { day: 45, spotter: 94, competitorA: 80, competitorB: 85 },
  { day: 60, spotter: 92, competitorA: 75, competitorB: 80 },
  { day: 75, spotter: 91, competitorA: 72, competitorB: 78 },
  { day: 90, spotter: 90, competitorA: 68, competitorB: 72 },
  { day: 105, spotter: 89, competitorA: 64, competitorB: 69 },
  { day: 120, spotter: 88, competitorA: 60, competitorB: 65 },
];

/**
 * ┌───────────────────────────────────────────────────────────────┐
 * │ 2) Map that mock data into Nivo’s “series” format           │
 * └───────────────────────────────────────────────────────────────┘
 */
export const COMPARISON_CHART_NIVO_DATA = [
  {
    id: 'Spotter',
    color: '#2CC1C4',
    data: COMPARISON_CHART_MOCK_DATA.map((d) => ({
      x: d.day,
      y: d.spotter,
    })),
  },
  {
    id: 'Comp A',
    color: '#F2545B',
    data: COMPARISON_CHART_MOCK_DATA.map((d) => ({
      x: d.day,
      y: d.competitorA,
    })),
  },
  {
    id: 'Comp B',
    color: '#00384B',
    data: COMPARISON_CHART_MOCK_DATA.map((d) => ({
      x: d.day,
      y: d.competitorB,
    })),
  },
];

/**
 * ┌───────────────────────────────────────────────────────────────┐
 * │ 3) Keep the same Nivo theme you were already using          │
 * └───────────────────────────────────────────────────────────────┘
 */
export const NIVO_THEME = {
  background: '#ffffff',
  textColor: '#374151',
  fontSize: 12,
  axis: {
    domain: {
      line: {
        stroke: '#E5E7EB',
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: '#E5E7EB',
        strokeWidth: 1,
      },
      text: {
        fill: '#6B7280',
        fontSize: 12,
      },
    },
    legend: {
      text: {
        fill: '#6B7280',
        fontSize: 12,
      },
    },
  },
  grid: {
    line: {
      stroke: '#E5E7EB',
      strokeDasharray: '3 3',
    },
  },
  tooltip: {
    container: {
      background: '#ffffff',
      color: '#374151',
      fontSize: '12px',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '8px 12px',
    },
  },
  legends: {
    text: {
      fill: '#374151',
      fontSize: 12,
    },
  },
};
