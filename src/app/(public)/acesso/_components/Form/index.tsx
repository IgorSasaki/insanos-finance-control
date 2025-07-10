'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema } from './schema'
import { LoginFormData } from './types'

export const Form: React.FC = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (payload: LoginFormData) => {
    setIsLoading(true)

    try {
      console.log({ payload })

      toast.success('Login realizado com sucesso!', {
        description: 'Bem-vindo ao sistema BeUni Aniversários'
      })

      router.push('/dashboard')
    } catch (error) {
      console.error({ onsubmitError: error })

      toast.error('Erro no login', {
        description: 'Credenciais inválidas'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-2">
        <Label className="text-neutral-50" htmlFor="email">
          Email
        </Label>

        <Input
          className={cn(
            'transition-all-smooth text-neutral-50',
            errors.email && 'border-red-500'
          )}
          id="email"
          placeholder="seu@email.com"
          type="email"
          {...register('email')}
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </fieldset>

      <div className="space-y-2">
        <Label className="text-neutral-50" htmlFor="password">
          Senha
        </Label>

        <div className="relative">
          <Input
            className={cn(
              'transition-all-smooth pr-10 text-neutral-50',
              errors.password && 'border-red-500'
            )}
            id="password"
            placeholder="Digite sua senha"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
          />

          <Button
            className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            size="sm"
            type="button"
            variant="ghost"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        </div>

        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        className="transition-all-smooth w-full cursor-pointer bg-neutral-50 text-zinc-900 hover:bg-neutral-50/90"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Carregando...' : 'Entrar'}
      </Button>
    </form>
  )
}
