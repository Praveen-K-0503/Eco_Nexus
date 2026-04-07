import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight, Clock } from 'lucide-react'
import Badge from '../ui/Badge'
import { cn } from '../../utils'

export type ListingCategory = 'waste' | 'machinery' | 'labor' | 'workspace'

export interface ListingCardData {
  id: string
  title: string
  category: string
  pillar: ListingCategory
  location: string
  price: string
  priceUnit: string
  specs: { label: string; value: string }[]
  providerName: string
  providerRating: number
  reviewCount: number
  status: 'available' | 'reserved' | 'sold' | 'limited'
  postedAt: string
  gradient: string
  emoji: string
}

const statusVariant: Record<ListingCardData['status'], 'success' | 'warning' | 'error' | 'info'> = {
  available: 'success',
  reserved: 'warning',
  sold: 'error',
  limited: 'info',
}

const statusLabel: Record<ListingCardData['status'], string> = {
  available: 'Available',
  reserved: 'Reserved',
  sold: 'Sold',
  limited: 'Limited Stock',
}

interface ListingCardProps {
  listing: ListingCardData
  onClick?: (id: string) => void
}

export default function ListingCard({ listing, onClick }: ListingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-premium overflow-hidden hover:shadow-premium-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick?.(listing.id)}
    >
      {/* Image / gradient placeholder */}
      <div className={cn('h-44 bg-gradient-to-br flex items-center justify-center relative overflow-hidden', listing.gradient)}>
        <span className="text-5xl">{listing.emoji}</span>
        {/* Status badge overlay */}
        <div className="absolute top-3 right-3">
          <Badge variant={statusVariant[listing.status]} dot size="sm">
            {statusLabel[listing.status]}
          </Badge>
        </div>
        {/* Category chip */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/80 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full">
            {listing.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + location */}
        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1.5 group-hover:text-primary-600 transition-colors">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={11} />
            {listing.location}
          </div>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.specs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-1 bg-gray-50 rounded-lg px-2.5 py-1">
              <span className="text-xs text-gray-500">{spec.label}:</span>
              <span className="text-xs font-semibold text-gray-700">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-xl font-extrabold text-gray-900">{listing.price}</span>
            <span className="text-xs text-gray-500 ml-1.5">{listing.priceUnit}</span>
          </div>
        </div>

        {/* Provider + rating */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
              {listing.providerName[0]}
            </div>
            <span className="text-xs font-medium text-gray-700 line-clamp-1 max-w-[100px]">
              {listing.providerName}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-gray-700">{listing.providerRating}</span>
            <span className="text-xs text-gray-400">({listing.reviewCount})</span>
          </div>
        </div>

        {/* Posted + CTA */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Clock size={11} />
            {listing.postedAt}
          </div>
          <button className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors group/btn">
            View Details
            <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
