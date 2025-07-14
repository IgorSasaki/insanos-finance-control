import { NextPage } from 'next'

import { Header } from '@/components/structure/Header'

import { Filters } from './_components/Filters'
import { TransactionsList } from './_components/TransactionsList'

const Transactions: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header
        description="Histórico completo de transações"
        title="Lançamentos"
      />

      <Filters />

      <TransactionsList />
    </div>
  )
}

export default Transactions
