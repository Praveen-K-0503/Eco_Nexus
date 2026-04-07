import { motion } from 'framer-motion'
import { cn } from '../../utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  glass?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className,
  hover = false,
  glow = false,
  glass = false,
  padding = 'md',
  onClick,
}: CardProps) {
  const base = cn(
    'rounded-2xl border transition-all duration-300',
    glass
      ? 'bg-white/10 backdrop-blur-md border-white/20 text-white'
      : 'bg-white border-gray-100',
    !glass && hover && 'hover:shadow-premium-lg hover:-translate-y-1',
    !glass && !hover && 'shadow-premium',
    glow && 'hover:shadow-glow-green',
    paddingStyles[padding],
    onClick && 'cursor-pointer',
    className
  )

  if (hover || onClick) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: hover ? -4 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={base}>{children}</div>
}
