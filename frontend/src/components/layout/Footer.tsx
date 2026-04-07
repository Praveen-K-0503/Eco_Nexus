import { Link } from 'react-router-dom'
import { Leaf, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Waste Exchange', href: '/waste' },
    { label: 'Machinery Sharing', href: '/machinery' },
    { label: 'Labor Pooling', href: '/labor' },
    { label: 'Workspace Sharing', href: '/workspace' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
  Company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@econexus.io', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Green gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-md">
                <Leaf className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Eco<span className="text-primary-500">Nexus</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              AI-powered B2B circular economy marketplace. Transforming industrial waste and idle assets into sustainable value.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} EcoNexus, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span>Built with</span>
            <Leaf size={11} className="text-primary-500 mx-0.5" />
            <span>for a sustainable future</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
