import { NextPage } from 'next'

import { Header } from '@/components/structure/Header'

import { CategoryBreakdown } from './_components/CategoryBreakdown'
import { Chart } from './_components/Chart'
import { Filters } from './_components/Filters'
import { SummaryCards } from './_components/SummaryCards'

const Page: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header
        description="Análise detalhada do fluxo de caixa do Insanos MC"
        title="Relatórios"
      />

      <Filters />

      <SummaryCards />

      <Chart />

      <CategoryBreakdown />
    </div>
  )
}

export default Page
