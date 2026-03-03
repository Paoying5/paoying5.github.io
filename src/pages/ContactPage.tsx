import { useLang } from "@/contexts/LangContext";
import AnimatedSection from "@/components/AnimatedSection";
import { useState, FormEvent } from "react";
import { Github, Linkedin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    const subject = encodeURIComponent(`[Portfolio Contact] Từ ${name}`);
    const body = encodeURIComponent(`Tên: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:phamnguyen152003@gmail.com?subject=${subject}&body=${body}`, "_self");

    setSent(true);
    setTimeout(() => setSent(false), 3000);
    form.reset();
  };

  return (
    <div className="min-h-screen grid-bg">
      <div className="section-padding pt-28 max-w-2xl">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-mono font-bold mb-2">{t("contact_title")}</h1>
          <p className="text-muted-foreground mb-8">{t("contact_subtitle")}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium mb-1.5">{t("contact_name")}</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("contact_email")}</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("contact_message")}</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              {sent ? <><Check size={16} /> {t("contact_sent")}</> : <><Send size={16} /> {t("contact_send")}</>}
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-3 mt-8">
            <a href="https://github.com/Paoying5" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-xl hover:scale-105 transition-transform">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ntr253" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-xl hover:scale-105 transition-transform">
              <Linkedin size={22} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

