import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import { LANG_LABELS, type Lang } from "@/data/translations";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { key: "nav_home", path: "/" },
  { key: "nav_projects", path: "/projects" },
  { key: "nav_blog", path: "/blog" },
  { key: "nav_resume", path: "/resume" },
  { key: "nav_contact", path: "/contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { dark, toggle } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50" style={{ background: dark ? "hsla(210,25%,7%,0.8)" : "hsla(60,20%,97%,0.8)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link to="/" className="font-mono text-sm font-bold tracking-tight">
          truong<span className="text-sage">p</span>data
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(n => (
            <Link
              key={n.key}
              to={n.path}
              className={`text-sm transition-colors duration-200 ${location.pathname === n.path ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t(n.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language */}
          <select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
            className="text-xs bg-transparent border border-border rounded-lg px-2 py-1 focus:outline-none cursor-pointer"
          >
            {Object.entries(LANG_LABELS).map(([k, v]) => (
              <option key={k} value={k} className="bg-background">{v}</option>
            ))}
          </select>

          {/* Theme */}
          <button onClick={toggle} className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border/50 px-4 py-3 space-y-1" style={{ background: dark ? "hsla(210,25%,7%,0.95)" : "hsla(60,20%,97%,0.95)" }}>
          {NAV_ITEMS.map(n => (
            <Link
              key={n.key}
              to={n.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm transition-colors ${location.pathname === n.path ? "text-foreground font-medium" : "text-muted-foreground"}`}
            >
              {t(n.key)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
