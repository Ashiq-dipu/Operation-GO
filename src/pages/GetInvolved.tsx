import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, HeartHandshake, Package, Users, ArrowRight } from 'lucide-react';

export const GetInvolved: React.FC = () => {
  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Community Collaboration
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            Stand Beside Rochester's Next Generation
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            Transforming a city takes more than one organization. Whether you are an employer looking for loyal apprentices, a business ready to sponsor tools, or an advocate willing to volunteer time, your involvement counts.
          </p>
        </div>
      </section>

      {/* Ways to Engage */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Become an Employer Partner',
                desc: 'Gain direct priority access to vetted, OSHA-10 certified student cohorts ready to start as apprentice helpers and jobsite technicians.',
                action: 'Partner With Us',
                link: '/contact',
              },
              {
                icon: Package,
                title: 'Donate Tools & Materials',
                desc: 'Support our workshops with commercial-grade power tools, lumber, electrical conduit, safety PPE, or workshop consumables.',
                action: 'Donate Equipment',
                link: '/support-us',
              },
              {
                icon: HeartHandshake,
                title: 'Volunteer as a Shop Mentor',
                desc: 'Assist instructors during evening workshops, conduct mock job interviews, or share your career journey during guest speaker days.',
                action: 'Volunteer Today',
                link: '/contact',
              },
              {
                icon: Users,
                title: 'Community Advisory Circle',
                desc: 'Join local educators, union organizers, and neighborhood advocates advising on curriculum relevance and youth recruitment.',
                action: 'Inquire About Board',
                link: '/contact',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-['Syne'] text-2xl font-bold text-[var(--text-white)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-amber)] hover:text-[var(--accent-amber-glow)] transition-colors pt-4 border-t border-[var(--border-subtle)]"
                  >
                    {item.action} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
