import { LucideIcon } from 'lucide-react'

export interface StatsCardProps {
  icon: LucideIcon
  index: number
  title: string
  trend?: {
    value: string
    isPositive: boolean
  }
  value: string
}
