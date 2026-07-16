import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  pageKey: string;
  children: ReactNode;
}

/**
 * Wraps page content. On navigation the outgoing page exits with a
 * 3D flip + fade, and the incoming page enters with a clip-path circle
 * reveal plus a subtle rotateY — the "cool transition" on every click.
 */
export default function PageTransition({ pageKey, children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, rotateY: 18, y: 40, filter: 'blur(8px)' }}
        animate={{
          opacity: 1,
          rotateY: 0,
          y: 0,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          rotateY: -18,
          y: -40,
          filter: 'blur(8px)',
        }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
