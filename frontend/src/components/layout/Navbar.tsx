import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, ChevronDown, Recycle, Wrench, Users, Building2 } from 'lucide-react'
import Button from '../ui/Button'
import { cn } from '../../utils'

const marketplaceItems = [
  { icon: Recycle, label: 'Waste Exchange', href: '/waste', desc: 'Turn industrial waste into revenue' },
  { icon: Wrench, label: 'Machinery Sharing', href: '/machinery', desc: 'Monetize idle equipment' },
  { icon: Users, label: 'Labor Pooling', href: '/labor', desc: 'Share specialized workforce' },
  { icon: Building2, label: 'Workspace Sharing', href: '/workspace', desc: 'Rent unused industrial space' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [marketplaceOpen, setMarketplaceOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMarketplaceOpen(false)
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-glow-green transition-all duration-300">
              <Leaf className="text-white" size={16} />
            </div>
            <span className={cn(
              'text-xl font-bold tracking-tight transition-colors duration-300',
              scrolled ? 'text-gray-900' : 'text-white'
            )}>
              Eco<span className="text-primary-500">Nexus</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Marketplace dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMarketplaceOpen(true)}
              onMouseLeave={() => setMarketplaceOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                Marketplace
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-200', marketplaceOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {marketplaceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-premium-lg border border-gray-100 p-2"
                  >
                    {marketplaceItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 group transition-all duration-150"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition-colors">
                          <item.icon size={15} className="text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  !scrolled && 'border-white/70 text-white hover:bg-white/10'
                )}
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-1 pb-1">
                <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Marketplace
                </p>
                {marketplaceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    <item.icon size={15} className="text-primary-500" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-3 flex flex-col gap-2 border-t border-gray-100">
                <Link to="/login"><Button variant="outline" size="md" className="w-full">Log in</Button></Link>
                <Link to="/register"><Button variant="primary" size="md" className="w-full">Get Started</Button></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
