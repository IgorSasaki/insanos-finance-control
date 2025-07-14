import z from 'zod'

import { transactionSchema } from './schema'

export type TransactionFormData = z.infer<typeof transactionSchema>
