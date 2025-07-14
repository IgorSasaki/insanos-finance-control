/* eslint-disable prettier/prettier */
'use client'

import { motion } from 'framer-motion'
import { DollarSign, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CATEGORIES } from '@/constants/categories'
import { zodResolver } from '@hookform/resolvers/zod'

import { transactionSchema } from './schema'
import { TransactionFormData } from './types'

export const Form: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: 'income',
      date: new Date().toISOString().split('T')[0]
    }
  })

  const type = watch('type')

  const handleTypeChange = (value: 'income' | 'expense') => {
    setValue('type', value)
  }

  const onSubmit = async (data: TransactionFormData) => {
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Transaction submitted:', data)
    reset()

    setIsSubmitting(false)
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className="border-zinc-800 bg-zinc-900/80 shadow-md backdrop-blur-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-bold text-neutral-50">
            <PlusCircle className="h-6 w-6" />
            Novo Lançamento
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="space-y-2">
              <Label className="text-neutral-50">Tipo de Transação</Label>

              <section className="flex gap-4">
                {(['income', 'expense'] as const).map(option => (
                  <Button
                    className={`h-12 flex-1 rounded-xl transition-all ${
                      type === option
                        ? option === 'income'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-red-600 text-white hover:bg-red-700'
                        : 'border-zinc-600 text-zinc-400 hover:bg-zinc-700/50 hover:text-neutral-50'
                    }`}
                    key={option}
                    onClick={() => handleTypeChange(option)}
                    type="button"
                    variant={type === option ? 'default' : 'outline'}
                  >
                    {option === 'income' ? '+ Entrada' : '- Saída'}
                  </Button>
                ))}
              </section>
            </fieldset>

            <fieldset className="space-y-2">
              <Label className="text-neutral-50" htmlFor="description">
                Descrição
              </Label>

              <Textarea
                className="min-h-[96px] resize-none rounded-xl bg-zinc-800 text-neutral-50 placeholder:text-zinc-400"
                id="description"
                placeholder="Ex: Rifa do churrasco, valores arrecadados no evento."
                {...register('description')}
              />

              {errors.description && (
                <p className="text-sm text-red-400">
                  {errors.description.message}
                </p>
              )}
            </fieldset>

            <fieldset className="space-y-2">
              <Label className="text-neutral-50" htmlFor="amount">
                Valor
              </Label>

              <section className="relative">
                <DollarSign className="absolute top-3 left-3 h-5 w-5 text-zinc-400" />
                <Input
                  className="h-12 rounded-xl bg-zinc-800 pl-10 text-neutral-50 placeholder:text-zinc-400"
                  id="amount"
                  placeholder="0,00"
                  step="0.01"
                  type="number"
                  {...register('amount', { valueAsNumber: true })}
                />
              </section>

              {errors.amount && (
                <p className="text-sm text-red-400">{errors.amount.message}</p>
              )}
            </fieldset>

            <fieldset className="space-y-2">
              <Label className="text-neutral-50">Categoria</Label>

              <Select
                defaultValue=""
                onValueChange={value => setValue('category', value)}
              >
                <SelectTrigger className="h-12 rounded-xl border-zinc-700 bg-zinc-800 text-neutral-50">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent className="border-zinc-800 bg-zinc-900">
                  {CATEGORIES[type].map(category => (
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

              {errors.category && (
                <p className="text-sm text-red-400">
                  {errors.category.message}
                </p>
              )}
            </fieldset>

            <fieldset className="space-y-2">
              <Label className="text-neutral-50" htmlFor="date">
                Data
              </Label>
              <Input
                className="h-12 rounded-xl bg-zinc-800 text-neutral-50"
                id="date"
                type="date"
                {...register('date')}
              />
              {errors.date && (
                <p className="text-sm text-red-400">{errors.date.message}</p>
              )}
            </fieldset>

            <Button
              className="h-12 w-full rounded-xl bg-zinc-700 text-neutral-50 transition-all duration-200 hover:bg-zinc-600"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Salvando...' : 'Salvar Lançamento'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
