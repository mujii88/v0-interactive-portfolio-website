"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="contact" ref={sectionRef} className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`space-y-8 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">mujtabakhan1036k@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">03175159949</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
