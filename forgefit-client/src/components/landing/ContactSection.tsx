import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Support
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Have suggestions or questions about our system or account features? Get in touch with our team.
          </p>
        </div>

        {/* Centered Form using Card primitive */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="p-8 sm:p-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  required
                />
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@domain.com"
                  required
                />
              </div>

              <Input
                id="subject"
                label="Subject"
                placeholder="Topic or inquiry"
                required
              />

              <Textarea
                id="message"
                label="Message"
                rows={4}
                placeholder="How can we help you?"
                required
              />

              <Button variant="gradient" size="md" type="submit" className="w-full">
                Submit Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
