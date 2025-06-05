'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20; // 20×20 = 400 boxes

export default function GridRevealHighlight() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isIndexHighlighted = (i: number) => {
    // “Sin‐hash” pseudo‐random example—highlight ~30% of indices:
    const x = Math.sin(i * 12.9898) * 43758.5453;
    const fract = x - Math.floor(x);
    return fract > 0.7;
  };

  const radius = 40; // px

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative aspect-square h-48 w-full cursor-none overflow-hidden rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-background/0 after:from-80% after:to-background/100 after:content-['']"
    >
      {/*  Base grid – all gray */}
      <div
        className={`absolute inset-0 grid gap-2`}
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
          <div key={i} className='size-1.5 bg-spotter-gray' />
        ))}
      </div>

      {/* Highlight layer with circular mask */}
      <motion.div
        className={`pointer-events-none absolute inset-0 z-10 grid gap-2`}
        style={{
          maskImage: `radial-gradient(${radius}px at ${cursorPos.x}px ${cursorPos.y}px, white 99%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(${radius}px at ${cursorPos.x}px ${cursorPos.y}px, white 99%, transparent 100%)`,
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {isHovering && (
          <>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const highlight = isIndexHighlighted(i);
              return (
                <div
                  key={i}
                  className={`size-1.5 scale-150 ${
                    highlight ? 'bg-spotter-magenta' : 'bg-spotter-gray'
                  }`}
                />
              );
            })}
            <div
              className='pointer-events-none absolute z-10 rounded-full border-2 border-spotter-teal'
              style={{
                width: radius * 2,
                height: radius * 2,
                left: cursorPos.x - radius,
                top: cursorPos.y - radius,
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
