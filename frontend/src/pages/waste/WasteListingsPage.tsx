import { useState } from 'react'
import { Search, SlidersHorizontal, Plus, ChevronDown, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ListingCard, { ListingCardData } from '../../components/listings/ListingCard'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { cn } from '../../utils'

const wasteListings: ListingCardData[] = [
  {
    id: '1', title: 'High-Grade Steel Offcuts — 2.5 Metric Tons', category: 'Ferrous Metals',
    pillar: 'waste', location: 'Detroit, MI', price: '$320', priceUnit: '/ ton',
    specs: [{ label: 'Qty', value: '2.5 tons' }, { label: 'Purity', value: '98%' }, { label: 'Grade', value: 'SS304' }],
    providerName: 'AutoSteel Corp', providerRating: 4.9, reviewCount: 47,
    status: 'available', postedAt: '2 hours ago',
    gradient: 'from-gray-100 to-slate-200', emoji: '🔩',
  },
  {
    id: '2', title: 'HDPE Plastic Scrap — 5 Tons, Food-Grade', category: 'Plastics',
    pillar: 'waste', location: 'Houston, TX', price: '$180', priceUnit: '/ ton',
    specs: [{ label: 'Qty', value: '5 tons' }, { label: 'Type', value: 'HDPE' }, { label: 'Grade', value: 'Food' }],
    providerName: 'PackagingCo', providerRating: 4.7, reviewCount: 23,
    status: 'available', postedAt: '5 hours ago',
    gradient: 'from-blue-50 to-cyan-100', emoji: '♻️',
  },
  {
    id: '3', title: 'Aluminum Shavings — CNC Mill Waste, 800kg', category: 'Non-Ferrous Metals',
    pillar: 'waste', location: 'Chicago, IL', price: '$1,200', priceUnit: '/ lot',
    specs: [{ label: 'Qty', value: '800 kg' }, { label: 'Alloy', value: '6061' }, { label: 'Form', value: 'Shavings' }],
    providerName: 'Precision Machining Ltd', providerRating: 4.8, reviewCount: 31,
    status: 'available', postedAt: '1 day ago',
    gradient: 'from-amber-50 to-yellow-100', emoji: '🔧',
  },
  {
    id: '4', title: 'Industrial Solvent Blend — 200L Drums', category: 'Chemicals',
    pillar: 'waste', location: 'Newark, NJ', price: '$45', priceUnit: '/ drum',
    specs: [{ label: 'Volume', value: '200L' }, { label: 'Qty', value: '12 drums' }, { label: 'Flash pt', value: '38°C' }],
    providerName: 'ChemProcess Inc', providerRating: 4.6, reviewCount: 18,
    status: 'limited', postedAt: '2 days ago',
    gradient: 'from-purple-50 to-violet-100', emoji: '🧪',
  },
  {
    id: '5', title: 'Cardboard & Paper Offcuts — 3 Tons/Week', category: 'Paper & Cardboard',
    pillar: 'waste', location: 'Atlanta, GA', price: '$40', priceUnit: '/ ton',
    specs: [{ label: 'Volume', value: '3T/wk' }, { label: 'Type', value: 'Mixed' }, { label: 'Moisture', value: '<12%' }],
    providerName: 'PrintHouse Solutions', providerRating: 4.5, reviewCount: 12,
    status: 'available', postedAt: '3 days ago',
    gradient: 'from-amber-50 to-orange-100', emoji: '📦',
  },
  {
    id: '6', title: 'Copper Wire Offcuts — Electronics Manufacturing', category: 'Non-Ferrous Metals',
    pillar: 'waste', location: 'San Jose, CA', price: '$4.20', priceUnit: '/ kg',
    specs: [{ label: 'Purity', value: '99.2%' }, { label: 'Qty', value: '150 kg' }, { label: 'AWG', value: '12-24' }],
    providerName: 'TechManufacturing Co', providerRating: 5.0, reviewCount: 64,
    status: 'available', postedAt: '4 days ago',
    gradient: 'from-orange-50 to-red-100', emoji: '⚡',
  },
]

const categories = ['All Categories', 'Ferrous Metals', 'Non-Ferrous Metals', 'Plastics', 'Chemicals', 'Paper & Cardboard', 'Textiles', 'Wood', 'Glass']
const sortOptions = ['Most Recent', 'Price: Low to High', 'Price: High to Low', 'Best Match', 'Most Reviewed']

interface MarketplacePageProps {
  pillar: 'waste' | 'machinery' | 'labor' | 'workspace'
  title: string
  subtitle: string
  emoji: string
  listingCount: number
  listings: ListingCardData[]
  categories: string[]
  filterLabels: { label: string; options: string[] }[]
  ctaLabel: string
}

export function MarketplacePage({
  title, subtitle, emoji, listingCount, listings, categories: cats,
  filterLabels, ctaLabel,
}: MarketplacePageProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = listings.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === 'All Categories' || l.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero bar */}
      <div className="bg-gradient-to-r from-primary-700 to-emerald-800 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{emoji}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-200 mb-0.5">Marketplace</p>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h1>
                </div>
              </div>
              <p className="text-primary-100/80 text-sm max-w-xl">{subtitle}</p>
            </div>
            <Button variant="primary" size="md" icon={<Plus size={16} />} className="bg-white text-primary-700 from-white to-white hover:from-gray-50 hover:to-gray-50 shrink-0">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <Input
              placeholder={`Search ${title.toLowerCase()}...`}
              icon={<Search size={15} />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
              >
                {sortOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl bg-white hover:border-gray-300 transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={cn(
            'w-56 shrink-0 space-y-5',
            filtersOpen ? 'block' : 'hidden lg:block'
          )}>
            {/* Categories */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Category</h3>
              <div className="space-y-1">
                {cats.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={cn(
                      'w-full text-left text-sm px-2.5 py-1.5 rounded-lg transition-all',
                      selectedCategory === c
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra filters */}
            {filterLabels.map((f) => (
              <div key={f.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">{f.label}</h3>
                <div className="space-y-1">
                  {f.options.map((o) => (
                    <label key={o} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 py-1">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          {/* Listing grid */}
          <div className="flex-1">
            {/* Results bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{filtered.length} listings</span>
                {selectedCategory !== 'All Categories' && (
                  <Badge variant="info" size="sm">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('All Categories')} className="ml-1 hover:opacity-70">
                      <X size={9} />
                    </button>
                  </Badge>
                )}
              </div>
              <span className="text-xs text-gray-500">{listingCount} total in database</span>
            </div>

            {filtered.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.map((listing, i) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <ListingCard listing={listing} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <Search size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">No listings match your search</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function WasteListingsPage() {
  return (
    <MarketplacePage
      pillar="waste"
      title="Waste Exchange"
      subtitle="Turn industrial by-products into revenue. Find verified buyers for your waste streams or source raw materials at below-market rates."
      emoji="♻️"
      listingCount={247}
      listings={wasteListings}
      categories={categories}
      filterLabels={[
        { label: 'Hazard Level', options: ['Non-hazardous', 'Low risk', 'Medium risk', 'High risk (licensed)'] },
        { label: 'Quantity', options: ['< 100 kg', '100 kg – 1 ton', '1 – 10 tons', '10+ tons'] },
        { label: 'Location', options: ['Within 50 mi', 'Within 200 mi', 'National', 'International'] },
      ]}
      ctaLabel="Post Waste Listing"
    />
  )
}
