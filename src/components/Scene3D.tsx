import { useEffect, useRef } from 'react';

/**
 * A lightweight 3D-ish animated background using pure CSS 3D transforms
 * and parallax — no heavy WebGL dependency. Floating geometric shapes
 * orbit in perspective space and react subtly to pointer movement.
 */
export default function Scene3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      pointer.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      if (sceneRef.current) {
        const rx = pointer.current.y * -8;
        const ry = pointer.current.x * 12;
        sceneRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const shapes = [
    { cls: 'w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-[18%] top-[28%]', shape: 'cube', color: '#38bdf8', delay: '0s' },
    { cls: 'w-28 h-28 left-[78%] top-[22%]', shape: 'sphere', color: '#2dd4bf', delay: '-2s' },
    { cls: 'w-24 h-24 left-[68%] top-[70%]', shape: 'pyramid', color: '#f59e0b', delay: '-4s' },
    { cls: 'w-32 h-32 left-[30%] top-[75%]', shape: 'torus', color: '#fb7185', delay: '-1s' },
    { cls: 'w-20 h-20 left-[50%] top-[15%]', shape: 'cube', color: '#38bdf8', delay: '-3s' },
    { cls: 'w-16 h-16 left-[88%] top-[55%]', shape: 'sphere', color: '#2dd4bf', delay: '-5s' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden grid-bg noise">
      {/* radial glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #2dd4bf, transparent 70%)' }} />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }} />

      {/* 3D scene */}
      <div className="absolute inset-0 perspective-2000 flex items-center justify-center">
        <div
          ref={sceneRef}
          className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {shapes.map((s, i) => (
            <div
              key={i}
              className={`absolute preserve-3d animate-float-slow ${s.cls}`}
              style={{ animationDelay: s.delay, transformStyle: 'preserve-3d' }}
            >
              <Shape shape={s.shape} color={s.color} />
            </div>
          ))}
        </div>
      </div>

      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,9,18,0.7) 100%)' }} />
    </div>
  );
}

function Shape({ shape, color }: { shape: string; color: string }) {
  if (shape === 'cube') {
    const faces = [
      { transform: 'translateZ(40px)' },
      { transform: 'rotateY(180deg) translateZ(40px)' },
      { transform: 'rotateY(90deg) translateZ(40px)' },
      { transform: 'rotateY(-90deg) translateZ(40px)' },
      { transform: 'rotateX(90deg) translateZ(40px)' },
      { transform: 'rotateX(-90deg) translateZ(40px)' },
    ];
    return (
      <div className="relative w-full h-full preserve-3d animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
        {faces.map((f, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2"
            style={{
              ...f,
              background: `${color}10`,
              borderColor: `${color}66`,
              boxShadow: `inset 0 0 30px ${color}22, 0 0 20px ${color}33`,
            }}
          />
        ))}
      </div>
    );
  }

  if (shape === 'sphere') {
    return (
      <div
        className="w-full h-full rounded-full animate-pulse-glow"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${color}, ${color}33 60%, transparent 75%)`,
          boxShadow: `0 0 50px ${color}55, inset 0 0 30px ${color}44`,
        }}
      />
    );
  }

  if (shape === 'pyramid') {
    return (
      <div className="relative w-full h-full preserve-3d animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
        {[0, 120, 240].map((deg) => (
          <div
            key={deg}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${deg}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: '40px solid transparent',
                borderRight: '40px solid transparent',
                borderBottom: `70px solid ${color}22`,
                filter: `drop-shadow(0 0 10px ${color}66)`,
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  // torus — represented as a glowing ring
  return (
    <div
      className="w-full h-full rounded-full border-4 animate-spin-slow"
      style={{
        borderColor: `${color}55`,
        boxShadow: `0 0 40px ${color}44, inset 0 0 20px ${color}33`,
      }}
    />
  );
}
