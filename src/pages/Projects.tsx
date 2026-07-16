import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Github, ExternalLink, RotateCw } from 'lucide-react';
import { useState } from 'react';
import FlipCard from '../components/FlipCard';
import MediaModal from '../components/MediaModal';
import { projects, type MediaReveal, type Project } from '../data';

export default function Projects() {
  const [active, setActive] = useState<MediaReveal | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const open = (e: React.MouseEvent, media: MediaReveal, title: string) => {
    e.stopPropagation();
    setActive(media);
    setActiveTitle(title);
  };

  const Front = (p: Project) => (
    <div className="glass rounded-2xl overflow-hidden h-full group">
<<<<<<< HEAD
      <div className="relative h-52 overflow-hidden">
        {p.media.type === 'image' ? (
          <img src={p.media.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <img src={p.media.poster} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        <span className="absolute top-3 right-3 glass rounded-full px-3 py-1.5 text-xs font-mono text-slate-200 flex items-center gap-1.5">
=======
      <div className="relative h-52 overflow-hidden bg-ink-900">
        {p.media.type === 'video' ? (
          <video
            src={p.media.src}
            poster={p.media.poster}
            controls
            preload="metadata"
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={p.media.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 glass rounded-full px-3 py-1.5 text-xs font-mono text-slate-200 flex items-center gap-1.5 pointer-events-none">
>>>>>>> 7e2d0c5 (Update portfolio website files)
          {p.media.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
          {p.media.type}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-mono" style={{ color: p.accent }}>{p.category}</span>
          <span className="text-xs text-slate-500 font-mono">{p.year}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
          <RotateCw className="w-3 h-3" />
          Click to flip for details & links
        </div>
      </div>
    </div>
  );

  const Back = (p: Project) => (
    <div
      className="glass-strong rounded-2xl overflow-hidden h-full flex flex-col p-6"
      style={{ border: `1px solid ${p.accent}44` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: `${p.accent}1a` }}>
          <RotateCw className="w-4 h-4" style={{ color: p.accent }} />
        </span>
        <span className="text-xs font-mono" style={{ color: p.accent }}>flip back</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
      <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">
        {p.longDescription ?? p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs glass rounded-full px-2.5 py-1 text-slate-300">{t}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            style={{ background: `${p.accent}22`, border: `1px solid ${p.accent}55` }}
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink-900 transition-transform hover:scale-[1.02]"
            style={{ background: `linear-gradient(135deg, ${p.accent}, #2dd4bf)` }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        <button
          onClick={(e) => open(e, p.media, p.title)}
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium glass text-slate-200 hover:text-white transition-colors"
        >
          {p.media.type === 'video' ? <Play className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
          Reveal {p.media.type}
        </button>
      </div>
    </div>
  );

  return (
    <div className="px-4 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
<<<<<<< HEAD
          <span className="text-sm font-mono text-sky-glow">/ projects</span>
=======
>>>>>>> 7e2d0c5 (Update portfolio website files)
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-white">Major Projects</h1>
          <p className="mt-3 text-slate-400 max-w-xl">
            Click a card to flip it and see details plus GitHub & demo links. Hit "Reveal" to view the media — image or video.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50, rotateY: 12 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="h-[420px]"
              style={{ transformStyle: 'preserve-3d', perspective: 1400 }}
            >
              <FlipCard
                front={Front(p)}
                back={Back(p)}
                accent={p.accent}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <MediaModal media={active} title={activeTitle} onClose={() => setActive(null)} />
    </div>
  );
}
