import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Award, Play, Image as ImageIcon, ShieldCheck } from 'lucide-react';
=======
import { Award, Play, Image as ImageIcon, ShieldCheck, FileText } from 'lucide-react';
>>>>>>> 7e2d0c5 (Update portfolio website files)
import { useState } from 'react';
import TiltCard from '../components/TiltCard';
import MediaModal from '../components/MediaModal';
import { certificates, type MediaReveal } from '../data';

export default function Certificates() {
  const [active, setActive] = useState<MediaReveal | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const open = (media: MediaReveal, title: string) => {
    setActive(media);
    setActiveTitle(title);
  };

  return (
    <div className="px-4 pt-28 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
<<<<<<< HEAD
          <span className="text-sm font-mono text-teal-glow">/ certificates</span>
=======
>>>>>>> 7e2d0c5 (Update portfolio website files)
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-white">Credentials</h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Continuous learning, verified. Click a credential to view its proof — image or video.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certificates.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotateY: 8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <TiltCard
                maxTilt={10}
                className="glass rounded-2xl p-6 h-full cursor-pointer group"
                accent={c.accent}
              >
                <button
                  onClick={() => open(c.media, c.title)}
                  className="block text-left w-full"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="grid place-items-center w-14 h-14 rounded-2xl shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: `${c.accent}1a`, border: `1px solid ${c.accent}55` }}
                    >
                      <Award className="w-7 h-7" style={{ color: c.accent }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold text-white group-hover:text-sky-glow transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">{c.issuer}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <span>{c.date}</span>
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          {c.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* media preview strip */}
                  <div className="mt-5 relative h-28 rounded-xl overflow-hidden border border-white/5">
                    {c.media.type === 'image' ? (
                      <img src={c.media.src} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <img src={c.media.poster} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 to-transparent" />
                    <div className="absolute bottom-2 left-3 flex items-center gap-2 text-xs text-slate-200">
                      {c.media.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                      <span className="font-mono">View {c.media.type}</span>
                    </div>
                  </div>
                </button>
<<<<<<< HEAD
=======

                {c.pdfUrl && (
                  <a
                    href={c.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white glass transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Certificate PDF
                  </a>
                )}
>>>>>>> 7e2d0c5 (Update portfolio website files)
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <MediaModal media={active} title={activeTitle} onClose={() => setActive(null)} />
    </div>
  );
}
