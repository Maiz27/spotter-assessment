'use client';
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { COMPARISON_CHART_NIVO_DATA, NIVO_THEME } from '@/lib/Constants';

const SpotterComparisonChart = () => {
  return (
    <div className='h-72 w-full bg-white p-4'>
      <h3 className='text-center'>Match Success Rate Over Time</h3>
      <div style={{ height: '90%' }}>
        <ResponsiveLine
          data={COMPARISON_CHART_NIVO_DATA}
          theme={NIVO_THEME}
          margin={{ top: 20, right: 120, bottom: 50, left: 60 }}
          // ───────────────────────────────────────────────────────
          // 1) Keep your x / y scales and axes exactly as before
          // ───────────────────────────────────────────────────────
          xScale={{ type: 'linear', min: 0, max: 120 }}
          xFormat='>-.0f'
          yScale={{
            type: 'linear',
            min: 0,
            max: 100,
            stacked: false,
            reverse: false,
          }}
          axisBottom={{
            tickValues: [0, 30, 60, 90, 120],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Days Since First Use',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          axisLeft={{
            tickValues: [0, 25, 50, 75, 100],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Success Rate (%)',
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          // ───────────────────────────────────────────────────────
          // 2) Draw only horizontal grid lines
          // ───────────────────────────────────────────────────────
          enableGridY={true}
          enableGridX={false}
          // ───────────────────────────────────────────────────────
          // 3) Style each series’ line / point exactly as before
          // ───────────────────────────────────────────────────────
          colors={(serie) => serie.color}
          lineWidth={3}
          pointSize={6}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor='#ffffff'
          useMesh={true}
          enableSlices='x'
          // ───────────────────────────────────────────────────────
          // 4) Custom sliceTooltip: force “Spotter” to render first
          // ───────────────────────────────────────────────────────
          sliceTooltip={({ slice }) => {
            // Build a lookup array of series IDs in the original data order:
            const ordering = COMPARISON_CHART_NIVO_DATA.map(
              (series) => series.id
            );

            // Copy the slice.points array so we don't mutate the original
            const sortedPoints = [...slice.points].sort((a, b) => {
              return (
                ordering.indexOf(a.seriesId) - ordering.indexOf(b.seriesId)
              );
            });

            return (
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                  width: 150,
                }}
              >
                {/* Show the shared “Day: X” label at the top */}
                <div
                  style={{
                    color: '#6B7280',
                    fontSize: 12,
                    marginBottom: 6,
                  }}
                >
                  Day: {sortedPoints[0].data.xFormatted}
                </div>

                {/* Render each series in the new, sorted order */}
                {sortedPoints.map((point) => (
                  <div
                    key={point.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 4,
                    }}
                  >
                    {/* Colored circle */}
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        background: point.seriesColor,
                        borderRadius: '50%',
                        marginRight: 6,
                      }}
                    />
                    {/* Series name + value */}
                    <div
                      style={{
                        color: '#374151',
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {point.seriesId}: {point.data.yFormatted}%
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
          // ───────────────────────────────────────────────────────
          // 5) Legend configuration (unchanged)
          // ───────────────────────────────────────────────────────
          legends={[
            {
              anchor: 'top-right',
              direction: 'column',
              translateX: 100,
              itemsSpacing: 8,
              itemWidth: 90,
              itemHeight: 14,
              symbolSize: 10,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .3)',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SpotterComparisonChart;
