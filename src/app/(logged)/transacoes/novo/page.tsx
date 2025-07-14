import { NextPage } from 'next'

import { Header } from '@/components/structure/Header'

import { Form } from './_components/Form'

const NewTransaction: NextPage = () => {
  return (
    <div className="space-y-6 p-6">
      <Header
        description="Registre uma nova entrada ou saída no fluxo de caixa"
        title="Novo Lançamento"
      />

      <div className="max-w-2xl">
        <Form />
      </div>
    </div>
  )
}

export default NewTransaction
