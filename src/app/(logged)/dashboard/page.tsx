import { NextPage } from 'next'

import { Header } from '@/components/structure/Header'

import { RecentGridTransactions } from './_components/RecentGridTransactions'
import { StatsGridCards } from './_components/StatsGridCards'

const Page: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header
        description="Análise detalhada do fluxo de caixa do Insanos MC"
        title="Relatórios"
      />

      <StatsGridCards />

      <RecentGridTransactions />
    </div>
  )
}

export default Page
