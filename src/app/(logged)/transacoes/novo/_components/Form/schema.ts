import z from 'zod'

export const transactionSchema = z.object({
  description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
  amount: z.number().min(0.01, 'Valor deve ser maior que zero'),
  type: z.enum(['income', 'expense']),
  category: z.string().min(1, 'Categoria é obrigatória'),
  date: z.string().min(1, 'Data é obrigatória')
})
