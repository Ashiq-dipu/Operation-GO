import React, { useState } from 'react';
import { Briefcase, DollarSign, Clock, CheckCircle2, Send, Shield } from 'lucide-react';

export const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: 'Lead Carpentry & Framing Instructor',
      type: 'Part-Time Contract / 15-20 hrs/wk',
      pay: '$45.00 – $60.00 / hr',
      req: '5+ years commercial or residential carpentry experience. Journeyman or Master license preferred.',
      desc: 'Deliver weekly workshop modules teaching structural framing, rough carpentry, power tool operation, and blueprint reading to youth ages 14–18.',
    },
    {
      title: 'Electrical Systems Trade Mentor',
      type: 'Contract / Evenings & Weekends',
      pay: '$50.00 – $65.00 / hr',
      req: 'Licensed Journeyman Electrician (IBEW Local 86 or independent master contractor).',
      desc: 'Supervise conduit bending labs, breaker panel safety simulations, residential service hookup demonstrations, and electrical code basics.',
    },
    {
      title: 'HVAC & Heat Pump Specialist',
      type: 'Part-Time Contract / Flexible',
      pay: '$45.00 – $58.00 / hr',
      req: 'EPA 608 Universal Certification, clean energy mechanical installation experience.',
      desc: 'Introduce high school cohorts to heat pumps, refrigerant charging, brazing, and green energy heating/cooling systems.',
    },
    {
      title: 'Youth Site Safety Coordinator',
      type: 'Full-Time / Hourly',
      pay: '$26.00 – $32.00 / hr',
      req: 'OSHA-30 Certified, background in youth development or non-profit community services.',
      desc: 'Manage student attendance, workshop safety compliance, tool inventory tracking, and student welfare during active build days.',
    },
  ];

  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Contractor & Instructor Careers
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            Teach Your Craft. Get Paid Competitive Rates.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            Operation GO directly hires licensed master tradespeople and seasoned contractors in Rochester. Share your hard-earned knowledge, mold the next generation of builders, and enjoy flexible, highly-compensated hours.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-black uppercase text-[var(--text-white)]">
              Current Openings
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              All contractor roles feature flexible cohort scheduling, supplied curriculum materials, and fully stocked workshops.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-amber)] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-full bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] font-bold">
                      {job.pay}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-full bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-['Syne'] text-2xl font-bold text-[var(--text-white)] mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {job.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[var(--text-muted)]">
                    <Shield className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                    Requirements: {job.req}
                  </div>
                </div>

                <a
                  href="#applyForm"
                  className="px-6 py-3.5 rounded-xl bg-[var(--accent-amber)] hover:bg-[var(--accent-amber-glow)] text-white font-bold text-sm tracking-wide text-center transition-all whitespace-nowrap shadow-md shadow-[#FF5E00]/25"
                >
                  Apply For Position
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Application Form */}
      <section id="applyForm" className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
              Direct Contractor Inquiry
            </span>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-black uppercase text-[var(--text-white)] mt-2">
              Submit Your Instructor Application
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Our leadership team will reach out within 48 business hours to schedule a shop walkthrough.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[var(--accent-orange-dim)] border border-[var(--accent-amber)] text-center">
              <CheckCircle2 className="w-12 h-12 text-[var(--accent-amber)] mx-auto mb-3" />
              <h3 className="font-['Syne'] text-xl font-bold text-[var(--text-white)]">
                Application Received!
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Thank you for stepping up to mentor Rochester youth. Justin Ortiz and our hiring team will contact you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Miller"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(585) 555-0199"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@builder.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Primary Trade / Specialty *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                  >
                    <option value="">Select your specialty</option>
                    <option value="carpentry">Carpentry & Framing</option>
                    <option value="electrical">Electrical Systems</option>
                    <option value="hvac">HVAC & Heat Pumps</option>
                    <option value="plumbing">Plumbing & Piping</option>
                    <option value="welding">Welding & Fabrication</option>
                    <option value="safety">OSHA Site Safety</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                  Experience & Certifications (Years in trade, license number, union affiliation)
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a brief overview of your trade background..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF5E00]/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Instructor Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
