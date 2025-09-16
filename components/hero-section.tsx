"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"} order-2 lg:order-1`}
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 blur-2xl animate-pulse-slow group-hover:scale-110 transition-transform duration-700"></div>

              <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/30 relative z-10 group-hover:scale-105 transition-all duration-500 animate-float-smooth">
                <img
                  src="/professional-headshot-of-a-creative-developer.jpg"
                  alt="Mujtaba - Creative Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative ping elements */}
              <div className="absolute top-1/4 right-4 w-2 h-2 bg-accent rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-1/3 left-4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping delay-1000 opacity-60"></div>
              <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-500 opacity-60"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"} order-1 lg:order-2`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">
              Mujtaba
              <span className="text-accent block animate-pulse-glow">Ahmed</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              I’m a final-year Electrical Engineering student with a strong technical background, pursuing coding as a
              hobby and enjoying algorithmic problem-solving on LeetCode for fun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>

            <div className="flex justify-start space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-gray-800/80 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href="https://github.com/mujii88" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-blue-600/80 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/mujtaba-ahmed-488ba7280/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-green-600/80 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href="mailto:mujtabakhan1036k@gmail.com">
                  <Mail className="h-8 w-8" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  )
}
