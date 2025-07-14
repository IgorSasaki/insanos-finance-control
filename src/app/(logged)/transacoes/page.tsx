import { NextPage } from 'next'

import { Filters } from './_components/Filters'
import { Header } from './_components/Header'
import { TransactionsList } from './_components/TransactionsList'

const Transactions: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header />

      <Filters />

      <TransactionsList />
    </div>
  )
}

export default Transactions
