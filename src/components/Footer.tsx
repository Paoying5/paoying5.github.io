import { useLang } from "@/contexts/LangContext";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{t("footer_text")} • Pham Nguyen Nhat Truong</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Paoying5" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ntr253" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
