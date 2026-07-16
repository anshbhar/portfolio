import { useRef, useState, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  accent?: string;
}

/**
 * A card that tilts in 3D toward the pointer, with an optional moving glare.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  accent = '#38bdf8',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * maxTilt;
    const ry = (px - 0.5) * 2 * maxTilt;
    setTransform(
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
    );
    setGlarePos({ x: px * 100, y: py * 100, o: 0.25 });
  };

  const reset = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)');
    setGlarePos((g) => ({ ...g, o: 0 }));
  };

  return (
    <div
      ref={ref}
      className={`tilt-card relative preserve-3d ${className}`}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.o,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${accent}40, transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
