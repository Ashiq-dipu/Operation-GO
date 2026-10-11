import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = (localStorage.getItem('operation-go-theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('operation-go-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5E00] to-[#FFA000] flex items-center justify-center font-bold text-white shadow-lg shadow-[#FF5E00]/30 transition-transform group-hover:scale-105">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Barlow_Condensed'] text-2xl font-black tracking-wider uppercase text-[var(--text-white)] group-hover:text-[var(--accent-amber)] transition-colors">
                OPERATION <span className="text-[var(--accent-amber)]">GO</span>
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest uppercase text-[var(--text-secondary)] -mt-1">
                Youth Workforce Foundry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--accent-amber)] bg-[var(--accent-orange-dim)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-white)] hover:bg-[var(--bg-card-hover)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-white)] hover:border-[var(--border-strong)] transition-all bg-[var(--bg-glass-bright)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Support Us Button */}
            <Link
              to="/support-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white font-bold text-sm tracking-wide shadow-md shadow-[#FF5E00]/25 transition-all transform hover:-translate-y-0.5"
            >
              Support Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-white)] transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-white)] hover:border-[var(--border-strong)] transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-20 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--bg-dark)] border-l border-[var(--border-subtle)] p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase font-['JetBrains_Mono'] tracking-wider text-[var(--text-muted)] mb-2 px-3">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-[var(--accent-amber)] bg-[var(--accent-orange-dim)] font-bold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <Link
              to="/support-us"
              className="w-full text-center py-3 rounded-xl bg-[var(--accent-amber)] hover:bg-[var(--accent-amber-glow)] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF5E00]/30 transition-all"
            >
              Support Us
            </Link>
            <div className="text-center font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} Operation GO
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
