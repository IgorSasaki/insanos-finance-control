/* eslint-disable prettier/prettier */
'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Calendar } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Transaction } from './types'

const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Mensalidade Membro',
    amount: 150.0,
    type: 'income',
    date: '2025-01-15',
    category: 'Mensalidades'
  },
  {
    id: '2',
    description: 'Manutenção Motos',
    amount: 450.0,
    type: 'expense',
    date: '2025-01-14',
    category: 'Manutenção'
  },
  {
    id: '3',
    description: 'Evento Beneficente',
    amount: 1200.0,
    type: 'income',
    date: '2025-01-13',
    category: 'Eventos'
  },
  {
    id: '4',
    description: 'Combustível',
    amount: 280.0,
    type: 'expense',
    date: '2025-01-12',
    category: 'Combustível'
  }
]

export const RecentTransactions: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-neutral-50">
            <Calendar className="mr-2 h-5 w-5" />
            Transações Recentes
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {mockTransactions.map((transaction, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between rounded-lg bg-zinc-700/30 p-3 transition-all duration-200 hover:bg-zinc-700/50"
                initial={{ opacity: 0, x: -20 }}
                key={transaction.id}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`rounded-full p-2 ${
                      transaction.type === 'income'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-neutral-50">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {transaction.category} •{' '}
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div
                  className={`font-semibold ${
                    transaction.type === 'income'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'}R${' '}
                  {transaction.amount.toFixed(2)}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
