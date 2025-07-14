import { BarChart3, Home, List, PlusCircle } from 'lucide-react'

export const SIDEBAR_ITEMS = [
  {
    icon: Home,
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    icon: List,
    label: 'Transações',
    href: '/transacoes'
  },
  {
    icon: PlusCircle,
    label: 'Nova Transação',
    href: '/transacoes/novo'
  },
  {
    icon: BarChart3,
    label: 'Relatórios',
    href: '/relatorios'
  }

  // {
  //   icon: Settings,
  //   label: 'Configurações',
  //   href: '/configuracoes'
  // }
]
