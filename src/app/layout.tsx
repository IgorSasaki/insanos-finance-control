import { Metadata, NextPage } from 'next'
import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Insanos MC - Sistema de Fluxo de Caixa',
  description: 'Sistema interno de gestão financeira do Insanos MC'
}

const RootLayout: NextPage<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster />

        {children}
      </body>
    </html>
  )
}

export default RootLayout
