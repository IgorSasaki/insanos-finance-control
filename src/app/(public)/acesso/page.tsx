import { NextPage } from 'next'

import { Container } from './_components/Container'

const Page: NextPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4">
      <Container />
    </main>
  )
}

export default Page
