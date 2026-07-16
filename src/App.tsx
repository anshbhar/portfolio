import { useState } from 'react';
import Nav, { type PageId } from './components/Nav';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Education from './pages/Education';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (id: PageId) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen text-ink-700 selection:bg-brand-200/60">
      {/* Ambient background glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden grid-bg">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #99f6e4, transparent 70%)' }} />
        <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #fde68a, transparent 70%)' }} />
      </div>

      <Nav current={page} onNavigate={navigate} />
      <main className="relative z-10">
        <PageTransition pageKey={page}>{renderPage()}</PageTransition>
      </main>
      <footer className="relative z-10 border-t border-ink-200/60 py-8 px-4 text-center text-xs text-ink-400 font-mono">
        Ansh Bhardwaj — Portfolio · Crafted with React, Framer Motion & TypeScript
      </footer>
    </div>
  );
}
