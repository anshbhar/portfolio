import { useState, type ReactNode } from 'react';
import { RotateCw } from 'lucide-react';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  accent?: string;
  className?: string;
}

/**
 * A 3D flip card. The front face shows media + title; clicking flips it
 * 180° on the Y axis to reveal the back face with info + links.
 */
export default function FlipCard({ front, back, accent = '#38bdf8', className = '' }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative preserve-3d cursor-pointer ${className}`}
      style={{ perspective: 1400 }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
          {/* flip hint */}
          <div
            className="absolute top-3 left-3 grid place-items-center w-8 h-8 rounded-full glass text-slate-200 pointer-events-none"
            title="Click to flip"
          >
            <RotateCw className="w-3.5 h-3.5" style={{ color: accent }} />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
