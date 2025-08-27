# Reacto App 🚀

Bootstrap completo de React Native com Expo, TypeScript e as melhores práticas do mercado.

## Stack Tecnológica

- **React Native** + **Expo SDK**
- **TypeScript** para tipagem estática
- **Expo Router** para navegação file-based
- **Zustand** para gerenciamento de estado
- **React Query** para data fetching e cache
- **React Hook Form** + **Zod** para formulários e validação
- **Metro** configurado com imports absolutos

## Estrutura do Projeto

```
src/
├── app/              # Rotas (Expo Router)
│   ├── _layout.tsx   # Layout principal
│   ├── index.tsx     # Tela inicial
│   ├── profile.tsx   # Tela de perfil
│   └── settings.tsx  # Configurações
├── components/       # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Loading.tsx
│   └── index.ts
├── features/         # Features organizadas por domínio
│   └── auth/
│       └── LoginForm.tsx
├── hooks/            # Custom hooks
│   └── useUsers.ts
├── services/         # APIs e serviços externos
│   └── api.ts
├── stores/           # Stores Zustand
│   └── counter.ts
└── utils/            # Utilitários
```

## Como Rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o projeto
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

### 3. Desenvolvimento
```bash
# Limpar cache se necessário
npx expo start --clear
```

## Funcionalidades Implementadas

### ✅ Navegação
- Expo Router configurado
- Navegação entre telas (Home, Profile, Settings)
- Deep linking pronto

### ✅ Estado Global
- Zustand store para contador
- Padrão simples e performático

### ✅ Data Fetching
- React Query configurado
- Exemplo de API service
- Custom hooks para queries

### ✅ Formulários
- React Hook Form + Zod
- Validação em tempo real
- Componente Input reutilizável

### ✅ Componentes Base
- Button com variantes (primary, secondary, outline)
- Input com label e erro
- Loading com overlay opcional

### ✅ TypeScript
- Configuração completa
- Imports absolutos (`@/components`)
- Tipagem em todos os componentes

## Próximos Passos

### Customização
1. **Alterar nome do app**: Edite `app.json` → `name` e `slug`
2. **Bundle ID**: Configure `ios.bundleIdentifier` e `android.package`
3. **Ícones**: Substitua arquivos em `/assets`
4. **Cores**: Crie um theme system em `/src/utils/theme.ts`

### Funcionalidades Extras
- [ ] Autenticação (AsyncStorage + Context)
- [ ] Notificações push
- [ ] Animações (Reanimated)
- [ ] Testes (Jest + Testing Library)
- [ ] CI/CD (EAS Build)
- [ ] Splash screen customizada

### Performance
- [ ] FlashList para listas grandes
- [ ] Lazy loading de telas
- [ ] Otimização de imagens
- [ ] Bundle analyzer

## Comandos Úteis

```bash
# Gerar build de produção
npx eas build --platform all

# Atualizar OTA
npx eas update

# Analisar bundle
npx expo export --dump-sourcemap

# Limpar tudo
npm run clean
```

## Filosofia do Projeto

> **"Menos firula, mais entrega"** 📱⚡️

- Prioriza simplicidade sobre complexidade
- Componentes pequenos e focados
- Estado mínimo necessário
- Performance por padrão
- Fácil de manter e evoluir

---

**Criado com ❤️ pelo Reacto** - Seu mentor React Native de confiança!# reacto-render
