import { motion } from 'framer-motion';
import { Briefcase, MapPin, Play, Image as ImageIcon, CheckCircle2, FileBadge } from 'lucide-react';
import { useState } from 'react';
import TiltCard from '../components/TiltCard';
import MediaModal from '../components/MediaModal';
import { experience, type MediaReveal } from '../data';

export default function Experience() {
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
          className="mb-14"
        >
          <span className="text-sm font-mono text-gold-glow font-semibold">/ experience</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-ink-900">Career Path</h1>
          <p className="mt-3 text-ink-500 max-w-xl">
            A timeline of roles. Click any milestone to reveal the media behind it.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/60 via-teal-glow/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className={`relative flex items-center ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* node */}
                  <div
                    className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10 grid place-items-center w-10 h-10 rounded-full glass-strong"
                    style={{ border: `2px solid ${e.accent}`, boxShadow: `0 0 20px ${e.accent}44` }}
                  >
                    <Briefcase className="w-4 h-4" style={{ color: e.accent }} />
                  </div>

                  <div className={`pl-16 sm:pl-0 w-full sm:w-[calc(50%-2.5rem)] ${isLeft ? '' : 'sm:order-2'}`}>
                    <TiltCard
                      maxTilt={8}
                      className="glass rounded-2xl p-6 cursor-pointer group card-lift"
                      accent={e.accent}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => open(e.media, `${e.role} — ${e.company}`)}
                        onKeyDown={(ev) => {
                          if (ev.key === 'Enter' || ev.key === ' ') open(e.media, `${e.role} — ${e.company}`);
                        }}
                        className="block text-left w-full"
                      >
                        <span className="text-xs font-mono font-semibold" style={{ color: e.accent }}>{e.period}</span>
                        <h3 className="mt-1 font-display text-xl font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                          {e.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-ink-600">
                          <span className="font-medium">{e.company}</span>
                          <span className="text-ink-300">·</span>
                          <span className="flex items-center gap-1 text-ink-500">
                            <MapPin className="w-3 h-3" />{e.location}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-ink-500 leading-relaxed">{e.description}</p>

                        <ul className="mt-4 space-y-1.5">
                          {e.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-ink-600">
                              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: e.accent }} />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* media hint */}
                        <div className="mt-5 relative h-20 rounded-xl overflow-hidden border border-ink-200">
                          {e.media.type === 'image' ? (
                            <img src={e.media.src} alt={e.company} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                          ) : (
                            <img src={e.media.poster} alt={e.company} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-ink-50/60 to-transparent" />
                          <div className="absolute bottom-2 left-3 flex items-center gap-2 text-xs text-ink-700">
                            {e.media.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                            <span className="font-mono">View {e.media.type}</span>
                          </div>
                        </div>
                      </div>

                      {e.certificate && (
                        <button
                          onClick={(ev) => {
                            ev.stopPropagation();
                            open(e.certificate as MediaReveal, `Certificate — ${e.role}`);
                          }}
                          className="mt-4 flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg glass hover:scale-[1.03] transition-transform"
                          style={{ color: e.accent, border: `1px solid ${e.accent}55` }}
                        >
                          <FileBadge className="w-3.5 h-3.5" />
                          View Certificate
                        </button>
                      )}
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <MediaModal media={active} title={activeTitle} onClose={() => setActive(null)} />
    </div>
  );
}
