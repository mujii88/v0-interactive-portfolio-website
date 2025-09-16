"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Social Media Content Automation",
    description:
      "An intelligent automation system built with N8N that streamlines social media content creation and posting across multiple platforms, leveraging AI tools for content generation and scheduling",
    image: "/social-media-automation-dashboard-with-ai-content.jpg",
    technologies: ["N8N", "AI Automation", "Social Media APIs", "Content Generation", "Workflow Automation"],
    liveUrl:
      "https://www.linkedin.com/posts/mujtaba-ahmed-488ba7280_n8n-automation-artificialintelligence-activity-7369831558586814464-aqMh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFH-gBCPOQ49gGaKg6W9NMfHHXUZi_b18",
    githubUrl: "https://github.com/mujii88",
  },
  {
    title: "AI Medical Assistant",
    description:
      "An intelligent medical assistant powered by AI tools, professionally designed and deployed on server for users to access healthcare guidance and support",
    image: "/ai-medical-assistant-interface-with-stethoscope-an.jpg",
    technologies: ["Python", "AI/ML", "Natural Language Processing", "Web Deployment"],
    liveUrl:
      "https://www.linkedin.com/posts/mujtaba-ahmed-488ba7280_excited-to-share-my-latest-project-from-the-activity-7360534618246197248-1thU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFH-gBCPOQ49gGaKg6W9NMfHHXUZi_b18",
    githubUrl: "https://github.com/mujii88/LLM_APIs",
  },
  {
    title: "LeetCode Problem Solving",
    description:
      "Comprehensive problem-solving journey with 408+ solved problems on LeetCode, demonstrating strong coding skills and algorithmic thinking across various difficulty levels. Achieved rank 236,874 with consistent daily practice.",
    image: "/leetcode-profile-screenshot.png",
    technologies: ["Python", "C++", "Java", "Data Structures", "Algorithms"],
    liveUrl: "https://leetcode.com/u/mujii1036/",
    githubUrl: "https://leetcode.com/u/mujii1036/",
  },
  {
    title: "Spotify Automation Chatbot",
    description:
      "A personal chatbot for Spotify playlist automation that eliminates manual song searching - simply provide song names and the playlist gets updated automatically",
    image: "/spotify-music-automation-bot-with-playlist-interfa.jpg",
    technologies: ["Python", "Spotify API", "Chatbot", "Automation", "NLP"],
    liveUrl:
      "https://www.linkedin.com/posts/mujtaba-ahmed-488ba7280_spotify-api-automation-activity-7365691029598986240-eoIE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFH-gBCPOQ49gGaKg6W9NMfHHXUZi_b18",
    githubUrl: "https://github.com/mujii88/N8N-workflows",
  },
]

export function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise in modern web technologies and creative
            problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
