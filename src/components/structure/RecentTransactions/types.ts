export interface Transaction {
  amount: number
  category: string
  date: string
  description: string
  id: string
  type: 'income' | 'expense'
}
