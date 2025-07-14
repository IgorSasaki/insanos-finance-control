'use client'

import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

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
            Filtros
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <fieldset className="relative">
              <Search className="absolute top-3 left-3 h-4 w-4 text-zinc-400" />
              <Input
                className="h-12 rounded-xl border-zinc-600 bg-zinc-700/50 pl-10 text-neutral-50 placeholder:text-zinc-400"
                placeholder="Buscar transações..."
              />
            </fieldset>

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
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="mensalidades"
                >
                  Mensalidades
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="eventos"
                >
                  Eventos
                </SelectItem>
                <SelectItem
                  className="text-neutral-50 focus:bg-zinc-700"
                  value="manutencao"
                >
                  Manutenção
                </SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 rounded-xl bg-zinc-600 text-neutral-50 hover:bg-zinc-700">
              Aplicar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
