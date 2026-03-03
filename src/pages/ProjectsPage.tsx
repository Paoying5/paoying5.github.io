import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

import imgCV from "@/assets/project-cv-detection.jpg";
import imgAir from "@/assets/project-air-quality.jpg";
import imgRetail from "@/assets/project-retail-sql.jpg";

const imageMap: Record<string, string> = {
  "traffic-signs": imgCV,
  "air-quality": imgAir,
  "retail-analytics": imgRetail,
};

function MiniChart({ project }: { project: (typeof projects)[0] }) {
  if (project.chartType === "detection") return null;

  const data = project.chartData ?? [];

  if (project.chartType === "line") {
    return (
      <div className="h-40 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Line type="monotone" dataKey="value" stroke="hsl(var(--sage))" strokeWidth={2} dot={false} name="Actual AQI" />
            <Line type="monotone" dataKey="value2" stroke="hsl(var(--dusk))" strokeWidth={2} dot={false} strokeDasharray="4 4" name="Predicted" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-40 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey="value" fill="hsl(var(--dusk))" radius={[4, 4, 0, 0]} name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen grid-bg">
      <div className="section-padding pt-28">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-mono font-bold mb-2">{t("projects_title")}</h1>
          <p className="text-muted-foreground mb-12 max-w-lg">{t("projects_subtitle")}</p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.12}>
              <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sage/10 flex flex-col h-full">
                {/* Preview image */}
                <div className="relative overflow-hidden">
                  <img
                    src={imageMap[p.id]}
                    alt={p.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-mono text-sage uppercase tracking-wider mb-1">{p.subtitle}</p>
                  <h2 className="text-lg font-mono font-bold mb-2 leading-tight">{p.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>

                  {/* Highlight result */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-sage/5 border border-sage/10 mb-4">
                    <TrendingUp size={16} className="text-sage mt-0.5 shrink-0" />
                    <p className="text-xs text-foreground/80 leading-relaxed">{p.highlightResult}</p>
                  </div>

                  {/* Mini chart */}
                  <MiniChart project={p} />

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
                    {p.metrics.slice(0, 4).map(m => (
                      <div key={m.label} className="text-center p-2 rounded-lg bg-muted/30">
                        <p className="text-sm font-mono font-bold text-sage">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.techStack.map(s => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground">{s}</span>
                    ))}
                  </div>

                  {/* Actions - pushed to bottom */}
                  <div className="mt-auto pt-3 border-t border-border/50">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sage/10 hover:bg-sage/20 text-sage text-sm font-mono transition-colors duration-200"
                    >
                      <Github size={16} />
                      View Code
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
