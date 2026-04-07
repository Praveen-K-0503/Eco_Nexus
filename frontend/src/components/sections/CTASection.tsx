import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../ui/Button'

const perks = [
  'No credit card required',
  'Free for the first 3 listings',
  'Cancel anytime',
  'Verified business network',
]

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-800">
      {/* Pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      {/* Orbs */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-200 mb-4">
          Join the Movement
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Join the{' '}
          <span className="text-primary-200">Circular Economy</span>?
        </h2>
        <p className="text-lg text-primary-100/80 mb-10 max-w-xl mx-auto">
          Join 10,000+ businesses already turning waste into wealth and idle assets into income on EcoNexus.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <CheckCircle size={40} className="text-primary-200 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">You're on the list! 🎉</h3>
            <p className="text-primary-100/80 text-sm">We'll be in touch shortly with your early access invite.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-primary-300 text-sm placeholder:text-gray-400 shadow-md"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="bg-gray-900 hover:bg-gray-800 from-gray-900 to-gray-900 whitespace-nowrap"
            >
              Get Early Access
            </Button>
          </form>
        )}

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-xs text-primary-200">
              <CheckCircle size={12} />
              {p}
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8">
          {[
            { value: '10K+', label: 'Businesses' },
            { value: '$50M+', label: 'Value Created' },
            { value: '500K tons', label: 'CO₂ Offset' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-primary-200">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
