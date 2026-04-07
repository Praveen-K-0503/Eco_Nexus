import { MarketplacePage } from '../waste/WasteListingsPage'
import type { ListingCardData } from '../../components/listings/ListingCard'

const listings: ListingCardData[] = [
  {
    id: 'l1', title: 'Certified TIG/MIG Welder — 8 Years Experience', category: 'Welding',
    pillar: 'labor', location: 'Detroit, MI', price: '$85', priceUnit: '/ hour',
    specs: [{ label: 'Cert', value: 'AWS D1.1' }, { label: 'Avail', value: 'Flexible' }, { label: 'Exp', value: '8 yrs' }],
    providerName: 'MetalSkills Agency', providerRating: 4.9, reviewCount: 76,
    status: 'available', postedAt: '30 mins ago',
    gradient: 'from-orange-100 to-red-100', emoji: '👷',
  },
  {
    id: 'l2', title: 'Industrial Process Chemist — Polymer Specialist', category: 'Chemical Engineering',
    pillar: 'labor', location: 'Houston, TX', price: '$145', priceUnit: '/ hour',
    specs: [{ label: 'PhD', value: 'Chemistry' }, { label: 'Spec', value: 'Polymers' }, { label: 'Avail', value: 'Part-time' }],
    providerName: 'ChemExpert Staffing', providerRating: 5.0, reviewCount: 34,
    status: 'available', postedAt: '2 hours ago',
    gradient: 'from-blue-50 to-sky-100', emoji: '🔬',
  },
  {
    id: 'l3', title: 'CNC Machinist — Haas & Mazak Certified', category: 'CNC Operation',
    pillar: 'labor', location: 'Cleveland, OH', price: '$72', priceUnit: '/ hour',
    specs: [{ label: 'Machines', value: 'Haas/Mazak' }, { label: 'Exp', value: '6 yrs' }, { label: 'Shifts', value: 'Day/Eve' }],
    providerName: 'PrecisionOps Group', providerRating: 4.8, reviewCount: 52,
    status: 'available', postedAt: '5 hours ago',
    gradient: 'from-slate-50 to-gray-100', emoji: '⚙️',
  },
  {
    id: 'l4', title: 'Warehouse Operations Team — 10 Workers', category: 'Logistics',
    pillar: 'labor', location: 'Chicago, IL', price: '$320', priceUnit: '/ day/team',
    specs: [{ label: 'Team', value: '10 workers' }, { label: 'Cert', value: 'OSHA 10' }, { label: 'Avail', value: 'Mon–Sat' }],
    providerName: 'LogiForce Staffing', providerRating: 4.7, reviewCount: 88,
    status: 'available', postedAt: '1 day ago',
    gradient: 'from-amber-50 to-yellow-100', emoji: '📦',
  },
  {
    id: 'l5', title: 'Electrical Engineer — Industrial Automation', category: 'Electrical Engineering',
    pillar: 'labor', location: 'San Jose, CA', price: '$165', priceUnit: '/ hour',
    specs: [{ label: 'PE Lic', value: 'CA' }, { label: 'Spec', value: 'PLC/SCADA' }, { label: 'Avail', value: 'Contract' }],
    providerName: 'AutomationTech Pro', providerRating: 4.9, reviewCount: 41,
    status: 'limited', postedAt: '2 days ago',
    gradient: 'from-yellow-50 to-amber-100', emoji: '⚡',
  },
  {
    id: 'l6', title: 'Quality Control Inspector — ISO 9001 Auditor', category: 'Quality Assurance',
    pillar: 'labor', location: 'Nashville, TN', price: '$95', priceUnit: '/ hour',
    specs: [{ label: 'Cert', value: 'ISO 9001' }, { label: 'Exp', value: '10 yrs' }, { label: 'Industries', value: 'Mfg/Auto' }],
    providerName: 'QualityFirst Partners', providerRating: 4.8, reviewCount: 29,
    status: 'available', postedAt: '3 days ago',
    gradient: 'from-green-50 to-emerald-100', emoji: '✅',
  },
]

export default function LaborListingsPage() {
  return (
    <MarketplacePage
      pillar="labor"
      title="Labor Pooling"
      subtitle="Access certified industrial workers on-demand. Share specialized talent across businesses to optimize capacity and reduce idle workforce costs."
      emoji="👷"
      listingCount={1400}
      listings={listings}
      categories={['All Categories', 'Welding', 'Chemical Engineering', 'CNC Operation', 'Logistics', 'Electrical Engineering', 'Quality Assurance', 'Maintenance', 'Safety']}
      filterLabels={[
        { label: 'Engagement Type', options: ['Hourly', 'Daily', 'Weekly contract', 'Long-term placement'] },
        { label: 'Certification', options: ['OSHA 10/30', 'AWS Certified', 'PE Licensed', 'ISO Auditor'] },
        { label: 'Availability', options: ['Immediate', 'Within 1 week', 'Within 1 month'] },
      ]}
      ctaLabel="Post Labor Need"
    />
  )
}
