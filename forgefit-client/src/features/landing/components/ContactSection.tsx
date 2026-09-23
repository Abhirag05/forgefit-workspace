import { useState, type FormEvent } from 'react';
import { Mail, MessageSquare, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate successful form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-[#ff4d4d]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4d4d]/30 bg-[#ff4d4d]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff4d4d]">
            Guild Dispatch & Support
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Have questions about training algorithms, MET calculations, or feature suggestions? Send a transmission to the ForgeFit team.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Information & Channels (5 cols) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 transition-all hover:border-[#00f0ff]/30">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  <Mail className="h-6 w-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Transmission</h3>
                  <p className="text-xs text-zinc-400">Response within 24 hours</p>
                  <a
                    href="mailto:support@forgefit.app"
                    className="mt-1 block text-sm font-medium text-[#00f0ff] hover:underline"
                  >
                    support@forgefit.app
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 transition-all hover:border-[#6a00ff]/30">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6a00ff]/10 border border-[#6a00ff]/20">
                  <MessageSquare className="h-6 w-6 text-[#6a00ff]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Hunter Community</h3>
                  <p className="text-xs text-zinc-400">Join fellow lifters & athletes</p>
                  <span className="mt-1 block text-sm font-medium text-[#6a00ff]">
                    discord.gg/forgefit-guild
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border-[#ff4d4d]/20 bg-gradient-to-br from-[#ff4d4d]/5 to-transparent">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-[#ff4d4d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Spam Guarantee</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Your personal fitness telemetry and contact info remain strictly confidential. No marketing spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Transmission Received</h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-400">
                  Your message has reached our dispatch. An engineer or coach will respond shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                    >
                      Player Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sung Jin-woo"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff4d4d] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hunter@domain.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff4d4d] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="General Inquiry, Bug Report, Feature Suggestion..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff4d4d] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                  >
                    Transmission Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry or feedback in detail..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff4d4d] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Send Transmission
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
