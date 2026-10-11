import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Zap, Hammer, Shield, Users, Briefcase, Award, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Background Video / Media Scrim */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <iframe
            className="w-full h-full object-cover scale-125 pointer-events-none"
            src="https://www.youtube.com/embed/wDam_zeOjVw?autoplay=1&mute=1&loop=1&playlist=wDam_zeOjVw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Operation GO Background"
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent" />
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent-orange-border)] bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] font-['JetBrains_Mono'] text-xs uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                Rochester Youth Workforce Foundry
              </div>

              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-[var(--text-white)]">
                REAL SKILLS.<br />
                <span className="text-[var(--accent-amber)]">REAL OPPORTUNITIES.</span><br />
                REAL FUTURES.
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Founded by Rochester City School District graduate Justin Ortiz, Operation GO bridges vocational trades mastery with living-wage career pipelines. We empower youth with hands-on tool certification while directly hiring master contractors and trade instructors to build Rochester's next generation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white font-bold text-base tracking-wide shadow-xl shadow-[#FF5E00]/30 transition-all transform hover:-translate-y-0.5"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-base transition-all"
                >
                  Teach A Trade (Hiring)
                  <span className="font-['JetBrains_Mono'] text-xs px-2 py-0.5 rounded bg-[var(--accent-orange-dim)] text-[var(--accent-amber)]">
                    Jobs Board
                  </span>
                </Link>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--border-subtle)]">
                <div>
                  <div className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black text-[var(--accent-amber)]">
                    14+
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Years of Impact</div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black text-[var(--accent-cyan)]">
                    2,800+
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Rochester Youth</div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black text-[var(--text-white)]">
                    8 Tracks
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Vocational Pathways</div>
                </div>
              </div>
            </div>

            {/* Right Cohort Hub Glass Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] backdrop-blur-xl border border-[var(--border-strong)] shadow-2xl relative overflow-hidden flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)] animate-ping" />
                    <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)]">
                      Summer Cohort Enrolling
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">TERM '26</span>
                </div>

                <div>
                  <h3 className="font-['Syne'] text-xl font-bold text-[var(--text-white)] mb-2">
                    Vocational Apprenticeship Tracks
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    Direct hands-on training in carpentry, framing, electrical systems, and commercial trades for Rochester youth ages 12–18.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-['JetBrains_Mono']">
                      <span className="text-[var(--text-secondary)]">Cohort Capacity</span>
                      <span className="text-[var(--accent-amber)] font-bold">16 / 20 Seats Claimed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF5E00] to-[#FFA000] w-[80%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-glass-bright)] border border-[var(--border-subtle)] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-white)]">
                    <Zap className="w-4 h-4 text-[var(--accent-amber)]" />
                    Are you a licensed contractor?
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Earn competitive hourly contractor rates mentoring youth in high-demand trades.
                  </p>
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-amber)] hover:underline pt-1"
                  >
                    View Open Instructor Roles <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <Link
                  to="/programs"
                  className="w-full text-center py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-strong)] text-[var(--text-white)] font-bold text-sm tracking-wide transition-all"
                >
                  Apply For Next Cohort
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Pillars Section */}
      <section className="py-20 bg-[var(--bg-card)] border-y border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
              Core Technical Curriculum
            </span>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-[var(--text-white)] mt-2">
              Built For The Jobs That Built Rochester
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4">
              Real-world tool proficiency, OSHA safety standards, and project-based learning led by seasoned professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: 'Carpentry & Framing',
                desc: 'Structural wood framing, blueprint reading, precision measuring, power tool mastery, and residential construction.',
                badge: 'Hands-on Lab',
              },
              {
                icon: Zap,
                title: 'Electrical Systems',
                desc: 'Circuitry fundamentals, conduit bending, breaker panels, solar readiness, and commercial wiring safety.',
                badge: 'Certification Track',
              },
              {
                icon: Wrench,
                title: 'Plumbing & Mechanical',
                desc: 'Pipe fitting, pressure testing, modern drainage, fixtures installation, and water heating maintenance.',
                badge: 'Apprenticeship Lead',
              },
              {
                icon: Shield,
                title: 'OSHA-10 & Site Safety',
                desc: 'Federal safety compliance, fall protection, hazardous materials identification, and first aid certification.',
                badge: 'Mandatory',
              },
              {
                icon: Users,
                title: 'Contractor Mentorship',
                desc: '1-on-1 guidance from active Rochester business owners, trade union journeymen, and master builders.',
                badge: 'Industry Connect',
              },
              {
                icon: Award,
                title: 'Direct Job Placement',
                desc: 'Guaranteed interviews with regional general contractors, commercial builders, and union local chapters.',
                badge: 'Career Pipeline',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center transition-transform group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-['JetBrains_Mono'] text-xs px-2.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="font-['Syne'] text-xl font-bold text-[var(--text-white)] mb-3 group-hover:text-[var(--accent-amber)] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[var(--accent-amber)]">
                    <CheckCircle2 className="w-4 h-4" /> Comprehensive Mastery
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#121926] via-[#0F1520] to-[#161F2E] border border-[var(--accent-orange-border)] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
                Enrollment Open For Next Cohort
              </span>
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-white mt-2">
                Ready To Build Your Future With Operation GO?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-4">
                Whether you are a student ready to learn or a master contractor ready to give back and get paid, there is a place for you on our team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/programs"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white font-bold text-center tracking-wide shadow-lg shadow-[#FF5E00]/30 transition-all"
              >
                Enroll Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-center transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
