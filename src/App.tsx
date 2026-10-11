import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackdropGlow } from './components/BackdropGlow';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Impact } from './pages/Impact';
import { Careers } from './pages/Careers';
import { GetInvolved } from './pages/GetInvolved';
import { SupportUs } from './pages/SupportUs';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-primary)] transition-colors duration-300 relative flex flex-col justify-between selection:bg-[var(--accent-amber)] selection:text-white">
      {/* Ambient reactive GSAP backdrop glow */}
      <BackdropGlow />

      {/* Main navigation header */}
      <Navbar />

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default App;
