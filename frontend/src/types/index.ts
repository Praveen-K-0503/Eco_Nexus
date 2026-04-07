export interface User {
  id: string
  email: string
  name: string
  company: string
  role: 'buyer' | 'seller' | 'admin'
  avatar?: string
  createdAt: string
}

export interface WasteItem {
  id: string
  title: string
  description: string
  category: string
  quantity: number
  unit: string
  price: number
  location: string
  images: string[]
  sellerId: string
  status: 'available' | 'reserved' | 'sold'
  createdAt: string
}

export interface MachineryItem {
  id: string
  title: string
  description: string
  category: string
  dailyRate: number
  weeklyRate: number
  location: string
  images: string[]
  ownerId: string
  availability: boolean
  specifications: Record<string, string>
  createdAt: string
}

export interface LaborListing {
  id: string
  title: string
  description: string
  skillCategory: string
  hourlyRate: number
  availability: string
  location: string
  providerId: string
  skills: string[]
  createdAt: string
}

export interface WorkspaceListing {
  id: string
  title: string
  description: string
  type: string
  area: number
  dailyRate: number
  monthlyRate: number
  location: string
  images: string[]
  amenities: string[]
  ownerId: string
  availability: boolean
  createdAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}
