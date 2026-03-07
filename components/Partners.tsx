"use client"

import { motion } from "framer-motion"
import { Gamepad2, Radio, Layers, Cpu, Trophy, Globe2, Monitor, Shield, Laptop, Rocket } from "lucide-react"

const PARTNERS_ROW_1 = [
    { name: "GameZone", icon: Gamepad2, accent: "from-blue-500 to-cyan-500" },
    { name: "Vortex Gaming", icon: Radio, accent: "from-purple-500 to-indigo-500" },
    { name: "Pixel Stream", icon: Layers, accent: "from-fuchsia-500 to-pink-500" },
    { name: "Nexo Play", icon: Cpu, accent: "from-cyan-400 to-blue-600" },
    { name: "Apex Arcade", icon: Trophy, accent: "from-amber-400 to-orange-600" }
]

const PARTNERS_ROW_2 = [
    { name: "Cloud Gaming", icon: Globe2, accent: "from-indigo-600 to-blue-400" },
    { name: "Ultra Soft", icon: Monitor, accent: "from-emerald-500 to-cyan-400" },
    { name: "Global Publish", icon: Shield, accent: "from-rose-500 to-orange-500" },
    { name: "Infinity Media", icon: Laptop, accent: "from-blue-600 to-purple-600" },
    { name: "Zap Games", icon: Rocket, accent: "from-yellow-400 to-red-500" }
]

const PartnerCard = ({ partner }: { partner: typeof PARTNERS_ROW_1[0] }) => {
    const Icon = partner.icon
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative cursor-pointer"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className={`absolute -inset-4 bg-gradient-to-r ${partner.accent} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

            <div className="relative flex items-center gap-6 px-10 py-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partner.accent} p-[1px]`}>
                    <div className="w-full h-full bg-[#020617] rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
                <span className="text-2xl font-black text-slate-300 tracking-tighter uppercase whitespace-nowrap group-hover:text-white transition-colors duration-500">
                    {partner.name}
                </span>
            </div>
        </motion.div>
    )
}

const MarqueeRow = ({ items, direction = "left" }: { items: typeof PARTNERS_ROW_1, direction?: "left" | "right" }) => {
    return (
        <div className="flex overflow-hidden relative py-4">
            <motion.div
                animate={{
                    x: direction === "left" ? [0, -1000] : [-1000, 0]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex gap-12 items-center"
            >
                {[...items, ...items, ...items].map((partner, idx) => (
                    <PartnerCard key={`${partner.name}-${idx}`} partner={partner} />
                ))}
            </motion.div>
        </div>
    )
}

export const Partners = () => {
    return (
        <section className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
                    <span className="text-blue-400 text-xs font-black tracking-[0.4em] uppercase">Trusted Infrastructure</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none"
                >
                    Partnering with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                        Industry Leaders
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-400 text-xl max-w-2xl mx-auto font-medium"
                >
                    We power the world&apos;s most ambitious gaming platforms with premium content and scalable infrastructure.
                </motion.p>
            </div>

            <div className="space-y-8 relative z-10 w-full overflow-hidden">
                <MarqueeRow items={PARTNERS_ROW_1} direction="left" />
                <MarqueeRow items={PARTNERS_ROW_2} direction="right" />
            </div>

            <div className="mt-24 text-center relative z-10">
                <p className="text-slate-500 font-bold tracking-[0.2em] uppercase text-sm">
                    Join 500+ global brands flourishing with SnappGames
                </p>
            </div>
        </section>
    )
}
