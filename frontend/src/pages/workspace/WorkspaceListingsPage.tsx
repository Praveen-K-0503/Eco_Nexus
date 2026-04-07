import { MarketplacePage } from '../waste/WasteListingsPage'
import type { ListingCardData } from '../../components/listings/ListingCard'

const listings: ListingCardData[] = [
  {
    id: 'w1', title: 'Industrial Cleanroom — ISO Class 7, 2,000 sq ft', category: 'Cleanrooms',
    pillar: 'workspace', location: 'San Jose, CA', price: '$4,500', priceUnit: '/ month',
    specs: [{ label: 'Area', value: '2,000 sqft' }, { label: 'Class', value: 'ISO 7' }, { label: 'HVAC', value: 'Included' }],
    providerName: 'TechPark Facilities', providerRating: 4.9, reviewCount: 28,
    status: 'available', postedAt: '4 hours ago',
    gradient: 'from-blue-50 to-sky-100', emoji: '🏭',
  },
  {
    id: 'w2', title: 'Warehouse Space — 15,000 sq ft with Loading Dock', category: 'Warehouses',
    pillar: 'workspace', location: 'Chicago, IL', price: '$8,200', priceUnit: '/ month',
    specs: [{ label: 'Area', value: '15,000 sqft' }, { label: 'Clearance', value: '24 ft' }, { label: 'Docks', value: '4' }],
    providerName: 'Midwest Industrial Parks', providerRating: 4.7, reviewCount: 45,
    status: 'available', postedAt: '1 day ago',
    gradient: 'from-amber-50 to-orange-100', emoji: '🏗️',
  },
  {
    id: 'w3', title: 'Food-Grade Processing Facility — HACCP Certified', category: 'Food Processing',
    pillar: 'workspace', location: 'Fresno, CA', price: '$6,800', priceUnit: '/ month',
    specs: [{ label: 'Area', value: '5,000 sqft' }, { label: 'Cert', value: 'HACCP' }, { label: 'Cold', value: 'Walk-in incl.' }],
    providerName: 'AgroFacilities Co', providerRating: 4.8, reviewCount: 19,
    status: 'available', postedAt: '2 days ago',
    gradient: 'from-green-50 to-emerald-100', emoji: '🥦',
  },
  {
    id: 'w4', title: 'Chemical Lab Space — Fume Hoods & Safety Systems', category: 'Laboratories',
    pillar: 'workspace', location: 'Houston, TX', price: '$3,200', priceUnit: '/ month',
    specs: [{ label: 'Area', value: '800 sqft' }, { label: 'Fume Hoods', value: '4' }, { label: 'Safety', value: 'Full system' }],
    providerName: 'ResearchPlex Houston', providerRating: 5.0, reviewCount: 23,
    status: 'limited', postedAt: '3 days ago',
    gradient: 'from-purple-50 to-violet-100', emoji: '🔬',
  },
  {
    id: 'w5', title: 'Auto Body Shop — 8 Bays, Spray Booths Included', category: 'Auto Facilities',
    pillar: 'workspace', location: 'Detroit, MI', price: '$5,600', priceUnit: '/ month',
    specs: [{ label: 'Bays', value: '8' }, { label: 'Spray', value: '2 booths' }, { label: 'Lift', value: '4 lifts incl.' }],
    providerName: 'MotorCity Facilities', providerRating: 4.6, reviewCount: 31,
    status: 'available', postedAt: '4 days ago',
    gradient: 'from-red-50 to-orange-100', emoji: '🚗',
  },
  {
    id: 'w6', title: 'Metal Fabrication Shop — CNC Bay + Welding Area', category: 'Fabrication Shops',
    pillar: 'workspace', location: 'Pittsburgh, PA', price: '$4,100', priceUnit: '/ month',
    specs: [{ label: 'Area', value: '3,500 sqft' }, { label: 'Cranes', value: '5-ton' }, { label: '3-phase', value: 'Available' }],
    providerName: 'Steel City Spaces', providerRating: 4.8, reviewCount: 37,
    status: 'available', postedAt: '5 days ago',
    gradient: 'from-slate-50 to-gray-100', emoji: '⚙️',
  },
]

export default function WorkspaceListingsPage() {
  return (
    <MarketplacePage
      pillar="workspace"
      title="Workspace Sharing"
      subtitle="Rent certified industrial facilities — cleanrooms, warehouses, labs, and fabrication shops — without the long-term lease commitment."
      emoji="🏭"
      listingCount={320}
      listings={listings}
      categories={['All Categories', 'Cleanrooms', 'Warehouses', 'Food Processing', 'Laboratories', 'Auto Facilities', 'Fabrication Shops', 'Cold Storage', 'Office/Industrial']}
      filterLabels={[
        { label: 'Lease Term', options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annual'] },
        { label: 'Certifications', options: ['ISO Certified', 'HACCP', 'FDA Registered', 'OSHA Compliant'] },
        { label: 'Size', options: ['< 1,000 sqft', '1K–5K sqft', '5K–20K sqft', '20K+ sqft'] },
      ]}
      ctaLabel="List Your Space"
    />
  )
}
