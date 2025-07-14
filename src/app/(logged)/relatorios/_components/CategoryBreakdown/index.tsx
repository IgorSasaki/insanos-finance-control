'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { COLOR_MAP } from './data'

export const CategoryBreakdown: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-neutral-50">
            <Calendar className="mr-2 h-5 w-5" />
            Breakdown por Categoria
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {[
              {
                category: 'Mensalidades',
                amount: 18500,
                percentage: 55,
                color: 'green'
              },
              {
                category: 'Eventos',
                amount: 12800,
                percentage: 38,
                color: 'blue'
              },
              {
                category: 'Manutenção',
                amount: 8900,
                percentage: 46,
                color: 'red'
              },
              {
                category: 'Combustível',
                amount: 5400,
                percentage: 28,
                color: 'orange'
              },
              {
                category: 'Equipamentos',
                amount: 4900,
                percentage: 25,
                color: 'purple'
              }
            ].map((item, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between rounded-lg bg-zinc-700/30 p-3"
                initial={{ opacity: 0, x: -20 }}
                key={item.category}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <article className="flex items-center space-x-3">
                  <span
                    className={clsx(
                      'h-3 w-3 rounded-full',
                      COLOR_MAP[item.color]
                    )}
                  />
                  <p className="font-medium text-neutral-50">{item.category}</p>
                </article>

                <div className="flex items-center space-x-4">
                  <section className="h-2 w-24 rounded-full bg-zinc-600">
                    <span
                      className={`flex h-2 bg-${item.color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </section>

                  <p className="min-w-[100px] text-right font-semibold text-neutral-50">
                    R$ {item.amount.toLocaleString('pt-BR')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
