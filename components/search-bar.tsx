"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://rag-backend-mu.vercel.app/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          top_k: 3
        })
      })
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      const data = await response.json()
      setSearchResults(data.results.map((r: any) => r.text))
    } catch (err) {
      console.error('Error fetching search results:', err)
      setError('Failed to fetch search results. Please try again.')
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative z-50">
      <div className="relative">
        {!isExpanded ? (
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpanded(true)}
            className="bg-slate-900/90 backdrop-blur-md border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 px-8 py-4 text-lg text-white hover:text-purple-100 shadow-lg hover:shadow-purple-500/25 hover:scale-105 animate-pulse-glow"
          >
            <Search className="h-5 w-5 mr-3 animate-spin-slow" />
            Search About Mujtaba
          </Button>
        ) : (
          <div className="relative">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter to know anything about Mujtaba"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[420px] bg-slate-900/90 backdrop-blur-md border-purple-500/30 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20 pl-12 pr-12 text-xl py-8 text-white placeholder:text-slate-400 transition-all duration-300 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 focus:scale-[1.02]"
                  autoFocus
                />
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 ${isLoading ? 'animate-spin' : 'animate-pulse'} text-purple-400`} />
              </div>
              {isLoading ? (
                <Button
                  type="button"
                  disabled
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 h-14 rounded-lg transition-colors duration-200"
                >
                  Searching...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 h-14 rounded-lg transition-colors duration-200"
                >
                  Search
                </Button>
              )}
              
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-slate-900/90 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 shadow-lg z-[100] max-h-[400px] overflow-y-auto">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Search Results:</h3>
                  <ul className="space-y-2">
                    {searchResults.map((result, index) => (
                      <li key={index} className="text-slate-200 text-sm p-2 bg-slate-800/50 rounded hover:bg-slate-800/80 transition-colors">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {error && (
                <div className="absolute top-full left-0 mt-2 w-full bg-red-900/50 backdrop-blur-md border border-red-500/30 rounded-lg p-4 text-red-200 text-sm">
                  {error}
                </div>
              )}
              
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
