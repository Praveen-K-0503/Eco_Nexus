import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Leaf, Mail, Lock, User, Building2, ArrowRight, Check, Chrome } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { cn } from '../../utils'

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['buyer', 'seller', 'both'], { required_error: 'Please select a role' }),
  terms: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms' }) }),
})

type RegisterForm = z.infer<typeof registerSchema>

const roles = [
  { value: 'buyer', label: 'Buyer', desc: 'I want to source materials, equipment, labor or space' },
  { value: 'seller', label: 'Seller / Provider', desc: 'I want to monetize waste, equipment, labor or space' },
  { value: 'both', label: 'Both', desc: 'I want to buy and sell on the platform' },
] as const

const steps = ['Account', 'Company', 'Role']

export default function RegisterPage() {
  const navigate = useNavigate()
  // Progress indicator shows current form section (visual only — single-page form)
  const step = 0

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })

  const selectedRole = watch('role')

  const onSubmit = async (_data: RegisterForm) => {
    await new Promise((r) => setTimeout(r, 1200))
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left brand panel */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-5/12 xl:w-1/2 flex-col justify-between bg-gradient-to-br from-primary-950 via-primary-800 to-emerald-900 p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
            <Leaf className="text-primary-300" size={20} />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Eco<span className="text-primary-300">Nexus</span>
          </span>
        </div>

        <div className="relative space-y-6">
          <h2 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
            Start Building a
            <br />
            <span className="text-primary-300">Circular Future</span>
          </h2>
          <p className="text-primary-100/70 text-lg max-w-sm">
            List your first asset in 5 minutes. No setup fees, no long-term contracts.
          </p>

          <div className="space-y-3">
            {[
              '✅ Free for first 3 listings',
              '✅ AI-powered matching engine',
              '✅ Verified business network',
              '✅ Impact certificates included',
            ].map((item) => (
              <p key={item} className="text-sm text-primary-100/80">{item}</p>
            ))}
          </div>
        </div>

        <div className="relative flex gap-8">
          {[
            { v: '5 min', l: 'Setup time' },
            { v: 'Free', l: 'To get started' },
            { v: '10K+', l: 'Active businesses' },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="text-xl font-bold text-white">{v}</p>
              <p className="text-xs text-primary-300">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — form panel */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 bg-white overflow-y-auto"
      >
        {/* Mobile logo */}
        <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <Leaf className="text-white" size={15} />
          </div>
          <span className="text-lg font-bold text-gray-900">
            Eco<span className="text-primary-500">Nexus</span>
          </span>
        </Link>

        <div className="max-w-md w-full mx-auto">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
                  i < step
                    ? 'bg-primary-500 text-white'
                    : i === step
                    ? 'bg-primary-500 text-white ring-4 ring-primary-100'
                    : 'bg-gray-100 text-gray-400'
                )}>
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span className={cn('text-xs font-medium', i <= step ? 'text-gray-900' : 'text-gray-400')}>
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div className={cn('h-px flex-1 w-8 transition-all duration-300', i < step ? 'bg-primary-500' : 'bg-gray-200')} />
                )}
              </div>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Create your account
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Join the circular economy — it's free to get started
          </p>

          {/* Social */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Chrome size={17} className="text-blue-500" />
              Sign up with Google
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">or register with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Jane Smith"
              icon={<User size={15} />}
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            <Input
              label="Company Name"
              placeholder="Acme Industries Ltd."
              icon={<Building2 size={15} />}
              error={errors.companyName?.message}
              {...register('companyName')}
            />
            <Input
              label="Work Email"
              type="email"
              placeholder="jane@acme.com"
              icon={<Mail size={15} />}
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Minimum 8 characters"
              icon={<Lock size={15} />}
              error={errors.password?.message}
              hint="Use at least 8 characters with a mix of letters and numbers"
              {...register('password')}
            />

            {/* Role selection */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                I want to <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setValue('role', r.value, { shouldValidate: true })}
                    className={cn(
                      'w-full flex items-start gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200',
                      selectedRole === r.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <div className={cn(
                      'w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center transition-all',
                      selectedRole === r.value ? 'border-primary-500 bg-primary-500' : 'border-gray-300'
                    )}>
                      {selectedRole === r.value && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{r.label}</p>
                      <p className="text-xs text-gray-500">{r.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
              {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-0.5"
                {...register('terms')}
              />
              <span className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="#" className="text-primary-600 hover:underline font-medium">Terms of Service</Link>{' '}
                and{' '}
                <Link to="#" className="text-primary-600 hover:underline font-medium">Privacy Policy</Link>
              </span>
            </label>
            {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="w-full mt-2"
            >
              Create Free Account
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
