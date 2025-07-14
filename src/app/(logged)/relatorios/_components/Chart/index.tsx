'use client'

import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockChartData = [
  { month: 'Jan', income: 4500, expense: 2800 },
  { month: 'Fev', income: 5200, expense: 3100 },
  { month: 'Mar', income: 4800, expense: 2900 },
  { month: 'Abr', income: 6100, expense: 3400 },
  { month: 'Mai', income: 5800, expense: 3200 },
  { month: 'Jun', income: 7200, expense: 3800 }
]

export const Chart: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-neutral-50">
            <BarChart3 className="mr-2 h-5 w-5" />
            Fluxo de Caixa - Últimos 6 Meses
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex h-80 items-end justify-between space-x-2 p-4">
            {mockChartData.map(data => (
              <div
                className="flex flex-1 flex-col items-center space-y-2"
                key={data.month}
              >
                <div className="flex w-full flex-col items-center space-y-1">
                  <div
                    className="w-full rounded-t border border-green-500/50 bg-green-500/30 transition-all duration-500 hover:bg-green-500/50"
                    style={{ height: `${data.income / 100}px` }}
                  />
                  <div
                    className="w-full rounded-b border border-red-500/50 bg-red-500/30 transition-all duration-500 hover:bg-red-500/50"
                    style={{ height: `${data.expense / 100}px` }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-400">
                  {data.month}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center space-x-6">
            <section className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded border border-green-500 bg-green-500/50" />
              <h3 className="text-sm text-zinc-400">Entradas</h3>
            </section>

            <section className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded border border-red-500 bg-red-500/50" />
              <h3 className="text-sm text-zinc-400">Saídas</h3>
            </section>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
