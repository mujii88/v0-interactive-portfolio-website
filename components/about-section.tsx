"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Code2, Brain, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Building intelligent automation systems using N8N workflows and AI tools",
  },
  {
    icon: Code2,
    title: "Leetcoder",
    description: "Solved 408+ problems on LeetCode, mastering data structures and algorithms",
  },
  {
    icon: Brain,
    title: "AI/ML",
    description: "Developing AI-powered applications and machine learning solutions",
  },
  {
    icon: Sparkles,
    title: "Creative",
    description: "Bringing innovative ideas to life through creative problem-solving",
  },
]

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-scale-in" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
