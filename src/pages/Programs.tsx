import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Zap, Wrench, Shield, CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

export const Programs: React.FC = () => {
  const tracks = [
    {
      title: 'Carpentry, Framing & Finishing',
      duration: '16 Weeks',
      age: 'Ages 14–18',
      icon: Hammer,
      skills: ['Timber framing & load-bearing walls', 'Compound miter & table saw safety', 'Drywall installation & mudding', 'Cabinetry & trim precision'],
      desc: 'Comprehensive training in residential and commercial framing. Students build scale structures and complete actual community renovation projects.',
    },
    {
      title: 'Residential & Commercial Electrical',
      duration: '18 Weeks',
      age: 'Ages 16–21',
      icon: Zap,
      skills: ['Circuit layouts & breaker panels', 'Conduit bending & wire pulling', 'Multimeter testing & diagnostics', 'Solar micro-inverter setup'],
      desc: 'Prepares students for official IBEW apprenticeship examinations and independent electrical helper certification.',
    },
    {
      title: 'HVAC & Clean Climate Tech',
      duration: '16 Weeks',
      age: 'Ages 16–21',
      icon: Wrench,
      skills: ['Refrigeration cycles & pressure gauges', 'Heat pump ductless mini-split install', 'Airflow calculations & ventilation', 'EPA Section 608 universal prep'],
      desc: 'Focuses on the massive transition to heat pumps, electric thermal systems, and modern energy-efficient climate control.',
    },
    {
      title: 'OSHA-10 & Site Safety Certification',
      duration: '2 Weeks (Core)',
      age: 'All Students',
      icon: Shield,
      skills: ['Fall protection systems', 'Personal Protective Equipment (PPE)', 'Hazard communication (HAZCOM)', 'Electrical arc flash safety'],
      desc: 'Mandatory standard certification required by commercial general contractors and union construction worksites across NY State.',
    },
  ];

  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Vocational Tracks & Curriculum
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            High-Demand Industrial Training
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            Our intensive hands-on programs combine workshop practice, jobsite exposure, and OSHA compliance to give Rochester students an unfair advantage in the skilled workforce.
          </p>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-full bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                          <Clock className="w-3.5 h-3.5" /> {track.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-full bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] font-bold">
                          {track.age}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-['Syne'] text-2xl font-bold text-[var(--text-white)] mb-3">
                      {track.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                      {track.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]">
                      <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-muted)]">
                        Competencies Taught:
                      </div>
                      {track.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--accent-amber)] flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-[var(--border-subtle)]">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-amber)] hover:text-[var(--accent-amber-glow)] transition-colors"
                    >
                      Enroll in This Track <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cohort Journey Steps */}
      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
              Student Journey
            </span>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-[var(--text-white)] mt-2">
              From Application To Employment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Application & Interview', desc: 'Students complete an assessment interview demonstrating commitment and interest.' },
              { step: '02', title: 'Foundational Safety', desc: 'Complete OSHA-10 training, safety ethics, and receive personal PPE equipment kits.' },
              { step: '03', title: 'Hands-on Labs', desc: 'Intensive fabrication, wiring, and framing practice on actual commercial equipment.' },
              { step: '04', title: 'Apprenticeship Placement', desc: 'Direct referral to regional contractor partners and local union apprenticeship boards.' },
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] flex flex-col gap-3">
                <span className="font-['Barlow_Condensed'] text-4xl font-black text-[var(--accent-amber)]">
                  {st.step}
                </span>
                <h4 className="font-['Syne'] text-lg font-bold text-[var(--text-white)]">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
