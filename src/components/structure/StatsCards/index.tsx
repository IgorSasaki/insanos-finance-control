'use client'

import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { StatsCardProps } from './types'

export const StatsCards: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  index
}) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-800/70">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-zinc-400" />
        </CardHeader>

        <CardContent>
          <div className="mb-1 text-2xl font-bold text-neutral-50">{value}</div>
          {trend && (
            <p
              className={`text-xs ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}
            >
              {trend.isPositive ? '+' : ''}
              {trend.value} desde o último mês
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
