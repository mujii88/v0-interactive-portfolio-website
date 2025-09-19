"use client"

import { SearchBar } from "./search-bar"
import Spline from '@splinetool/react-spline'

export function SearchSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-purple-500/5 to-blue-500/5 animate-gradient-shift"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-float-slow"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Search content */}
          <div className="order-2 lg:order-1 mb-90 mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-start animate-fade-in-up delay-400">
              <SearchBar />
            </div>
          </div>

          {/* Right side - Spline 3D object */}
          <div className="order-1 lg:order-2 h-96 lg:h-[500px] animate-fade-in-up delay-600">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 backdrop-blur-sm border border-accent/20 relative flex items-center justify-center">
              <div className="w-full h-full mt-12">
                <Spline 
                  scene="https://prod.spline.design/jBM8rmrLZtT15-7V/scene.splinecode"
                  className="w-full h-full object-center"
                />
              </div>
              {/* Text overlay on 3D model */}
              <div className="absolute top-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 animate-fade-in-up delay-800">
                <p className="text-white text-sm font-medium text-center">
                  Use AI to learn more about my experience, skills, and projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
