/* eslint-disable prettier/prettier */
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { LogOut, Menu, Skull, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { SIDEBAR_ITEMS } from './data'

export const Sidebar: React.FC = () => {
  const router = useRouter()
  const currentPath = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button
        className="fixed top-4 left-4 z-50 bg-zinc-800/80 text-neutral-50 backdrop-blur-sm hover:bg-zinc-700 md:hidden"
        onClick={toggleSidebar}
        size="icon"
        variant="ghost"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col border-r border-zinc-700 bg-zinc-800/95 backdrop-blur-sm">
          <div className="p-6">
            {/* Logo */}
            <div className="mb-8 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700">
                <Skull className="h-5 w-5 text-neutral-50" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-50">
                  Insanos MC
                </h1>
                <p className="text-xs text-zinc-400">Fluxo de Caixa</p>
              </div>
            </div>

            <nav className="space-y-2">
              {SIDEBAR_ITEMS.map(item => {
                const Icon = item.icon
                const isActive = currentPath === item.href

                return (
                  <Link href={item.href} key={item.href}>
                    <Button
                      className={`h-12 w-full justify-start rounded-xl text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-zinc-700 text-neutral-50 shadow-lg'
                          : 'text-zinc-400 hover:bg-zinc-700/50 hover:text-neutral-50'
                      }`}
                      variant={isActive ? 'secondary' : 'ghost'}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Logout - Bottom */}
          <div className="mt-auto p-6">
            <Button
              className="h-12 w-full justify-start rounded-xl text-left text-zinc-400 transition-all duration-200 hover:bg-zinc-700/50 hover:text-neutral-50"
              onClick={handleLogout}
              variant="ghost"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ x: 0 }}
            className="fixed top-0 left-0 z-50 h-full w-64 border-r border-zinc-700 bg-zinc-800/95 backdrop-blur-sm md:hidden"
            exit={{ x: -300 }}
            initial={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex h-full flex-col">
              <div className="p-6">
                {/* Logo */}
                <div className="mb-8 flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700">
                    <Skull className="h-5 w-5 text-neutral-50" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-neutral-50">
                      Insanos MC
                    </h1>
                    <p className="text-xs text-zinc-400">Fluxo de Caixa</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {SIDEBAR_ITEMS.map(item => {
                    const Icon = item.icon
                    const isActive = currentPath === item.href

                    return (
                      <Link href={item.href} key={item.href}>
                        <Button
                          className={`h-12 w-full justify-start rounded-xl text-left transition-all duration-200 ${
                            isActive
                              ? 'bg-zinc-700 text-neutral-50 shadow-lg'
                              : 'text-zinc-400 hover:bg-zinc-700/50 hover:text-neutral-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                          variant={isActive ? 'secondary' : 'ghost'}
                        >
                          <Icon className="mr-3 h-5 w-5" />
                          {item.label}
                        </Button>
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Logout - Bottom */}
              <div className="mt-auto p-6">
                <Button
                  className="h-12 w-full justify-start rounded-xl text-left text-zinc-400 transition-all duration-200 hover:bg-zinc-700/50 hover:text-neutral-50"
                  onClick={handleLogout}
                  variant="ghost"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sair
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
