"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Gamepad2, DollarSign, Zap, Users, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function PublishersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 gradient-blue overflow-hidden">
        {/* Aligned Premium Hero for Publishers */}
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-blue-400 text-sm font-black tracking-[0.2em] uppercase">Publisher Ecosystem</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Monetize like <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  never before
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bridge the gap between your audience and premium HTML5 gaming.
                Powerful SDK, instant integration, and massive revenue growth.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <Link href="/enquire">
                    <Button size="lg" className="relative bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-full shadow-2xl overflow-hidden font-black">
                      <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 -translate-x-full"
                      />
                      Start Publishing
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white/5 border-white/10 text-white hover:bg-white/10 text-xl px-12 py-8 rounded-full backdrop-blur-md border font-black transition-all">
                    View SDK Docs
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid - Premium Glassmorphism */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                Why Partners <span className="text-blue-600">Choose Us</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">The most advanced game distribution platform for modern publishers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { icon: DollarSign, title: "Triple Monetization", desc: "Maximize yields with optimized Ads, In-App Purchases, and Subscription models.", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                { icon: Gamepad2, title: "Curated Library", desc: "Instantly stream 500+ premium HTML5 titles from world-class developers.", color: "bg-blue-50 text-blue-600 border-blue-100" },
                { icon: TrendingUp, title: "Precision Analytics", desc: "Real-time dashboards for player engagement and revenue forecasting.", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
                { icon: Zap, title: "Lightweight SDK", desc: "Minimal footprint integration that keeps your platform fast and responsive.", color: "bg-amber-50 text-amber-600 border-amber-100" },
                { icon: CheckCircle2, title: "Auto-Optimization", desc: "AI-driven game recommendations to keep your specific audience engaged longer.", color: "bg-purple-50 text-purple-600 border-purple-100" },
                { icon: Users, title: "Cloud Hosting", desc: "We manage all the infrastructure. You just provide the audience.", color: "bg-rose-50 text-rose-600 border-rose-100" },
              ].map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={i}
                    className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -15 }}
                  >
                    <div className={`w-16 h-16 rounded-[1.5rem] ${benefit.color} border flex items-center justify-center mb-8 transition-transform group-hover:rotate-12 duration-500`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Integration Workflow - Horizontal Timeline */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8">
                Go Live <span className="text-blue-600">in Minutes</span>
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Connection Line */}
              <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 hidden lg:block"></div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                {[
                  { num: "01", title: "Generate Keys", desc: "Sign up and instantly access your unique API credentials." },
                  { num: "02", title: "Embed SDK", desc: "Add two lines of code to your portal and customize the UI." },
                  { num: "03", title: "Skyrocket Revenue", desc: "Watch engagement metrics climb as games go live." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="w-20 h-20 bg-blue-600 rounded-[2rem] text-white flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl shadow-blue-500/30 transform transition-transform hover:scale-110 hover:rotate-6">
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed px-4">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
              {[
                { number: "15,000+", label: "Portals Empowered", sub: "Global Reach" },
                { number: "800+", label: "Bespoke Games", sub: "Premium Catalog" },
                { number: "120M+", label: "Monthly Sessions", sub: "High Engagement" },
                { number: "99.9%", label: "Uptime SLA", sub: "Always Online" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-12 rounded-[3.5rem] bg-slate-50 text-center relative overflow-hidden group border border-slate-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <motion.div
                    className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl font-black text-blue-600 mb-2 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-slate-400 font-medium">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Aligned with Homepage */}
        <section className="py-32 relative overflow-hidden bg-[#020617]">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600/20 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-purple-600/10 rounded-full blur-[150px]"
            />

            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto py-24 px-8 md:px-12 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)] relative overflow-hidden group"
            >
              {/* Floating Icons for "Elite" feel */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 text-blue-400/30 hidden md:block"
              >
                <Rocket size={60} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 text-purple-400/30 hidden md:block"
              >
                <Zap size={60} />
              </motion.div>
              <motion.div
                animate={{ x: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-10 text-indigo-400/20 hidden lg:block"
              >
                <DollarSign size={80} />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-[0.3em]"
                >
                  <Users className="w-4 h-4" /> Limited Availability
                </motion.div>

                <h2 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-[0.9] flex flex-col items-center">
                  <span className="opacity-90 leading-tight">Ready to Join the</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 filter drop-shadow-[0_0_30px_rgba(96,165,250,0.5)] leading-tight">
                    Elite Hub?
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  The world's fastest growing publishers are already here.
                  Get exclusive access to premium revenue streams and world-class titles.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                  <Link href="/enquire">
                    <Button size="lg" className="group relative bg-white text-blue-900 hover:bg-white text-2xl px-16 py-10 rounded-full font-black shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Claim Your Spot <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Trusted by 15,000+ Partners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

