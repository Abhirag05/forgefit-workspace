import { useState, type FormEvent } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

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
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Support
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Have questions about training algorithms or account features? Get in touch with our team.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Info Side (4 cols) using Card primitive */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-4">
            <Card hoverEffect>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <Mail className="h-5 w-5 text-[#ff416c]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Email Inquiries</h3>
                  <a
                    href="mailto:support@forgefit.app"
                    className="mt-0.5 block text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    support@forgefit.app
                  </a>
                </div>
              </div>
            </Card>

            <Card hoverEffect>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <MessageSquare className="h-5 w-5 text-[#7928ca]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Community</h3>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    discord.gg/forgefit
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Side (8 cols) using Card primitive */}
          <Card className="p-8 sm:p-10 lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#ff416c]" />
                <h3 className="mt-4 text-lg font-bold text-white">Message Sent</h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Thank you for reaching out. We will respond to your inquiry shortly.
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff416c] focus:outline-none focus:ring-1 focus:ring-[#ff416c]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-zinc-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff416c] focus:outline-none focus:ring-1 focus:ring-[#ff416c]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Topic or inquiry"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff416c] focus:outline-none focus:ring-1 focus:ring-[#ff416c]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#ff416c] focus:outline-none focus:ring-1 focus:ring-[#ff416c]"
                  />
                </div>

                <Button variant="gradient" size="md" type="submit" className="w-full">
                  Submit Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
