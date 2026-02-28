"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Search, Gamepad2, Rocket, Star, Users as UsersIcon, Flame, ArrowRight, X } from "lucide-react"

interface Game {
  id: number;
  name: string;
  category: string;
  desc: string;
  theme: string;
  playUrl: string;
  thumbnail: string;
  rating: number;
  playersOnline: number;
  isFeatured: boolean;
  isTrending: boolean;
}

const categories = ["All", "Action", "Puzzle", "Arcade", "Strategy", "Racing", "Casual"]

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games')
        const data = await response.json()
        setGames(data)
      } catch (error) {
        console.error("Failed to fetch games:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchGames()
  }, [])

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.desc.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredGame = games.find(g => g.isFeatured) || games[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Dark Immersive Sync */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#020617] text-white">
          {/* Advanced Dynamic Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>

            {/* Animated Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]"
            />

            {/* Glowing Grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Premium Library</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Explore Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                HTML5 Games
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Dive in instantly—no plugins, just pure engagement and shared earnings worldwide.
            </motion.p>

            {/* Featured Game Spotlight */}
            {!loading && featuredGame && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto mt-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden group/featured"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-slate-900 relative overflow-hidden`}>
                    <img
                      src={featuredGame.thumbnail}
                      alt={featuredGame.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover/featured:scale-110 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    {/* Featured Tag */}
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl z-10">
                      <Star className="w-3 h-3 fill-current" />
                      Featured Game
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-10 text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-wider border border-blue-500/30">
                        {featuredGame.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">{featuredGame.rating}</span>
                      </div>
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">{featuredGame.name}</h2>
                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                      {featuredGame.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={featuredGame.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 hover:bg-white/90 px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 transition-colors"
                      >
                        Play Now <Play className="w-4 h-4 fill-current" />
                      </a>
                      <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300">
                        <UsersIcon className="w-5 h-5 text-blue-400" />
                        <span className="font-bold">{featuredGame.playersOnline.toLocaleString()} Playing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>



        {/* Filters & Search Section */}
        <section className="py-12 bg-white relative z-20 -mt-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Category Filters */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${selectedCategory === category
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                      : "bg-white border-slate-100 text-slate-500 hover:border-blue-200 hover:bg-blue-50/50"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Search Bar */}
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-14 pr-12 text-slate-900 font-bold focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Games Grid Section */}
        <section className="pb-32 bg-white relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {loading ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-[26rem] rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  ))
                ) : filteredGames.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <p className="text-slate-400 font-medium">No games found in this category.</p>
                  </motion.div>
                ) : (
                  filteredGames.map((game, index) => (
                    <motion.div
                      key={game.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative h-[26rem] rounded-[3rem] overflow-hidden bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
                    >
                      {/* Game Preview Area */}
                      <div className={`absolute inset-0 bg-slate-900 group-hover:scale-110 transition-transform duration-1000`}>
                        <img
                          src={game.thumbnail}
                          alt={game.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${game.theme} mix-blend-overlay opacity-40`}></div>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        {/* Badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                          {game.isTrending && (
                            <div className="px-3 py-1 rounded-lg bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                              <Flame className="w-3 h-3 fill-current" />
                              Trending
                            </div>
                          )}
                        </div>

                        {/* Rating Overlay */}
                        <div className="absolute top-6 right-6 px-3 py-1 rounded-lg bg-black/20 backdrop-blur-md text-white text-[10px] font-black flex items-center gap-1.5 border border-white/10">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {game.rating}
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 border border-blue-500/30">
                            {game.category}
                          </span>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                            <UsersIcon className="w-3 h-3 text-blue-400" />
                            {game.playersOnline.toLocaleString()}
                          </div>
                        </div>
                        <h3 className="text-2xl font-black text-white tracking-tight mb-2 group-hover:text-blue-200 transition-colors">
                          {game.name}
                        </h3>
                        <p className="text-slate-200/80 text-sm font-medium line-clamp-2 mb-6 group-hover:text-white transition-colors">
                          {game.desc}
                        </p>

                        <a
                          href={game.playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl relative overflow-hidden group/btn hover:scale-105 transition-transform"
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-slate-100/30 to-transparent skew-x-12 -translate-x-full"
                          />
                          <span className="relative z-10">Play Now</span>
                          <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      {/* Top Glow Edge */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Developer CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto py-16 md:py-24 px-8 md:px-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] text-white shadow-2xl overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                Want to publish <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">your games?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-xl mx-auto font-medium">
                Join our premium library and reach millions of players worldwide with our high-distribution engine.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full font-black shadow-2xl">
                  Contact Developer Relations
                  <Rocket className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

