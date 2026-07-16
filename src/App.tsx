import { useState } from 'react';
import Scene3D from './components/Scene3D';
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
    <div className="relative min-h-screen text-slate-200 selection:bg-sky-glow/30">
      <Scene3D />
      <Nav current={page} onNavigate={navigate} />
      <main className="relative z-10">
        <PageTransition pageKey={page}>{renderPage()}</PageTransition>
      </main>
      <footer className="relative z-10 border-t border-white/5 py-8 px-4 text-center text-xs text-slate-500 font-mono">
<<<<<<< HEAD
        Aria Vance — Creative Developer Portfolio · Crafted with React, Framer Motion & 3D CSS
=======
        Ansh Bhardwaj — Portfolio · Crafted with React, Framer Motion & 3D CSS
>>>>>>> 7e2d0c5 (Update portfolio website files)
      </footer>
    </div>
  );
}
