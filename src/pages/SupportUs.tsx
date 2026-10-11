import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const SupportUs: React.FC = () => {
  const tiers = [
    {
      name: 'Student Toolbag Sponsor',
      amount: '$150',
      desc: 'Provides one student with their personal professional starter kit: heavy-duty tool bag, 25ft tape measure, torpedo level, framing hammer, speed square, and full PPE.',
      perks: ['Personalized thank you card from student', 'Listed on annual supporter roster'],
      featured: false,
    },
    {
      name: 'OSHA-10 Certification Voucher',
      amount: '$350',
      desc: 'Funds the federal testing fee, study courseware, and verified certification credential for one graduating student entering commercial jobsites.',
      perks: ['Cohort graduation ceremony invitation', 'Listed in impact report'],
      featured: false,
    },
    {
      name: 'Full Student Cohort Scholarship',
      amount: '$1,200',
      desc: 'Completely underwrites one student\'s entire 16-week vocational journey—including materials, master contractor instruction hours, toolbag, and placement support.',
      perks: ['Direct student mentorship updates', 'VIP access to workshop showcase', 'Featured on Operation GO foundry wall'],
      featured: true,
    },
    {
      name: 'Foundry Workshop Bay Sponsor',
      amount: '$5,000',
      desc: 'Names a dedicated training workbench in our Rochester facility, funding high-precision industrial machinery, timber supplies, and electrical equipment for a full year.',
      perks: ['Permanent brass plaque on workshop bay', 'Corporate partner logo on site', 'Private workshop tour with Justin Ortiz'],
      featured: false,
    },
  ];

  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent-orange-border)] bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            501(c)(3) Tax-Deductible Contribution
          </div>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)]">
            Invest in Rochester's Working Future
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            100% of your tax-deductible contribution goes directly toward student tools, commercial materials, and instructor hours. We keep zero bloated administrative overhead.
          </p>
        </div>
      </section>

      {/* Tiers Grid */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gradient-to-b from-[#1C2538] to-[#121926] border-2 border-[var(--accent-amber)] shadow-2xl scale-105 z-10'
                    : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div>
                  {tier.featured && (
                    <div className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 rounded-full bg-[var(--accent-amber)] text-white uppercase tracking-wider mb-4">
                      <Sparkles className="w-3.5 h-3.5" /> High Impact
                    </div>
                  )}
                  <h3 className="font-['Syne'] text-xl font-bold text-[var(--text-white)] mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-['Barlow_Condensed'] text-4xl font-black text-[var(--accent-amber)] mb-4">
                    {tier.amount}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)] mb-6">
                    {tier.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => alert(`Thank you for supporting Operation GO at the ${tier.name} level! Please reach out to Justin Ortiz and our development team at info@operationgoroc.org.`)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${
                    tier.featured
                      ? 'bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white shadow-lg shadow-[#FF5E00]/30'
                      : 'bg-[var(--bg-dark)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-strong)] text-[var(--text-white)]'
                  }`}
                >
                  Sponsor {tier.amount}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
