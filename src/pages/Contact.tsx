import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative z-10 pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors duration-300">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[var(--accent-amber)]">
            Connect With Our Team
          </span>
          <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--text-white)] mt-3">
            Get In Touch With Operation GO
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed max-w-3xl mx-auto">
            Have questions about student enrollment, contractor opportunities, corporate equipment donations, or scheduling a facility walkthrough in Rochester? Send us a message below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6">
                <h3 className="font-['Syne'] text-2xl font-bold text-[var(--text-white)]">
                  Rochester Training Foundry
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Our dedicated training workshop and classroom spaces are located in the heart of Rochester, NY.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-muted)]">Location</div>
                      <div className="text-sm font-semibold text-[var(--text-white)]">Rochester, New York 14605</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-muted)]">Direct Email</div>
                      <div className="text-sm font-semibold text-[var(--text-white)]">info@operationgoroc.org</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-orange-dim)] text-[var(--accent-amber)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-muted)]">Headquarters Line</div>
                      <div className="text-sm font-semibold text-[var(--text-white)]">(585) 484-0846</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-glass-bright)] border border-[var(--border-subtle)] flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--accent-amber)] flex-shrink-0" />
                <span className="text-xs text-[var(--text-secondary)]">
                  Registered 501(c)(3) Public Charity. All donor contributions are fully tax-exempt under IRS regulations.
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="w-14 h-14 text-[var(--accent-amber)] mx-auto mb-4" />
                    <h3 className="font-['Syne'] text-2xl font-bold text-[var(--text-white)]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-md mx-auto">
                      Thank you for contacting Operation GO. Our staff will review your message and reply within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Justin Ortiz"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(585) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                          Inquiry Nature *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                        >
                          <option value="student">Student Enrollment</option>
                          <option value="contractor">Contractor & Instructor Hiring</option>
                          <option value="employer">Employer / Apprenticeship Partnership</option>
                          <option value="donation">Donation / Equipment Sponsorship</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us how we can help or collaborate..."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-dark)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-[#E05300] hover:from-[#FFA000] hover:to-[#FF5E00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF5E00]/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Transmit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
