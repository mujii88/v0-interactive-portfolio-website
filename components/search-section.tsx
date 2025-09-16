"use client"

import { SearchBar } from "./search-bar"

export function SearchSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-purple-500/5 to-blue-500/5 animate-gradient-shift"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-float-slow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-pulse-glow">Ask Me Anything</h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up delay-200">
            Use AI to learn more about my experience, skills, and projects
          </p>
        </div>

        <div className="flex justify-center animate-fade-in-up delay-400">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
