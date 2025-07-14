'use client'

import { motion } from 'framer-motion'

export const Header: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 md:mt-0"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-2 text-3xl font-bold text-neutral-50">Relatórios</h1>

      <p className="text-zinc-400">
        Análise detalhada do fluxo de caixa do Insanos MC
      </p>
    </motion.div>
  )
}
