import React from 'react';
import { ShieldCheck, Target, Heart, Award, Users, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="relative z-10 pt-20">
      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Our Story & Leadership
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            Born In Rochester. Built For Impact.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            Operation GO was founded on a simple conviction: true freedom begins with the mastery of tangible skills. We take youth from under-resourced neighborhoods and equip them with the certifications, tools, and mentorship required to thrive in modern trades.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[var(--border-strong)] shadow-2xl relative">
                <img
                  src="/team-about.jpg"
                  alt="Justin Ortiz and Operation GO Team"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="font-['Syne'] text-2xl font-bold text-white">Justin Ortiz</h3>
                    <p className="text-sm font-['JetBrains_Mono'] text-[var(--accent-amber)]">
                      Founder & Executive Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-cyan)]">
                The Founder's Journey
              </span>
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-[var(--text-white)]">
                From City Schools To Regional Transformation
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                As a graduate of the Rochester City School District, Justin Ortiz experienced firsthand how standard educational pipelines often leave talented young minds without clear, lucrative technical options.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Recognizing the massive regional demand for electricians, carpenters, plumbers, and precision tradespeople, Justin established Operation GO over 14 years ago. Today, the organization operates as a premier training foundry, bridging the gap between youth potential and licensed contractors seeking eager apprentices.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <div className="font-['Barlow_Condensed'] text-3xl font-black text-[var(--accent-amber)]">
                    100%
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Community Rooted in Rochester, NY</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <div className="font-['Barlow_Condensed'] text-3xl font-black text-[var(--accent-cyan)]">
                    $0 Tuition
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Free for Enrolled City Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
              Guiding Principles
            </span>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-[var(--text-white)] mt-2">
              Our Core Operating Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Trades Mastery',
                desc: 'We never settle for superficial exposure. Students get thousands of hours on actual job equipment under the watchful eye of licensed tradesmasters.',
              },
              {
                icon: ShieldCheck,
                title: 'Accountability & Discipline',
                desc: 'Punctuality, safety protocol compliance, respect for tools, and rigorous site ethics are taught on day one and reinforced every single session.',
              },
              {
                icon: Heart,
                title: 'Generational Ownership',
                desc: 'We empower students not merely to find temporary hourly work, but to understand contractor licensing, bidding, and business ownership.',
              },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Syne'] text-xl font-bold text-[var(--text-white)]">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
