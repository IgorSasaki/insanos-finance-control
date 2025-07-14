'use client'

import { DollarSign, TrendingDown, TrendingUp, Wallet } from 'lucide-react'

import { StatsCards } from '@/components/structure/StatsCards'

export const StatsGridCards: React.FC = () => {
  const stats = [
    {
      title: 'Saldo Total',
      value: 'R$ 12.543,20',
      icon: Wallet,
      trend: { value: '12%', isPositive: true }
    },
    {
      title: 'Entradas do Mês',
      value: 'R$ 8.950,00',
      icon: TrendingUp,
      trend: { value: '8%', isPositive: true }
    },
    {
      title: 'Saídas do Mês',
      value: 'R$ 3.240,80',
      icon: TrendingDown,
      trend: { value: '3%', isPositive: false }
    },
    {
      title: 'Lucro Líquido',
      value: 'R$ 5.709,20',
      icon: DollarSign,
      trend: { value: '15%', isPositive: true }
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCards
          icon={stat.icon}
          index={index}
          key={stat.title}
          title={stat.title}
          trend={stat.trend}
          value={stat.value}
        />
      ))}
    </div>
  )
}
