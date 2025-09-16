"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "AI Automation", level: 82 },
      { name: "Agentic AI", level: 78 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Machine Learning", level: 75 },
    ],
  },
  {
    title: "Engineering & Tools",
    skills: [
      { name: "MATLAB", level: 80 },
      { name: "Proteus", level: 78 },
      { name: "Verilog", level: 72 },
      { name: "FPGA/Embedded Systems", level: 75 },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with staggered delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(
                  () => {
                    setAnimatedSkills((prev) => new Set([...prev, skill.name]))
                  },
                  categoryIndex * 200 + skillIndex * 100,
                )
              })
            })
          }, 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and
            tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`transition-all duration-800 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={animatedSkills.has(skill.name) ? skill.level : 0} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
