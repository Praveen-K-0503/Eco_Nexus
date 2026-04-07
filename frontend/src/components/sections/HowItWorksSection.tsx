import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, Cpu, MessageSquare, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'List Your Assets or Waste',
    description:
      'Create a detailed listing of your industrial waste, idle machinery, available workforce, or unused workspace. Our guided forms make it quick and compliance-ready.',
    color: 'primary',
    tag: 'Takes ~5 minutes',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Finds Your Matches',
    description:
      'Our intelligent matching engine analyzes 50+ data points — industry, location, timing, specs, and price — to surface the most compatible business partners.',
    color: 'secondary',
    tag: 'Usually within 24 hours',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect & Negotiate',
    description:
      'Review match profiles, initiate contact through our secure messaging system, and negotiate terms — all within the platform with full audit trails.',
    color: 'amber',
    tag: 'Secure & transparent',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Complete & Track Impact',
    description:
      'Execute your agreement, complete the transaction, and automatically receive sustainability impact certificates — CO₂ offset, waste diversion, and circular economy credits.',
    color: 'primary',
    tag: 'Verified certificates issued',
  },
]

const colorMap = {
  primary: {
    ring: 'ring-primary-500 bg-primary-50',
    icon: 'text-primary-600',
    number: 'text-primary-200',
    tag: 'bg-primary-100 text-primary-700',
    dot: 'bg-primary-500',
  },
  secondary: {
    ring: 'ring-secondary-500 bg-secondary-50',
    icon: 'text-secondary-600',
    number: 'text-secondary-200',
    tag: 'bg-secondary-100 text-secondary-700',
    dot: 'bg-secondary-500',
  },
  amber: {
    ring: 'ring-amber-500 bg-amber-50',
    icon: 'text-amber-600',
    number: 'text-amber-200',
    tag: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-500',
  },
}

export default function HowItWorksSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            From Listing to{' '}
            <span className="gradient-text">Circular Impact</span> in 4 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EcoNexus makes B2B circular economy transactions as simple as possible — guided, automated, and fully tracked.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 mx-24" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const colors = colorMap[step.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className={`relative w-16 h-16 ${colors.ring} ring-2 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    <step.icon size={24} className={colors.icon} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Tag */}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colors.tag}`}>
                    {step.tag}
                  </span>

                  <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
