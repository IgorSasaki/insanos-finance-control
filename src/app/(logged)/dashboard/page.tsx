import { NextPage } from 'next'

import { Header } from './_components/Header'
import { RecentGridTransactions } from './_components/RecentGridTransactions'
import { StatsGridCards } from './_components/StatsGridCards'

const Page: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header />

      <StatsGridCards />

      <RecentGridTransactions />
    </div>
  )
}

export default Page
