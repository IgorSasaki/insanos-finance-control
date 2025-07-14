'use client'

import { motion } from 'framer-motion'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 md:mt-0"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-2 text-3xl font-bold text-neutral-50">{title}</h1>

      <p className="text-zinc-400">{description}</p>
    </motion.div>
  )
}
