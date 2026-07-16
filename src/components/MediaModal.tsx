import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { MediaReveal } from '../data';

interface MediaModalProps {
  media: MediaReveal | null;
  title?: string;
  onClose: () => void;
}

/**
 * Full-screen modal that reveals the media (image OR video) attached to an item
 * with a dramatic 3D scale + clip transition. This is the "cool transition"
 * the user wants whenever a card is clicked.
 */
export default function MediaModal({ media, title, onClose }: MediaModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = media ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [media, onClose]);

  return (
    <AnimatePresence>
      {media && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/80 backdrop-blur-xl"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at 50% 50%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial={{ scale: 0.6, rotateX: 25, opacity: 0, y: 60 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, rotateX: 20, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
          >
            <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <span className="font-display text-lg font-semibold text-white">
                  {title ?? 'Media'}
                </span>
                <button
                  onClick={onClose}
                  className="group flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Close
                  <span className="grid place-items-center w-9 h-9 rounded-full glass group-hover:scale-110 transition-transform">
                    <X className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <div className="relative bg-ink-900 aspect-video">
                {media.type === 'image' ? (
                  <motion.img
                    src={media.src}
                    alt={media.caption ?? title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                ) : (
                  <motion.video
                    src={media.src}
                    poster={media.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                )}
              </div>

              {media.caption && (
                <div className="px-6 py-4 text-sm text-slate-300 font-mono">
                  {media.caption}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
