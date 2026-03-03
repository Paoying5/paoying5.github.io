import { useLang } from "@/contexts/LangContext";
import { blogPosts } from "@/data/blog";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

export default function BlogPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | "news" | "experience">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "all" ? blogPosts : blogPosts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen grid-bg">
      <div className="section-padding pt-28">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-mono font-bold mb-2">{t("blog_title")}</h1>
          <p className="text-muted-foreground mb-8 max-w-lg">{t("blog_subtitle")}</p>

          <div className="flex gap-2 mb-10">
            {(["all", "news", "experience"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === f
                  ? "bg-dusk text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
                  }`}
              >
                {f === "all" ? "Tất cả" : f === "news" ? t("news_label") : t("exp_label")}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.05}>
              <div className="glass-card overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start gap-4"
                >
                  <div className="mt-0.5 text-sage">
                    {post.category === "news" ? <Newspaper size={18} /> : <Lightbulb size={18} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
                      <span className="tag-pill text-[10px]">{post.category === "news" ? t("news_label") : t("exp_label")}</span>
                    </div>
                    <h3 className="font-mono font-bold text-base sm:text-lg mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-1 text-muted-foreground flex-shrink-0">
                    {expanded === post.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === post.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16">
                        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                          {post.content.split("\n").map((line, idx) => {
                            if (line.startsWith("## ")) return <h2 key={idx} className="text-foreground font-mono text-lg font-bold mt-4 mb-2">{line.slice(3)}</h2>;
                            if (line.startsWith("### ")) return <h3 key={idx} className="text-foreground font-mono text-base font-bold mt-3 mb-1">{line.slice(4)}</h3>;
                            if (line.startsWith("```")) return null;
                            if (line.startsWith("- ")) return <li key={idx} className="ml-4 text-sm">{line.slice(2)}</li>;
                            if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) return <li key={idx} className="ml-4 text-sm list-decimal">{line.slice(3)}</li>;
                            if (line.trim() === "") return <br key={idx} />;
                            return <p key={idx} className="text-sm leading-relaxed">{line}</p>;
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

