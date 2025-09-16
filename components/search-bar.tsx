"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search query for RAG:", searchQuery)
    // TODO: Implement RAG search functionality here
  }

  return (
    <div className="relative">
      <div
        className={`transition-all duration-700 ease-out transform ${isExpanded ? "w-[500px] scale-105" : "w-auto scale-100"}`}
      >
        {!isExpanded ? (
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpanded(true)}
            className="bg-slate-900/90 backdrop-blur-md border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-700 px-8 py-4 text-lg text-white hover:text-purple-100 shadow-lg hover:shadow-purple-500/25 hover:scale-105 animate-pulse-glow"
          >
            <Search className="h-5 w-5 mr-3 animate-spin-slow" />
            Search About Mujtaba
          </Button>
        ) : (
          <div className="animate-in slide-in-from-right-5 duration-700 fade-in">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter to know anything about Mujtaba"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[420px] bg-slate-900/90 backdrop-blur-md border-purple-500/30 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20 pl-12 pr-4 text-xl py-8 text-white placeholder:text-slate-400 transition-all duration-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 focus:scale-[1.02]"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-purple-400 animate-pulse" />
              </div>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsExpanded(false)
                  setSearchQuery("")
                }}
                className="bg-slate-900/90 backdrop-blur-md border-purple-500/30 hover:border-red-400/50 hover:bg-red-500/20 transition-all duration-500 text-white hover:text-red-100 p-4 hover:scale-110"
              >
                <X className="h-5 w-5 hover:rotate-90 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
