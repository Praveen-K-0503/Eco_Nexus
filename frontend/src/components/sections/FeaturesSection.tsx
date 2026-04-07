import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    emoji: '♻️',
    title: 'Waste Exchange',
    subtitle: 'Revenue from By-Products',
    href: '/waste',
    description:
      'Transform industrial waste streams into profitable exchanges. Connect buyers who need raw materials with manufacturers generating by-products.',
    features: [
      'AI-powered material matching',
      'Hazard classification & compliance',
      'Real-time price discovery',
      'Bulk quantity management',
      'Certificate of destruction tracking',
    ],
    accent: 'from-primary-500 to-emerald-600',
    bg: 'from-primary-50 to-emerald-50',
    iconBg: 'bg-primary-100',
    stats: '247 active listings',
  },
  {
    emoji: '🏗️',
    title: 'Machinery Sharing',
    subtitle: 'Monetize Idle Equipment',
    href: '/machinery',
    description:
      'Industrial machines sitting idle cost money. List your equipment for short or long-term rental to businesses that need capacity without capital expenditure.',
    features: [
      'Flexible rental periods (daily/weekly/monthly)',
      'Equipment condition verification',
      'Insurance & liability framework',
      'Operator availability matching',
      'Maintenance scheduling integration',
    ],
    accent: 'from-secondary-500 to-blue-600',
    bg: 'from-secondary-50 to-blue-50',
    iconBg: 'bg-secondary-100',
    stats: '189 machines available',
  },
  {
    emoji: '👷',
    title: 'Labor Pooling',
    subtitle: 'Share Specialized Workforce',
    href: '/labor',
    description:
      'Access specialized industrial workers on-demand. From welders to chemists — share workforce with partner businesses during demand fluctuations.',
    features: [
      'Skill-based AI matching',
      'Compliance & certification tracking',
      'Seasonal demand balancing',
      'Cross-industry placements',
      'Payroll & tax handling support',
    ],
    accent: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
    stats: '1,400+ skilled workers',
  },
  {
    emoji: '🏭',
    title: 'Workspace Sharing',
    subtitle: 'Rent Unused Industrial Space',
    href: '/workspace',
    description:
      'Underutilized factory floors, warehouses, and cleanrooms generate zero return. List your space and earn from businesses that need temporary industrial facilities.',
    features: [
      'Space type & spec filtering',
      'Flexible lease terms',
      'Utility & logistics coordination',
      'Zoning & permit guidance',
      'Revenue optimization analytics',
    ],
    accent: 'from-violet-500 to-purple-600',
    bg: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-100',
    stats: '320 spaces listed',
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl shadow-premium border border-gray-100 overflow-hidden hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top gradient accent */}
      <div className={`h-1 bg-gradient-to-r ${pillar.accent}`} />

      <div className="p-8">
        {/* Icon + label */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 ${pillar.iconBg} rounded-2xl flex items-center justify-center text-3xl`}>
            {pillar.emoji}
          </div>
          <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
            {pillar.stats}
          </span>
        </div>

        <div className="mb-2">
          <p className={`text-xs font-bold uppercase tracking-wider mb-1 bg-gradient-to-r ${pillar.accent} bg-clip-text text-transparent`}>
            {pillar.subtitle}
          </p>
          <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">{pillar.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-8">
          {pillar.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
              <CheckCircle2 size={14} className="text-primary-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={pillar.href}
          className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${pillar.accent} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}
        >
          Explore {pillar.title}
          <ArrowRight size={14} className="text-current" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Four Pillars</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            One Platform, Four Ways to{' '}
            <span className="gradient-text">Unlock Value</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            EcoNexus connects the circular dots across your industrial ecosystem — waste, machines, workers, and space.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
