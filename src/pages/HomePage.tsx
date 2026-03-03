import { useLang } from "@/contexts/LangContext";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import avatar from "@/assets/avatar.jpg";

const TECH_STACK = ["Python", "SQL", "TensorFlow", "YOLOv8", "Flask", "Streamlit", "Power BI", "Git"];

export default function HomePage() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Typing animation
  const phrases = ["Hello, I'm", "Xin chào, tôi là", "Hi there, I'm"];
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div ref={containerRef} className="min-h-screen grid-bg relative overflow-hidden">
      {/* Particle background */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <ParticleBackground />
      </motion.div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, hsla(170,30%,55%,0.08), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsla(220,35%,40%,0.08), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, hsla(160,18%,30%,0.06), transparent 70%)" }}
        />
      </div>

      <div className="section-padding pt-28 sm:pt-36 relative" style={{ zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Avatar with parallax */}
          <AnimatedSection className="flex-shrink-0">
            <motion.div style={{ y: avatarY }} className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-sage/30 to-dusk/30 flex items-center justify-center text-6xl sm:text-7xl select-none backdrop-blur-sm border border-border/30"
              >
                <img src={avatar} alt="Pham Nguyen Nhat Truong" className="w-full h-full object-cover rounded-3xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-lg shadow-lg"
              >
                🎓
              </motion.div>
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-[2rem] border border-dashed border-sage/15 pointer-events-none"
              />
            </motion.div>
          </AnimatedSection>

          {/* Content with parallax */}
          <motion.div style={{ y: textY }} className="text-center lg:text-left flex-1">
            <AnimatedSection delay={0.1}>
              <p className="text-sm font-mono text-sage mb-2 h-6">
                <span>{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-[2px] h-4 bg-sage ml-0.5 align-middle"
                />
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold leading-tight mb-3">
                <span className="text-gradient">Pham Nguyen</span>
                <br />Nhat Truong
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-2">
                {t("hero_tagline")}
              </p>
              <p className="text-muted-foreground max-w-lg mb-6 leading-relaxed">
                {t("hero_desc")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Link to="/projects" className="btn-primary group">
                  {t("hero_cta_projects")}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
                <a
                  href="https://drive.google.com/drive/folders/12O-MQLE3bOW-Vj3VJk3SOje6rNqXJ70a?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Download size={16} /> {t("hero_cta_cv")}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {TECH_STACK.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="tag-pill cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-2 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Paoying5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ntr253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

