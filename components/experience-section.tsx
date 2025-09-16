"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained full-stack web applications, collaborated with design teams, and optimized application performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "Los Angeles, CA",
    period: "2019 - 2020",
    description:
      "Built responsive websites and interactive web applications for various clients, focusing on user experience and performance.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    period: "2018 - 2019",
    description:
      "Contributed to multiple web projects, learned modern development practices, and collaborated with cross-functional teams.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
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
