"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Freelance AI Automation Specialist",
    company: "Self-Employed",
    location: "Rawalpindi, Pakistan",
    period: "2024 - Present (6 months)",
    description:
      "Developing AI-powered automation solutions for clients, creating intelligent chatbots, and implementing workflow automation using N8N and various AI APIs.",
    technologies: ["Python", "AI APIs", "N8N", "Automation", "LLM"],
  },
  {
    title: "Data Structures & Algorithms Instructor",
    company: "Private Tutoring",
    location: "Rawalpindi, Pakistan",
    period: "2024 (3 months)",
    description:
      "Taught Data Structures and Algorithms concepts to students, helping them improve their problem-solving skills and prepare for technical interviews.",
    technologies: ["Python", "C++", "DSA", "Teaching", "Problem Solving"],
  },
  {
    title: "Competitive Programming Enthusiast",
    company: "LeetCode Platform",
    location: "Online",
    period: "2023 - Present",
    description:
      "Solved 400+ algorithmic problems on LeetCode, achieving rank 236,874 globally. Focused on enhancing coding skills and mastering various algorithmic patterns.",
    technologies: ["Python", "C++", "Algorithms", "Data Structures", "Problem Solving"],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey through various roles and companies, building expertise in modern web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-800 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 md:translate-x-0" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>

                      <h3 className="text-xl font-semibold text-card-foreground mb-1">{experience.title}</h3>

                      <div className="flex items-center gap-2 text-accent font-medium mb-2">{experience.company}</div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{experience.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
