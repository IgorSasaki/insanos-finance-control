'use client'

import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/structure/Sidebar'

const LoggedLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-64 lg:max-w-7xl">{children}</main>
      </div>
    </div>
  )
}

export default LoggedLayout
