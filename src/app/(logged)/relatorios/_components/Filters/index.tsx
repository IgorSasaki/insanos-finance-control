'use client'

import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { CATEGORIES } from '@/constants/categories'

export const Filters: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-neutral-50">
            <Filter className="mr-2 h-5 w-5" />
            Filtros do Relatório
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Select>
              <SelectTrigger className="h-12 rounded-xl border-zinc-600 bg-zinc-700/50 text-neutral-50">
                <SelectValue placeholder="Período" />
              </SelectTrigger>

              <SelectContent className="border-zinc-700 bg-zinc-800">
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="7days"
                >
                  Últimos 7 dias
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="30days"
                >
                  Últimos 30 dias
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="3months"
                >
                  Últimos 3 meses
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="year"
                >
                  Este ano
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 rounded-xl border-zinc-600 bg-zinc-700/50 text-neutral-50">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent className="border-zinc-700 bg-zinc-800">
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="all"
                >
                  Todos
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="income"
                >
                  Entradas
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="expense"
                >
                  Saídas
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 rounded-xl border-zinc-600 bg-zinc-700/50 text-neutral-50">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="border-zinc-700 bg-zinc-800">
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="all"
                >
                  Todas
                </SelectItem>

                {CATEGORIES.expense.map(category => (
                  <SelectItem
                    className="text-neutral-50 focus:bg-zinc-700"
                    key={category}
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}

                {CATEGORIES.income.map(category => (
                  <SelectItem
                    className="text-neutral-50 focus:bg-zinc-700"
                    key={category}
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
