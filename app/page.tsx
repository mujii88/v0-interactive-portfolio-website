import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingElements } from "@/components/floating-elements"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingElements />

      <HeroSection />
      <SearchSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
