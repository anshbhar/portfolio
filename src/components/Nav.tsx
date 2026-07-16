import { motion } from 'framer-motion';
import { Home, FolderGit2, Award, Briefcase, Cpu, GraduationCap } from 'lucide-react';

export type PageId = 'home' | 'projects' | 'certificates' | 'experience' | 'skills' | 'education';

export const pages: { id: PageId; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

interface NavProps {
  current: PageId;
  onNavigate: (id: PageId) => void;
}

export default function Nav({ current, onNavigate }: NavProps) {
  return (
    <>
      {/* Desktop top bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 inset-x-0 z-40 flex justify-center px-4 pt-5"
      >
        <nav className="glass rounded-2xl px-2 py-2 flex items-center gap-1 shadow-2xl">
          {pages.map((p) => {
            const Icon = p.icon;
            const active = current === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className="relative group flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ color: active ? '#05060f' : '#cbd5e1' }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`relative w-4 h-4 ${active ? '' : 'group-hover:text-sky-glow transition-colors'}`} />
                <span className="relative hidden sm:inline">{p.label}</span>
              </button>
            );
          })}
        </nav>
      </motion.header>

      {/* Mobile bottom bar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed bottom-0 inset-x-0 z-40 flex justify-center px-3 pb-4 sm:hidden"
      >
        <div className="glass rounded-2xl px-1.5 py-1.5 flex items-center gap-0.5 shadow-2xl max-w-full overflow-x-auto">
          {pages.map((p) => {
            const Icon = p.icon;
            const active = current === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className="relative grid place-items-center w-11 h-11 rounded-xl transition-colors"
                style={{ color: active ? '#05060f' : '#cbd5e1' }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill-mobile"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative w-5 h-5" />
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
