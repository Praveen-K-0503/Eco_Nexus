import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, DollarSign, Leaf, Star } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 10000,
    suffix: '+',
    label: 'Businesses Connected',
    sub: 'Across 40+ industries',
  },
  {
    icon: DollarSign,
    value: 50,
    prefix: '$',
    suffix: 'M+',
    label: 'Value Exchanged',
    sub: 'In verified transactions',
  },
  {
    icon: Leaf,
    value: 500,
    suffix: 'K tons',
    label: 'CO₂ Offset',
    sub: 'Equivalent to 2M trees',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Platform Rating',
    sub: 'From 3,200+ reviews',
  },
]

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  active,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  active: boolean
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 2000
    const step = 16
    const steps = duration / step
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, value)
      setDisplay(parseFloat(current.toFixed(decimals)))
      if (current >= value) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [active, value, decimals])

  return (
    <span>
      {prefix}
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden" id="stats">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-3">
            Impact by the Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Building the{' '}
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              Circular Economy
            </span>{' '}
            at Scale
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real transactions, verified impact, and a growing community of businesses committed to sustainability.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, prefix, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <Icon size={18} className="text-primary-400" />
                </div>

                {/* Number */}
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  <AnimatedCounter
                    value={value}
                    prefix={prefix}
                    suffix={suffix}
                    decimals={value % 1 !== 0 ? 1 : 0}
                    active={inView}
                  />
                </div>

                <p className="text-sm font-semibold text-gray-200 mb-1">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
