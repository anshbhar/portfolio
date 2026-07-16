import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import TiltCard from '../components/TiltCard';
import { skills } from '../data';

export default function Skills() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))];
  const filtered = filter === 'All' ? skills : skills.filter((s) => s.category === filter);

  return (
    <div className="px-4 pt-28 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
<<<<<<< HEAD
          <span className="text-sm font-mono text-coral-glow">/ skills</span>
=======
>>>>>>> 7e2d0c5 (Update portfolio website files)
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-white">Toolkit</h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Technologies I reach for. Hover an orb to see it tilt; the ring fills with proficiency.
          </p>
        </motion.div>

        {/* filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === c
                  ? 'text-ink-900'
                  : 'glass text-slate-300 hover:text-white'
              }`}
              style={filter === c ? { background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)' } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((s, i) => {
            const Icon = (Icons as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Box;
            const circumference = 2 * Math.PI * 42;
            const offset = circumference - (s.level / 100) * circumference;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.7, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: 'preserve-3d', perspective: 800 }}
              >
                <TiltCard maxTilt={20} className="glass rounded-2xl p-6 flex flex-col items-center text-center group" accent="#38bdf8">
                  {/* progress ring */}
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#skillGrad)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ delay: i * 0.06 + 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                      />
                      <defs>
                        <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#2dd4bf" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="grid place-items-center w-12 h-12 rounded-2xl bg-sky-glow/10 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-sky-glow" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-semibold text-white">{s.name}</h3>
                  <span className="mt-1 text-xs text-slate-400 font-mono">{s.category}</span>
                  <span className="mt-2 text-2xl font-display font-bold text-gradient">{s.level}%</span>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
