import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

import '@/styles/globals.css'

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
