import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Sparkles, Github, Linkedin, Dribbble } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { profile, projects } from '../data';
import type { PageId } from '../components/Nav';

interface HomeProps {
  onNavigate: (id: PageId) => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const socialIcons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Dribbble: Dribbble,
};

export default function Home({ onNavigate }: HomeProps) {
  const featured = projects.slice(0, 3);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 perspective-1000">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl w-full text-center"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-slate-300">
            <Sparkles className="w-4 h-4 text-sky-glow" />
            Available for select projects — Q3 2026
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Building the </span>
            <span className="text-gradient">third dimension</span>
            <span className="text-white"> of the web.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative magnetic overflow-hidden rounded-full px-7 py-3.5 font-medium text-ink-900"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #2dd4bf, #f59e0b)' }} />
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="magnetic rounded-full glass px-7 py-3.5 font-medium text-slate-200 hover:text-white hover:border-white/20 transition-colors"
            >
              My Journey
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {profile.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-5xl font-bold text-gradient">{s.value}+</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About section with photo */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[280px_1fr] gap-8 items-center"
          >
            {/* Photo */}
            <div className="perspective-1000">
              <TiltCard maxTilt={14} className="relative rounded-3xl overflow-hidden aspect-[4/5] glow-sky" accent="#38bdf8">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-xl font-semibold text-white">{profile.name}</div>
                  <div className="text-sm text-sky-glow font-mono">{profile.title}</div>
                </div>
              </TiltCard>
            </div>

            {/* Info */}
            <div>
<<<<<<< HEAD
              <span className="text-sm font-mono text-teal-glow">/ about</span>
=======
>>>>>>> 7e2d0c5 (Update portfolio website files)
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white">
                Hi, I'm <span className="text-gradient">{profile.name}</span>
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">{profile.bio}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.label] ?? Github;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 glass rounded-full px-4 py-2.5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 text-sky-glow group-hover:scale-110 transition-transform" />
                      <span>{s.label}</span>
                      <span className="text-slate-500 font-mono text-xs">{s.handle}</span>
                    </a>
                  );
                })}
              </div>

              <button
                onClick={() => onNavigate('projects')}
                className="mt-6 group flex items-center gap-2 text-sm font-medium text-sky-glow hover:text-teal-glow transition-colors"
              >
                See my 6 major projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {[
            { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
            { icon: MapPin, label: 'Based in', value: profile.location },
            { icon: Sparkles, label: 'Focus', value: '3D · WebGL · Motion' },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <TiltCard maxTilt={8} className="glass rounded-2xl p-5 h-full" accent="#38bdf8">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-sky-glow/10">
                      <Icon className="w-5 h-5 text-sky-glow" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{c.label}</div>
                      <div className="text-slate-100 font-medium">{c.value}</div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured work preview */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
              <p className="mt-2 text-slate-400">A glimpse of recent interactive builds.</p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="group flex items-center gap-2 text-sm text-sky-glow hover:text-teal-glow transition-colors"
            >
              All projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <TiltCard maxTilt={14} className="glass rounded-2xl overflow-hidden h-full" accent={p.accent}>
                  <div className="relative h-44 overflow-hidden">
                    {p.media.type === 'image' ? (
                      <img src={p.media.src} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <img src={p.media.poster} alt={p.title} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-mono glass rounded-full px-3 py-1 text-slate-200">
                      {p.year}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wider" style={{ color: p.accent }}>{p.category}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto glass-strong rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
          <h2 className="relative font-display text-3xl sm:text-5xl font-bold text-white">
            Let's build something <span className="text-gradient">dimensional.</span>
          </h2>
          <p className="relative mt-4 text-slate-300 max-w-xl mx-auto">
            {profile.bio}
          </p>
          <button
            onClick={() => onNavigate('certificates')}
            className="relative mt-8 magnetic rounded-full px-7 py-3.5 font-medium text-ink-900"
            style={{ background: 'linear-gradient(135deg, #f59e0b, #fb7185)' }}
          >
            See my credentials
          </button>
        </motion.div>
      </section>
    </div>
  );
}
