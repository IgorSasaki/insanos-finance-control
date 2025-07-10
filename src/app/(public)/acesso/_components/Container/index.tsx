'use client'

import { motion } from 'framer-motion'
import { Skull } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Form } from '../Form'

export const Container: React.FC = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-700"
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Skull className="h-8 w-8 text-neutral-50" />
            </motion.div>

            <div>
              <CardTitle className="text-2xl font-bold text-neutral-50">
                Insanos MC - Div. Barra Bonita
              </CardTitle>
              <CardDescription className="mt-2 text-zinc-400">
                Sistema de Fluxo de Caixa
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form />
          </CardContent>
        </Card>

        <motion.div
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          © 2025 Sasaki Tecnologia
        </motion.div>
      </motion.div>
    </>
  )
}
