import { useLang } from "@/contexts/LangContext";
import { skillGroups } from "@/data/skills";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";

export default function ResumePage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen grid-bg">
      <div className="section-padding pt-28">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-mono font-bold mb-10">{t("resume_title")}</h1>
        </AnimatedSection>

        {/* Education Timeline */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 sm:p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-dusk/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} className="text-dusk" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">2020 – 2025</p>
                <h3 className="font-mono font-bold text-lg mb-1">B.Eng. in Data Science</h3>
                <p className="text-muted-foreground text-sm">Đại học Nguyễn Tất Thành (Nguyen Tat Thanh University)</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <AnimatedSection key={g.category} delay={0.1 + i * 0.05}>
              <div className="glass-card p-5 sm:p-6 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{g.icon}</span>
                  <h3 className="font-mono font-bold text-sm">{g.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map(s => (
                    <span key={s} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
