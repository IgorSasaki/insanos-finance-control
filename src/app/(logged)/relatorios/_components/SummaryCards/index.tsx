'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingDown, TrendingUp } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const SummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">
              Total de Entradas
            </CardTitle>

            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>

          <CardContent>
            <h2 className="mb-1 text-2xl font-bold text-green-400">
              R$ 33.600,00
            </h2>
            <p className="text-xs text-green-400">
              +18% desde o último período
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">
              Total de Saídas
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-400" />
          </CardHeader>

          <CardContent>
            <h2 className="mb-1 text-2xl font-bold text-red-400">
              R$ 19.200,00
            </h2>

            <p className="text-xs text-red-400">+5% desde o último período</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">
              Saldo Líquido
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-400" />
          </CardHeader>

          <CardContent>
            <div className="mb-1 text-2xl font-bold text-blue-400">
              R$ 14.400,00
            </div>
            <p className="text-xs text-blue-400">+25% desde o último período</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
