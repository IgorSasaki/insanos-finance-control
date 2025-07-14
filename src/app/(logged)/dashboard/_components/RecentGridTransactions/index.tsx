'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { RecentTransactions } from '@/components/structure/RecentTransactions'

export const RecentGridTransactions: React.FC = () => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <RecentTransactions />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="mb-4 text-lg font-semibold text-neutral-50">
          Ações Rápidas
        </h3>

        <section className="space-y-3">
          <button
            className="w-full cursor-pointer rounded-xl border border-green-600/50 bg-green-600/20 p-4 font-medium text-green-400 transition-all duration-200 hover:bg-green-600/30"
            onClick={() => router.push('/transacoes/novo')}
          >
            + Nova Entrada
          </button>
          <button
            className="w-full cursor-pointer rounded-xl border border-red-600/50 bg-red-600/20 p-4 font-medium text-red-400 transition-all duration-200 hover:bg-red-600/30"
            onClick={() => router.push('/transacoes/novo')}
          >
            - Nova Saída
          </button>
          <button
            className="w-full cursor-pointer rounded-xl border border-blue-600/50 bg-blue-600/20 p-4 font-medium text-blue-400 transition-all duration-200 hover:bg-blue-600/30"
            onClick={() => router.push('/relatorios')}
          >
            📊 Ver Relatório
          </button>
        </section>
      </motion.div>
    </div>
  )
}
