import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf, LayoutDashboard, Recycle, Wrench, Users, Building2,
  Bell, Settings, TrendingUp, DollarSign, Zap, BarChart3,
  ArrowRight, ChevronRight, Activity
} from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: Recycle, label: 'Waste Exchange', href: '/waste' },
  { icon: Wrench, label: 'Machinery', href: '/machinery' },
  { icon: Users, label: 'Labor Pool', href: '/labor' },
  { icon: Building2, label: 'Workspaces', href: '/workspace' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
]

const statsCards = [
  {
    icon: Zap,
    label: 'Active Listings',
    value: '12',
    delta: '+3 this week',
    positive: true,
    color: 'from-primary-500 to-emerald-600',
    bg: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: TrendingUp,
    label: 'Pending Matches',
    value: '8',
    delta: '5 new today',
    positive: true,
    color: 'from-secondary-500 to-blue-600',
    bg: 'bg-secondary-50',
    iconColor: 'text-secondary-600',
  },
  {
    icon: DollarSign,
    label: 'Revenue This Month',
    value: '$14,280',
    delta: '+22% vs last month',
    positive: true,
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Leaf,
    label: 'CO₂ Offset',
    value: '2.4 tons',
    delta: 'This quarter',
    positive: true,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
]

const recentMatches = [
  {
    id: '1',
    title: 'Steel Offcuts — 2.5 tons',
    type: 'Waste Exchange',
    match: 'AutoSteel Processing Ltd.',
    matchScore: 97,
    value: '$3,200',
    status: 'pending' as const,
  },
  {
    id: '2',
    title: 'CNC Lathe — Haas ST-10',
    type: 'Machinery Sharing',
    match: 'Precision Parts Co.',
    matchScore: 94,
    value: '$450/day',
    status: 'negotiating' as const,
  },
  {
    id: '3',
    title: 'Certified Welder (TIG/MIG)',
    type: 'Labor Pool',
    match: 'MetalFab Industries',
    matchScore: 91,
    value: '$85/hr',
    status: 'new' as const,
  },
]

const activities = [
  { icon: '✅', text: 'Match confirmed with AutoSteel Processing', time: '2 hours ago' },
  { icon: '🤝', text: 'New inquiry on your CNC Lathe listing', time: '4 hours ago' },
  { icon: '📄', text: 'CO₂ certificate issued for waste transaction', time: '1 day ago' },
  { icon: '💰', text: 'Payment received: $1,800 for steel offcuts', time: '2 days ago' },
  { icon: '⭐', text: 'New 5-star review from Precision Parts Co.', time: '3 days ago' },
]

const quickActions = [
  { icon: Recycle, label: 'Post Waste', href: '/waste', color: 'bg-primary-100 text-primary-700 hover:bg-primary-200' },
  { icon: Wrench, label: 'List Machinery', href: '/machinery', color: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200' },
  { icon: Users, label: 'Add Labor', href: '/labor', color: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
  { icon: Building2, label: 'List Space', href: '/workspace', color: 'bg-violet-100 text-violet-700 hover:bg-violet-200' },
]

const matchStatusMap = {
  pending: { variant: 'warning' as const, label: 'Pending Review' },
  negotiating: { variant: 'info' as const, label: 'In Negotiation' },
  new: { variant: 'success' as const, label: 'New Match' },
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-gray-100 fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Leaf size={13} className="text-white" />
            </div>
            <span className="text-base font-bold text-gray-900">
              Eco<span className="text-primary-500">Nexus</span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              to={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                active
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={16} className={active ? 'text-primary-600' : ''} />
              {label}
              {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">Jane Doe</p>
              <p className="text-xs text-gray-500 truncate">Acme Industries</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-60 flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
          <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Activity size={18} />
          </button>
          <div className="hidden sm:block">
            <h2 className="text-sm font-semibold text-gray-900">Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
              Welcome back, Jane! 👋
            </h1>
            <p className="text-gray-500 text-sm">
              Here's what's happening with your listings today.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statsCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card padding="md" className="hover:shadow-premium-lg transition-shadow duration-300">
                  <div className={`w-9 h-9 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <stat.icon size={16} className={stat.iconColor} />
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">{stat.label}</p>
                  <p className="text-2xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-primary-600 font-medium">{stat.delta}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Matches */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-gray-900">AI Matches</h2>
                <Button variant="ghost" size="sm" icon={<ArrowRight size={13} />} iconPosition="right">
                  View all
                </Button>
              </div>
              <div className="space-y-3">
                {recentMatches.map((match, i) => {
                  const status = matchStatusMap[match.status]
                  return (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Card padding="md" hover className="group cursor-pointer">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-bold text-gray-900 truncate">{match.title}</p>
                              <Badge variant={status.variant} size="sm">{status.label}</Badge>
                            </div>
                            <p className="text-xs text-gray-500">{match.type} · Matched with{' '}
                              <span className="font-medium text-gray-700">{match.match}</span>
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-bold text-gray-900">{match.value}</p>
                            <p className="text-xs text-primary-600 font-semibold">{match.matchScore}% match</p>
                          </div>
                          <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors mt-0.5" />
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-6">
                <h2 className="text-base font-bold text-gray-900 mb-3">Quick Actions</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quickActions.map(({ icon: Icon, label, href, color }) => (
                    <Link key={label} to={href}>
                      <button className={`w-full flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 ${color}`}>
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <span className="text-xs font-semibold">{label}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
                <Badge variant="info" dot>Live</Badge>
              </div>
              <Card padding="none" className="overflow-hidden">
                <div className="divide-y divide-gray-50">
                  {activities.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base mt-0.5">{a.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-700 leading-relaxed">{a.text}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100 text-center">
                  <button className="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 mx-auto">
                    View all activity <ArrowRight size={11} />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
