"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Users, Code, BarChart3, Rocket, CircleDollarSign, CheckCircle2, Globe, ShieldCheck, Layout, Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Testimonials } from "@/components/Testimonials"
import { useEffect, useState, useRef } from "react"
import { Partners } from "@/components/Partners"

interface Game {
  id: number;
  name: string;
  category: string;
  theme: string;
  playUrl: string;
  thumbnail: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error("Home fetch error:", err))
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 gradient-blue">
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#020617] text-white">
          {/* Advanced Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#020617]"></div>

            {/* Primary Cinematic Gradients */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/10 rounded-full blur-[180px] translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

            {/* Moving Light Orbs - Enhanced */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 80, 0],
                y: [0, -40, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -100, 0],
                y: [0, 50, 0],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-40 right-40 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px]"
            />

            {/* Premium Grid System */}
            <div className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #3b82f6 1px, transparent 1px),
                  linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
              }}>
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                filter: 'contrast(120%) brightness(120%)'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
                variants={itemVariants}
              >
                Scale Your Revenue with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Premium HTML5 Gaming
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium"
                variants={itemVariants}
              >
                Partner with the world's leading gaming infrastructure. Unlock up to 45% higher revenue, skyrocket user engagement, and deliver high-performance games with zero friction.
              </motion.p>

              {/* CTA Button Block */}
              <motion.div
                className="flex justify-center mb-20"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <Link href="/enquire">
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl overflow-hidden font-black group/btn flex items-center gap-3">
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                      />
                      <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">Get Started</span>
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Premium Floating Metrics Cards Block */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
                variants={itemVariants}
              >
                {[
                  { label: "Avg. Revenue Boost", value: "+45%", icon: TrendingUp, color: "text-blue-400", delay: 0 },
                  { label: "Peak eCPM", value: "$12.40", icon: CircleDollarSign, color: "text-indigo-400", delay: 0.1 },
                  { label: "Global Fill Rate", value: "99.9%", icon: Zap, color: "text-purple-400", delay: 0.2 }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + stat.delay,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all group overflow-hidden text-left"
                  >
                    {/* Interactive Glow */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

                    <div className="relative z-10">
                      <stat.icon className={`w-8 h-8 ${stat.color} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`} />
                      <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                        {stat.value}
                      </div>
                      <div className="text-slate-400 font-black text-xs tracking-[0.2em] uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Redesigned */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase"
              >
                The SnappGames Advantage
              </motion.div>
              <motion.h2
                className="text-3xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Choose <span className="text-blue-600"> SnappGames</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We provide the tools and expertise to help your gaming business thrive in a competitive market.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Maximum Revenue",
                  desc: "Our multi-format ad engine and premium network ensure you get the absolute best yield for every impression.",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Instant Integration",
                  desc: "Get live in minutes using our plug-and-play SDK. Zero complexity, maximum performance, and full documentation.",
                  color: "indigo"
                },
                {
                  icon: Users,
                  title: "Peak Engagement",
                  desc: "Our hand-picked library of over 500+ premium HTML5 games are engineered for maximum session length and player retention.",
                  color: "blue"
                },
                {
                  icon: Globe,
                  title: "Global Distribution",
                  desc: "Reach audiences in over 150 countries with localized content and a global server network for zero-latency gaming.",
                  color: "indigo"
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  desc: "Brand safety is our priority. We use advanced filtering and monitoring to ensure a safe environment for players and advertisers.",
                  color: "blue"
                },
                {
                  icon: Layout,
                  title: "Advanced Analytics",
                  desc: "Track every metric that matters in real-time. Gain deep insights into player behavior and revenue performance.",
                  color: "indigo"
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-500/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 relative overflow-hidden">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${feature.color === 'blue' ? 'bg-blue-600 shadow-blue-500/20' : 'bg-indigo-600 shadow-indigo-500/20'
                        } shadow-lg group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.desc}
                      </p>

                      {/* Subtle Background Glow */}
                      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.color === 'blue' ? 'bg-blue-500' : 'bg-indigo-500'
                        }`}></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How Much Can You Earn Section */}
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                    How much can you <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      earn with us?
                    </span>
                  </h2>
                  <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-lg">
                    Turn your audience into a recurring revenue stream with our high-yield monetization models and premium advertiser network.
                  </p>

                  <ul className="space-y-6 mb-12">
                    {[
                      "Up to 30% higher eCPMs than competitors",
                      "Instant access to 500+ premium advertisers",
                      "Weekly payments with zero hidden fees",
                      "Dedicated account manager for top partners"
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-4 text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                        </div>
                        {text}
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/enquire">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
                      Calculate Your Potential
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "Avg. eCPM",
                    value: "$12.40",
                    detail: "Tier 1 Traffic",
                    icon: TrendingUp
                  },
                  {
                    label: "Monthly Payout",
                    value: "$50K+",
                    detail: "For Top Partners",
                    icon: CircleDollarSign
                  },
                  {
                    label: "Fill Rate",
                    value: "99.9%",
                    detail: "Global Coverage",
                    icon: Zap
                  },
                  {
                    label: "Total Yield",
                    value: "+45%",
                    detail: "Organic Growth",
                    icon: Rocket
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className="h-8 w-8 text-blue-400 mb-6" />
                    <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                    <div className="text-blue-100/60 font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-blue-400/80 font-bold">{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA for Revenue Section */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/enquire">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-8 rounded-2xl text-xl font-black shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto group">
                  Get Started Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="mt-6 text-blue-200/50 font-bold tracking-widest uppercase text-xs">
                No upfront costs • Revenue shared daily • 5 Minute Setup
              </p>
            </motion.div>
          </div>
        </section>

        <Partners />


        {/* How It Works Section - Redesigned */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient( 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase"
              >
                Our Process
              </motion.div>
              <motion.h2
                className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How <span className="text-blue-600">SnappGame</span> Works
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                A streamlined ecosystem designed to maximize growth for developers, publishers, and advertisers alike.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pl-4 md:pl-0">
              {[
                {
                  icon: Code,
                  title: "Quick Integration",
                  desc: "Add our lightweight SDK to your platform with minimal code. Access hundreds of premium HTML5 games instantly.",
                  step: "01",
                  color: "bg-blue-600"
                },
                {
                  icon: Rocket,
                  title: "Launch & Engage",
                  desc: "Select games that match your audience. Our platform handles all the heavy lifting, hosting, and updates.",
                  step: "02",
                  color: "bg-indigo-600"
                },
                {
                  icon: BarChart3,
                  title: "Monetize & Scale",
                  desc: "Maximize revenue through high-performing ad formats and detailed analytics. Scale your gaming business with real-time insights.",
                  step: "03",
                  color: "bg-blue-700"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative p-10 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden h-full">
                    {/* Background Step Number */}
                    <span className="absolute -top-10 -right-10 text-[10rem] font-extrabold text-blue-500/5 select-none transition-all duration-500 group-hover:text-blue-500/10">
                      {item.step}
                    </span>

                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 relative z-10`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-extrabold mb-4 text-gray-900 relative z-10 tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Ultimate Experience Our Games Showcase - Light Theme Reveal */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Light Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}>
          </div>

          {/* Soft Ambient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] translate-y-1/2"></div>

          <div className="container mx-auto px-4 mb-20 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-blue-600 text-sm font-black tracking-[0.2em] uppercase">Gaming Hub</span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Experience <span className="text-blue-600">Our Games</span>
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Dive into a world of high-performance gaming. Ready to play, directly in your browser.
              </motion.p>
            </div>
          </div>

          <div className="relative max-w-[1600px] mx-auto group px-4">
            {/* The Gaming Portal Shell */}
            <div className="relative bg-slate-50/50 backdrop-blur-3xl border border-slate-200 rounded-[4.5rem] py-16 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
              {/* Edge Masking Portal Effect - Light Mode */}
              <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-50/90 via-slate-50/40 to-transparent z-20 pointer-events-none"></div>

              <div className="space-y-12 relative games-portal-wrapper">
                <style jsx>{`
                  .portal-track-1 {
                    display: flex;
                    gap: 2.5rem;
                    width: fit-content;
                    animation: portal-scroll-left 50s linear infinite;
                  }
                  .portal-track-2 {
                    display: flex;
                    gap: 2.5rem;
                    width: fit-content;
                    animation: portal-scroll-right 55s linear infinite;
                  }
                  .games-portal-wrapper:hover .portal-track-1,
                  .games-portal-wrapper:hover .portal-track-2 {
                    animation-play-state: paused;
                  }
                  @keyframes portal-scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  @keyframes portal-scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                  }
                `}</style>

                {/* Row 1 */}
                <div className="flex overflow-hidden relative">
                  <div className="portal-track-1">
                    {[...Array(3)].map((_, it) => (
                      <div key={it} className="flex gap-10">
                        {(games.length > 0 ? games.slice(0, 6) : [
                          { name: "Space Hero", category: "Action", theme: "from-blue-500 to-indigo-600", thumbnail: "", playUrl: "#" },
                          { name: "Neon Racer", category: "Racing", theme: "from-fuchsia-500 to-purple-600", thumbnail: "", playUrl: "#" },
                          { name: "Ninja Strike", category: "Arcade", theme: "from-red-500 to-rose-600", thumbnail: "", playUrl: "#" },
                          { name: "Aqua Blast", category: "Casual", theme: "from-cyan-400 to-blue-500", thumbnail: "", playUrl: "#" },
                          { name: "Sudoku King", category: "Puzzle", theme: "from-emerald-400 to-teal-600", thumbnail: "", playUrl: "#" },
                        ]).map((game, index) => (
                          <a
                            key={`${it}-${index}`}
                            href={game.playUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[26rem] h-60 rounded-[3rem] relative overflow-hidden group/card cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:-rotate-1 active:scale-95 shadow-xl hover:shadow-2xl"
                          >
                            {/* Card Base */}
                            <div className={`absolute inset-0 bg-slate-900 group-hover/card:scale-110 transition-transform duration-1000`}>
                              {game.thumbnail && (
                                <img src={game.thumbnail} alt={game.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity" />
                              )}
                              <div className={`absolute inset-0 bg-gradient-to-br ${game.theme} mix-blend-overlay opacity-40`}></div>
                            </div>

                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                            {/* Lighting Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-white/20 group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                            {/* Info Bar */}
                            <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/60 to-transparent">
                              <span className="inline-block px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3 border border-white/20">
                                {game.category}
                              </span>
                              <h4 className="text-white text-3xl font-black tracking-tighter">{game.name}</h4>
                            </div>

                            {/* Hover Pulsing Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 scale-50 group-hover/card:scale-100">
                              <div className="w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
                                <Play className="h-8 w-8 text-black fill-black ml-1.5" />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex overflow-hidden relative">
                  <div className="portal-track-2">
                    {[...Array(3)].map((_, it) => (
                      <div key={it} className="flex gap-10">
                        {(games.length > 0 ? games.slice(6, 12) : [
                          { name: "Tower Defense", category: "Strategy", theme: "from-amber-400 to-orange-600", thumbnail: "", playUrl: "#" },
                          { name: "Word Master", category: "Education", theme: "from-sky-400 to-indigo-600", thumbnail: "", playUrl: "#" },
                          { name: "Cyber Chess", category: "Board", theme: "from-slate-600 to-slate-800", thumbnail: "", playUrl: "#" },
                          { name: "Magic Archer", category: "Action", theme: "from-rose-400 to-red-600", thumbnail: "", playUrl: "#" },
                          { name: "Flippy Bird", category: "Casual", theme: "from-yellow-300 to-orange-500", thumbnail: "", playUrl: "#" },
                        ]).map((game, index) => (
                          <a
                            key={`${it}-${index}`}
                            href={game.playUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[26rem] h-60 rounded-[3rem] relative overflow-hidden group/card cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:rotate-1 active:scale-95 shadow-xl hover:shadow-2xl"
                          >
                            <div className={`absolute inset-0 bg-slate-900 group-hover/card:scale-110 transition-transform duration-1000`}>
                              {game.thumbnail && (
                                <img src={game.thumbnail} alt={game.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity" />
                              )}
                              <div className={`absolute inset-0 bg-gradient-to-br ${game.theme} mix-blend-overlay opacity-40`}></div>
                            </div>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
                            <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/60 to-transparent">
                              <span className="inline-block px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3 border border-white/20">
                                {game.category}
                              </span>
                              <h4 className="text-white text-3xl font-black tracking-tighter">{game.name}</h4>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 scale-50 group-hover/card:scale-100">
                              <div className="w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
                                <Play className="h-8 w-8 text-black fill-black ml-1.5" />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ultimate Ready to Get Started? CTA Revamp */}
        <section className="py-24 relative overflow-hidden">
          {/* Advanced Dynamic Background */}
          <div className="absolute inset-0 bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>

            {/* Animated Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -120, 0],
                y: [0, 80, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
            />

            {/* Glowing Grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden shadow-2xl">
                {/* Internal Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Join the Future</span>
                  </motion.div>

                  <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-tight">
                    Ready to Scale Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Gaming Vision?</span>
                  </h2>

                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                    Join thousands of partners already maximizing revenue with our high-performance integration.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      {/* Pulse Effect Background */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                      <Link href="/enquire">
                        <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl flex items-center gap-3 overflow-hidden">
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                          />
                          <span className="font-black">Get Started Now</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Rocket className="h-6 w-6" />
                          </motion.div>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  )
}
