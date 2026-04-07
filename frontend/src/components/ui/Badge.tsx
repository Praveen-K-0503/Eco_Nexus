import { cn } from '../../utils'

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'gray' | 'primary'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
  size?: 'sm' | 'md'
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-primary-50 text-primary-700 ring-primary-600/20',
  warning: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  error: 'bg-red-50 text-red-700 ring-red-600/20',
  info: 'bg-secondary-50 text-secondary-700 ring-secondary-600/20',
  gray: 'bg-gray-100 text-gray-600 ring-gray-500/20',
  primary: 'bg-primary-500 text-white ring-primary-600/30',
}

const dotColors: Record<BadgeVariant, string> = {
  success: 'bg-primary-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  info: 'bg-secondary-500',
  gray: 'bg-gray-400',
  primary: 'bg-white',
}

export default function Badge({
  variant = 'gray',
  children,
  className,
  dot = false,
  size = 'md',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium ring-1 ring-inset',
        size === 'sm' ? 'text-xs px-2 py-0.5 rounded-md' : 'text-xs px-2.5 py-1 rounded-full',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant])}
        />
      )}
      {children}
    </span>
  )
}
