import React from 'react';
import { Award, TrendingUp, Users, DollarSign, CheckCircle2, Star } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Verified Outcomes & Community Growth
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            Real Metrics. Measurable Change.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            We measure our success not by how many students sit in a classroom, but by how many earn credentials, secure living-wage union careers, and establish independent financial stability in Rochester.
          </p>
        </div>
      </section>

      {/* Big Metrics Grid */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '2,800+', label: 'Rochester Youth Trained', sub: 'Over 14 consecutive years of active service', icon: Users, color: 'text-[var(--accent-amber)]' },
              { num: '94%', label: 'Cohort Graduation Rate', sub: 'Consistently outpacing regional vocational averages', icon: Award, color: 'text-[var(--accent-cyan)]' },
              { num: '$22.50', label: 'Average Starting Wage', sub: 'Direct entry hourly apprentice compensation', icon: DollarSign, color: 'text-emerald-400' },
              { num: '85+', label: 'Contractor Employers', sub: 'Regional commercial builders actively hiring grads', icon: TrendingUp, color: 'text-amber-400' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`font-['Barlow_Condensed'] text-5xl font-black ${stat.color}`}>
                      {stat.num}
                    </div>
                    <div className="font-['Syne'] text-base font-bold text-[var(--text-white)] mt-2">
                      {stat.label}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
              Graduate Voices
            </span>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-black uppercase text-[var(--text-white)] mt-2">
              Stories From The Jobsite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Before Operation GO, I didn\'t know what I was going to do after high school. Justin and the instructors gave me actual tools, taught me conduit bending, and helped me enter Local 86. I\'m 20 and earning over $28 an hour now.',
                name: 'Marcus D.',
                role: 'Electrical Apprentice, Local 86',
              },
              {
                quote: 'Learning how to frame a wall and read construction blueprints gave me so much confidence. Operation GO proved that young people in Rochester have the talent—we just need real access and people who believe in us.',
                name: 'Brianna S.',
                role: 'Commercial Carpentry Specialist',
              },
              {
                quote: 'I hire directly from Operation GO cohorts because Justin Ortiz holds these students to real site standards. They show up 15 minutes early, wearing their PPE, ready to work hard.',
                name: 'Dave Henderson',
                role: 'General Contractor & Employer Partner',
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[var(--accent-amber)] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] italic leading-relaxed mb-6">
                    "{testi.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="font-['Syne'] text-base font-bold text-[var(--text-white)]">
                    {testi.name}
                  </div>
                  <div className="text-xs font-['JetBrains_Mono'] text-[var(--accent-amber)]">
                    {testi.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
