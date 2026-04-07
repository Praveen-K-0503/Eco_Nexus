import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Recycle, TrendingUp, Globe, Award } from 'lucide-react'
import Button from '../ui/Button'

const stats = [
  { icon: TrendingUp, value: '10,000+', label: 'Businesses' },
  { icon: Globe, value: '$50M+', label: 'Value Saved' },
  { icon: Recycle, value: '500K tons', label: 'CO₂ Offset' },
  { icon: Award, value: '4.9/5', label: 'Rating' },
]

const pillars = [
  {
    icon: '♻️',
    title: 'Waste Exchange',
    desc: 'Turn industrial by-products into revenue',
    color: 'from-green-400/20 to-emerald-400/20',
    delay: 0,
  },
  {
    icon: '🏗️',
    title: 'Machinery',
    desc: 'Monetize idle equipment',
    color: 'from-blue-400/20 to-sky-400/20',
    delay: 0.1,
  },
  {
    icon: '👷',
    title: 'Labor Pool',
    desc: 'Share specialized workforce',
    color: 'from-amber-400/20 to-yellow-400/20',
    delay: 0.2,
  },
  {
    icon: '🏭',
    title: 'Workspaces',
    desc: 'Rent unused industrial space',
    color: 'from-purple-400/20 to-violet-400/20',
    delay: 0.3,
  },
]

// Floating particle positions
const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 4,
}))

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-primary-950 to-gray-900"
    >
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Large blurred orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
              🌿 AI-Powered Circular Economy Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Turn Waste Into{' '}
              <span className="gradient-text-mixed">Wealth</span>,{' '}
              <br className="hidden sm:block" />
              Idle Assets Into{' '}
              <span className="gradient-text-mixed">Income</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Connect with 10,000+ businesses to exchange industrial waste, share machinery, pool specialized labor, and rent workspace — powered by AI matching for maximum sustainability impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            >
              <Link to="/register">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  className="shadow-glow-green text-base"
                >
                  Start Trading Free
                </Button>
              </Link>
              <button className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                <span className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play size={14} className="ml-0.5" />
                </span>
                Watch Demo
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                    <Icon size={14} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{value}</p>
                    <p className="text-xs text-white/50">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating pillar cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 hidden lg:grid grid-cols-2 gap-4 w-80"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + pillar.delay, duration: 0.5 }}
                className={`bg-gradient-to-br ${pillar.color} backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <p className="text-sm font-bold text-white">{pillar.title}</p>
                <p className="text-xs text-white/60 mt-1">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
