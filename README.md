# 🏴 Fluxo de Caixa | Insanos Moto Clube

Sistema web desenvolvido para o controle financeiro da divisão do Insanos Moto Clube, focado na gestão de entradas e saídas de caixa com visual minimalista, dark e com a estética biker/caveira do clube.

> 🧠 Projeto pensado para ser simples, seguro, responsivo e facilmente extensível para múltiplas divisões no futuro.

---

## 🚀 Stack Principal

- **Next.js** 15 (App Router, SSR/CSR híbrido)
- **TypeScript** (tipagem forte)
- **TailwindCSS v4** (tema visual biker com base em `zinc-900` e `neutral-50`)
- **shadcn/ui** (componentes acessíveis e modernos)
- **Framer Motion** (animações suaves)
- **Animate.css** (microinterações)
- **React Hook Form + Zod** (formulários com validação declarativa)
- **ESLint, Prettier, Husky, Lint-Staged, Commitlint** (qualidade e padronização)

---

## 📦 Funcionalidades

### ✅ MVP já implementado

- [x] Autenticação com e-mail e senha
- [x] Registro de entradas e saídas
- [x] Filtro por período, tipo e categoria
- [x] Cálculo automático do saldo
- [x] Categorias personalizadas por tipo (`income` / `expense`)
- [x] Exportação de lançamentos em CSV
- [x] Dashboard visual com breakdown por categoria
- [x] Animações suaves com foco em UX
- [x] Layout 100% responsivo e mobile-friendly

### 🔒 Segurança

- Hash de senha com Bcrypt
- Autenticação via JWT
- Proteção contra XSS, CSRF e ataques comuns

---

## 🧱 Estrutura de Pastas

```txt
src/
├── app/
│   ├── (public)/
│   │   └── acesso/
│   │       ├── _components/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── (logged)/
│   │   ├── dashboard/
│   │   │   ├── _components/
│   │   │   └── page.tsx
│   │   ├── relatorios/
│   │   │   ├── _components/
│   │   │   └── page.tsx
│   │   ├── transacoes/
│   │   │   ├── _components/
│   │   │   └── page.tsx
│   │   └── novo/
│   │       ├── _components/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   └── layout.tsx
├── components/          # Componentes globais reutilizáveis
├── constants/           # Constantes globais (ex: categorias)
│   └── categories.ts
├── lib/                 # Funções utilitárias e libs customizadas
│   └── utils.ts
├── styles/              # CSS global e configurações de estilo
│   └── globals.css
```

---

## 🛠️ Rodando o projeto localmente

1. Clone o repositório:

```bash
git clone git@github.com:IgorSasaki/insanos-finance-control.git
cd insanos-finance-control
```

2. Instale as dependências:

```bash
pnpm install
```

3. Copie o `.env.example` para `.env` e configure suas variáveis:

```bash
cp .env.example .env
```

4. Inicie o projeto:

```bash
pnpm dev
```

---

## ✨ Temas visuais e identidade

- Cores principais:
  - `zinc-900` como base dark sólida
  - `neutral-50` para textos e contrastes
- Ícones com foco em caveiras, motos e engrenagens
- Tipografia forte e minimalista
- Interface inspirada na estética outlaw do Insanos MC

---

## 📤 Deploy

> Pode ser facilmente hospedado no **Vercel**, **Render**, **Railway** ou **AWS Amplify**

---

## 🧑‍💻 Autor

**Igor Sasaki**
Desenvolvedor Full Stack Sênior
[linkedin.com/in/igor-sasaki](https://linkedin.com/in/igor-sasaki)
[github.com/IgorSasaki](https://github.com/IgorSasaki)
