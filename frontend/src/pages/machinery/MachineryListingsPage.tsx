import { MarketplacePage } from '../waste/WasteListingsPage'
import type { ListingCardData } from '../../components/listings/ListingCard'

const listings: ListingCardData[] = [
  {
    id: 'm1', title: 'Haas ST-10 CNC Lathe — Fully Tooled', category: 'CNC Machines',
    pillar: 'machinery', location: 'Detroit, MI', price: '$450', priceUnit: '/ day',
    specs: [{ label: 'Year', value: '2021' }, { label: 'Swing', value: '10"' }, { label: 'Avail', value: 'Mon–Fri' }],
    providerName: 'PrecisionForge Inc', providerRating: 4.9, reviewCount: 38,
    status: 'available', postedAt: '1 hour ago',
    gradient: 'from-slate-100 to-gray-200', emoji: '🔧',
  },
  {
    id: 'm2', title: '50-Ton Hydraulic Press — Industrial Grade', category: 'Presses',
    pillar: 'machinery', location: 'Cleveland, OH', price: '$280', priceUnit: '/ day',
    specs: [{ label: 'Tonnage', value: '50T' }, { label: 'Stroke', value: '24"' }, { label: 'Avail', value: 'Weekends' }],
    providerName: 'MetalWorks Co', providerRating: 4.7, reviewCount: 22,
    status: 'available', postedAt: '3 hours ago',
    gradient: 'from-blue-50 to-indigo-100', emoji: '🏗️',
  },
  {
    id: 'm3', title: 'Industrial Forklift — Toyota 8FGU30', category: 'Material Handling',
    pillar: 'machinery', location: 'Chicago, IL', price: '$120', priceUnit: '/ day',
    specs: [{ label: 'Capacity', value: '6,000 lbs' }, { label: 'Fuel', value: 'LPG' }, { label: 'Reach', value: '15 ft' }],
    providerName: 'WareLogistics LLC', providerRating: 4.8, reviewCount: 55,
    status: 'available', postedAt: '6 hours ago',
    gradient: 'from-amber-50 to-yellow-100', emoji: '🚜',
  },
  {
    id: 'm4', title: 'Laser Cutter — Trumpf TruLaser 3030', category: 'Laser Equipment',
    pillar: 'machinery', location: 'Pittsburgh, PA', price: '$380', priceUnit: '/ day',
    specs: [{ label: 'Power', value: '4kW' }, { label: 'Sheet', value: '5x10 ft' }, { label: 'Material', value: 'Metal/Acryl' }],
    providerName: 'SheetMetal Pros', providerRating: 5.0, reviewCount: 29,
    status: 'limited', postedAt: '1 day ago',
    gradient: 'from-red-50 to-orange-100', emoji: '⚡',
  },
  {
    id: 'm5', title: 'Industrial Mixer — Stainless 500L', category: 'Mixing Equipment',
    pillar: 'machinery', location: 'Houston, TX', price: '$160', priceUnit: '/ day',
    specs: [{ label: 'Volume', value: '500L' }, { label: 'RPM', value: '0-120' }, { label: 'Material', value: 'SS316' }],
    providerName: 'ChemPlant Solutions', providerRating: 4.6, reviewCount: 17,
    status: 'available', postedAt: '2 days ago',
    gradient: 'from-teal-50 to-emerald-100', emoji: '🧪',
  },
  {
    id: 'm6', title: 'Overhead Crane — 10-Ton Bridge Crane', category: 'Lifting Equipment',
    pillar: 'machinery', location: 'Milwaukee, WI', price: '$520', priceUnit: '/ day',
    specs: [{ label: 'Capacity', value: '10 tons' }, { label: 'Span', value: '40 ft' }, { label: 'Height', value: '20 ft' }],
    providerName: 'HeavyLift Industries', providerRating: 4.8, reviewCount: 41,
    status: 'available', postedAt: '3 days ago',
    gradient: 'from-purple-50 to-violet-100', emoji: '🏗️',
  },
]

export default function MachineryListingsPage() {
  return (
    <MarketplacePage
      pillar="machinery"
      title="Machinery Sharing"
      subtitle="Access heavy equipment and industrial machinery on-demand — daily or weekly. No capital expenditure required."
      emoji="🏗️"
      listingCount={189}
      listings={listings}
      categories={['All Categories', 'CNC Machines', 'Presses', 'Material Handling', 'Laser Equipment', 'Mixing Equipment', 'Lifting Equipment', 'Conveyors', 'Packaging']}
      filterLabels={[
        { label: 'Rental Period', options: ['Daily', 'Weekly', 'Monthly', 'Long-term'] },
        { label: 'Category', options: ['CNC & Machining', 'Presses & Forming', 'Material Handling', 'Lifting & Cranes'] },
        { label: 'Availability', options: ['Available Now', 'This Week', 'This Month', 'By Appointment'] },
      ]}
      ctaLabel="List Machinery"
    />
  )
}
