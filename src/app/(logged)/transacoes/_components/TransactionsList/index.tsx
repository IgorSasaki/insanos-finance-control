/* eslint-disable prettier/prettier */
'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, List } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MOCK_TRANSACTIONS = [
  {
    id: '1',
    description: 'Mensalidade João Silva',
    amount: 150.0,
    type: 'income' as const,
    date: '2025-01-15',
    category: 'Mensalidades'
  },
  {
    id: '2',
    description: 'Manutenção Harley Davidson',
    amount: 850.0,
    type: 'expense' as const,
    date: '2025-01-14',
    category: 'Manutenção'
  },
  {
    id: '3',
    description: 'Evento Beneficente',
    amount: 2500.0,
    type: 'income' as const,
    date: '2025-01-13',
    category: 'Eventos'
  },
  {
    id: '4',
    description: 'Combustível para viagem',
    amount: 380.0,
    type: 'expense' as const,
    date: '2025-01-12',
    category: 'Combustível'
  },
  {
    id: '5',
    description: 'Mensalidade Maria Santos',
    amount: 150.0,
    type: 'income' as const,
    date: '2025-01-11',
    category: 'Mensalidades'
  },
  {
    id: '6',
    description: 'Equipamentos de segurança',
    amount: 650.0,
    type: 'expense' as const,
    date: '2025-01-10',
    category: 'Equipamentos'
  }
]

export const TransactionsList: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-neutral-50">
            <List className="mr-2 h-5 w-5" />
            Transações Recentes
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {MOCK_TRANSACTIONS.map((transaction, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex cursor-pointer items-center justify-between rounded-xl bg-zinc-700/30 p-4 transition-all duration-200 hover:bg-zinc-700/50"
                initial={{ opacity: 0, x: -20 }}
                key={transaction.id}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <section className="flex items-center space-x-4">
                  <span
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
                  </span>

                  <article>
                    <h4 className="font-medium text-neutral-50">
                      {transaction.description}
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {transaction.category} •{' '}
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </p>
                  </article>
                </section>

                <section className="text-right">
                  <span
                    className={`text-lg font-semibold ${
                      transaction.type === 'income'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'}R${' '}
                    {transaction.amount.toFixed(2)}
                  </span>
                </section>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
