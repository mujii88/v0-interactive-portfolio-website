"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 animate-gradient-shift" />

      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 via-secondary/15 to-accent/10 rounded-full blur-3xl transition-all duration-300 ease-out animate-pulse-slow"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      <div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-accent/20 to-secondary/15 rounded-full animate-float-complex shadow-lg"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/15 rounded-lg rotate-45 animate-float-complex shadow-lg"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-60 left-1/3 w-8 h-8 bg-accent/30 rounded-full animate-float-complex"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-accent/25 to-secondary/20 rounded-full animate-float-complex shadow-md"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/15 rounded-lg rotate-12 animate-float-complex shadow-lg"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-6 h-6 bg-secondary/40 rounded-full animate-float-complex"
        style={{ animationDelay: "3.5s" }}
      />

      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-accent/30 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-accent/25 via-secondary/20 to-accent/15 rounded-full blur-2xl animate-pulse-glow-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary/25 via-accent/20 to-secondary/15 rounded-full blur-2xl animate-pulse-glow-slow"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-accent/15 to-secondary/20 rounded-full blur-xl animate-pulse-glow-slow transform -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(139,92,246,0.3)_25px,rgba(139,92,246,0.3)_26px,transparent_27px,transparent_49px,rgba(139,92,246,0.3)_50px,rgba(139,92,246,0.3)_51px,transparent_52px),linear-gradient(rgba(139,92,246,0.3)_24px,transparent_25px,transparent_26px,rgba(139,92,246,0.3)_27px,rgba(139,92,246,0.3)_49px,transparent_50px,transparent_51px,rgba(139,92,246,0.3)_52px)] bg-[length:50px_50px] animate-grid-move" />
      </div>

      <div
        className="absolute top-32 right-1/4 text-accent/20 text-2xl font-mono animate-float-complex"
        style={{ animationDelay: "2.5s" }}
      >
        {"</>"}
      </div>
      <div
        className="absolute bottom-32 left-1/4 text-secondary/20 text-xl font-mono animate-float-complex"
        style={{ animationDelay: "4.5s" }}
      >
        {"{}"}
      </div>
      <div
        className="absolute top-2/3 right-1/5 text-accent/20 text-lg font-mono animate-float-complex"
        style={{ animationDelay: "1.8s" }}
      >
        {"()"}
      </div>
    </div>
  )
}
