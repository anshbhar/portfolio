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
    <div className="glass rounded-2xl overflow-hidden h-full group flex flex-col">
      <div className="relative h-64 overflow-hidden bg-ink-100">
        {p.media.type === 'video' ? (
          <video
            src={p.media.src}
            poster={p.media.poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img src={p.media.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink-50/90 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 glass rounded-full px-3 py-1.5 text-xs font-mono text-ink-700 flex items-center gap-1.5 pointer-events-none">
          {p.media.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
          {p.media.type}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold" style={{ color: p.accent }}>{p.category}</span>
          <span className="text-xs text-ink-400 font-mono">{p.year}</span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">{p.title}</h3>
        <p className="mt-2 text-sm text-ink-500 line-clamp-3 flex-1">{p.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-400 font-mono">
          <RotateCw className="w-3 h-3" />
          Click to flip for details & links
        </div>
      </div>
    </div>
  );

  const Back = (p: Project) => (
    <div
      className="glass-strong rounded-2xl overflow-hidden h-full flex flex-col p-6"
      style={{ border: `1px solid ${p.accent}33` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: `${p.accent}1a` }}>
          <RotateCw className="w-4 h-4" style={{ color: p.accent }} />
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color: p.accent }}>flip back</span>
      </div>

      <h3 className="font-display text-2xl font-semibold text-ink-900">{p.title}</h3>
      <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
        {p.longDescription ?? p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs glass rounded-full px-2.5 py-1 text-ink-600">{t}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink-800 transition-all hover:scale-[1.02] hover:shadow-md"
            style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}55` }}
          >
            <Github className="w-4 h-4" style={{ color: p.accent }} />
            View on GitHub
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{ background: `linear-gradient(135deg, ${p.accent}, #0d9488)` }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        <button
          onClick={(e) => open(e, p.media, p.title)}
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium glass text-ink-700 hover:text-ink-900 transition-colors"
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
          <span className="text-sm font-mono text-brand-600 font-semibold">/ projects</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-ink-900">Major Projects</h1>
          <p className="mt-3 text-ink-500 max-w-xl">
            Click a card to flip it and see details plus GitHub & demo links. Hit "Reveal" to view the media — image or video.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="h-[520px]"
              style={{ transformStyle: 'preserve-3d', perspective: 1600 }}
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
