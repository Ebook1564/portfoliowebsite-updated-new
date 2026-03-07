"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-sky-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "text-pink-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="relative bg-[#020617] text-gray-400 overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-lg group-hover:bg-blue-500/40 transition-all" />
                <div className="relative w-12 h-12 overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/SnappGames-Logo-Alternative.png"
                    alt="SnappGames Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter group-hover:opacity-80 transition-opacity">
                SNAPP<span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 text-transparent bg-clip-text">GAMES</span>
              </span>
            </Link>
            <p className="text-base leading-relaxed max-w-sm">
              Revolutionizing the casual gaming landscape with high-performance HTML5 experiences. Join our ecosystem of publishers and advertisers.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full bg-white/5 border border-white/10 ${social.color} hover:bg-white/10 hover:border-white/20 transition-all shadow-sm`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="group flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Our Universe</h4>
            <ul className="space-y-4">
              {[
                { name: "For Publishers", href: "/publishers" },
                { name: "For Advertisers", href: "/advertisers" },
                { name: "HTML5 Games", href: "/games" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Connect</h4>
            <div className="space-y-4">
              <Link
                href="/enquire"
                className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Contact Us</span>
                  <ExternalLink className="w-4 h-4 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-500">Get in touch for partnerships</p>
              </Link>
              <Link
                href="/enquire"
                className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Enquire Now</span>
                  <Mail className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs text-gray-500">Start your journey with us</p>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </Link>

            </div>

            <p className="order-last md:order-none font-medium">
              © 2026 <span className="text-white">SnappGames Technologies</span>. All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full group transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

