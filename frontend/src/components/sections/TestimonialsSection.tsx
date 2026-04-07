import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'EcoNexus transformed how we handle manufacturing scrap. We were paying disposal fees — now we earn $40K/year from the same by-products. The AI matching found buyers we never would have found on our own.',
    name: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'PrecisionForge Industries',
    initials: 'SC',
    color: 'from-primary-400 to-emerald-500',
    rating: 5,
    metric: '$40K/yr new revenue',
  },
  {
    quote:
      'Our CNC machines sat idle for 3 months of the year. We listed them on EcoNexus and now have a waiting list. The verification process gave our renters confidence and protects our equipment.',
    name: 'Marcus Rodriguez',
    role: 'Plant Manager',
    company: 'Apex Manufacturing Co.',
    initials: 'MR',
    color: 'from-secondary-400 to-blue-500',
    rating: 5,
    metric: '87% utilization achieved',
  },
  {
    quote:
      'Finding specialist industrial chemists for 6-month projects was impossible before EcoNexus. Now we staff up and down seamlessly. Our CO₂ certificates have also impressed our ESG auditors.',
    name: 'Dr. Priya Nair',
    role: 'Chief Sustainability Officer',
    company: 'GreenChem Solutions',
    initials: 'PN',
    color: 'from-violet-400 to-purple-500',
    rating: 5,
    metric: '3 ESG targets exceeded',
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Trusted by Industry{' '}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real results from real businesses building a circular economy.
          </p>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-700">4.9 / 5</span>
            <span className="text-sm text-gray-400">from 3,200+ reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-3xl shadow-premium border border-gray-100 p-8 flex flex-col hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary-300 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
