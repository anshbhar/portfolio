import { motion } from 'framer-motion';
<<<<<<< HEAD
import { GraduationCap, Play, Image as ImageIcon, MapPin } from 'lucide-react';
=======
import { GraduationCap, Play, Image as ImageIcon, MapPin, FileBadge } from 'lucide-react';
>>>>>>> 7e2d0c5 (Update portfolio website files)
import { useState } from 'react';
import TiltCard from '../components/TiltCard';
import MediaModal from '../components/MediaModal';
import { education, type MediaReveal } from '../data';

export default function Education() {
  const [active, setActive] = useState<MediaReveal | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const open = (media: MediaReveal, title: string) => {
    setActive(media);
    setActiveTitle(title);
  };

  return (
    <div className="px-4 pt-28 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
<<<<<<< HEAD
          <span className="text-sm font-mono text-sky-glow">/ education</span>
=======
>>>>>>> 7e2d0c5 (Update portfolio website files)
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-white">Academic Foundation</h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Where the craft was learned. Click a card to reveal campus imagery.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, x: -40, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <TiltCard
                maxTilt={8}
                className="glass rounded-2xl overflow-hidden cursor-pointer group"
                accent={ed.accent}
              >
<<<<<<< HEAD
                <button
                  onClick={() => open(ed.media, ed.degree)}
=======
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => open(ed.media, ed.degree)}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') open(ed.media, ed.degree);
                  }}
>>>>>>> 7e2d0c5 (Update portfolio website files)
                  className="block text-left w-full grid sm:grid-cols-[200px_1fr] gap-0"
                >
                  {/* media thumbnail */}
                  <div className="relative h-40 sm:h-full overflow-hidden">
                    {ed.media.type === 'image' ? (
                      <img src={ed.media.src} alt={ed.institution} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <img src={ed.media.poster} alt={ed.institution} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-900/60 sm:to-ink-900/80" />
                    <span className="absolute top-3 left-3 glass rounded-full px-3 py-1.5 text-xs font-mono text-slate-200 flex items-center gap-1.5">
                      {ed.media.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                      {ed.media.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="grid place-items-center w-12 h-12 rounded-2xl shrink-0"
                        style={{ background: `${ed.accent}1a`, border: `1px solid ${ed.accent}55` }}
                      >
                        <GraduationCap className="w-6 h-6" style={{ color: ed.accent }} />
                      </div>
                      <div>
                        <span className="text-xs font-mono" style={{ color: ed.accent }}>{ed.period}</span>
                        <h3 className="font-display text-lg font-semibold text-white group-hover:text-sky-glow transition-colors">
                          {ed.degree}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {ed.institution}
                    </div>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{ed.description}</p>
<<<<<<< HEAD
                  </div>
                </button>
=======

                    {ed.result && (
                      <button
                        onClick={(ev) => {
                          ev.stopPropagation();
                          open(ed.result as MediaReveal, `Result — ${ed.degree}`);
                        }}
                        className="mt-4 flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg glass hover:scale-[1.03] transition-transform"
                        style={{ color: ed.accent, border: `1px solid ${ed.accent}55` }}
                      >
                        <FileBadge className="w-3.5 h-3.5" />
                        View Marksheet
                      </button>
                    )}
                  </div>
                </div>
>>>>>>> 7e2d0c5 (Update portfolio website files)
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <MediaModal media={active} title={activeTitle} onClose={() => setActive(null)} />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7e2d0c5 (Update portfolio website files)
