import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GITHUB_URL, LINKEDIN_URL } from "@/config";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-track-900 px-4 py-3 text-white placeholder:text-neutral-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light/40";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm({ name: "", email: "", message: "" });
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-4">Let's talk data and motorsport</h2>
          <p className="mt-6 max-w-md leading-relaxed text-neutral-400">
            Have a question about the analysis, the dashboards or the method? Send a message and I will get back to you.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-white hover:shadow-glow"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-white hover:shadow-glow"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8 hover:translate-y-0 hover:shadow-none">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
                placeholder="What would you like to know?"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send message
            </button>
          </form>
        </Reveal>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl border border-emerald-500/40 bg-track-800 px-5 py-4 text-white shadow-lg"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
            <span className="text-sm font-medium">Thanks! Your message has been sent.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
