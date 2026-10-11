import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[var(--bg-card)] border-t border-[var(--border-subtle)] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: About */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5E00] to-[#FFA000] flex items-center justify-center font-bold text-white shadow-lg shadow-[#FF5E00]/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Barlow_Condensed'] text-2xl font-black tracking-wider uppercase text-[var(--text-white)]">
                OPERATION <span className="text-[var(--accent-amber)]">GO</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Equipping youth and emerging talent with direct-entry industrial skills, modern trades certification, and generational career pathways.
            </p>
            <div className="font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">
              501(c)(3) Registered Workforce Development Initiative
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-['Syne'] text-base font-bold text-[var(--text-white)] mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <Link to="/about" className="hover:text-[var(--accent-amber)] transition-colors">
                  Our Mission & Team
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[var(--accent-amber)] transition-colors">
                  Training Programs & Labs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-[var(--accent-amber)] transition-colors">
                  Community Impact & Metrics
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[var(--accent-amber)] transition-colors">
                  Careers & Instructor Hiring
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-[var(--accent-amber)] transition-colors">
                  Volunteer & Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-['Syne'] text-base font-bold text-[var(--text-white)] mb-4 uppercase tracking-wider">
              Pathways
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-secondary)]">
              <li className="text-[var(--text-secondary)]">Electrical Systems & Clean Energy</li>
              <li className="text-[var(--text-secondary)]">Precision Metal & Fabrication</li>
              <li className="text-[var(--text-secondary)]">Modern HVAC & Climate Controls</li>
              <li className="text-[var(--text-secondary)]">Digital Manufacturing & Robotics</li>
              <li className="text-[var(--text-secondary)]">Apprenticeship Placement Track</li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-['Syne'] text-base font-bold text-[var(--text-white)] mb-4 uppercase tracking-wider">
              Stay Informed
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Receive cohort graduation announcements, hiring opportunities, and student impact updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-[var(--accent-amber)] text-white hover:bg-[var(--accent-amber-glow)] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['JetBrains_Mono'] text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Operation GO. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[var(--text-secondary)]">
            Built for future builders with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
