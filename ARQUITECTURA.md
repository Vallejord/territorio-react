# Arquitectura Modular - Territorio

## Principios de Diseño

1. **Modularidad**: Cada componente es independiente y reutilizable
2. **Separación de responsabilidades**: Lógica, estilos, tipos y tests separados
3. **Composición**: Componentes pequeños que se combinan en componentes mayores
4. **DRY (Don't Repeat Yourself)**: Componentes y utilidades reutilizables
5. **Type Safety**: TypeScript estricto en todos los niveles
6. **Escalabilidad**: Fácil agregar nuevas secciones y funcionalidades

---

## Estructura de Carpetas Propuesta

```
src/
├── components/              # Componentes React
│   ├── common/             # Componentes reutilizables genéricos
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Modal/
│   │   ├── Section/
│   │   └── Container/
│   │
│   ├── layout/             # Componentes de layout
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Navigation/
│   │
│   ├── sections/           # Secciones principales del sitio
│   │   ├── Hero/
│   │   ├── Introduction/
│   │   ├── WorkShowcase/
│   │   ├── CurrentProjects/
│   │   ├── Team/
│   │   └── Contact/
│   │
│   └── features/           # Componentes específicos de features
│       ├── ProjectCard/
│       ├── ProjectStatusCard/
│       ├── TeamMember/
│       ├── ContactForm/
│       ├── ClientLogos/
│       └── MobileMenu/
│
├── hooks/                  # Custom hooks
│   ├── useLanguage.ts
│   ├── useScrollToSection.ts
│   ├── useIntersectionObserver.ts
│   └── useMediaQuery.ts
│
├── contexts/               # React Contexts
│   ├── LanguageContext.tsx
│   └── NavigationContext.tsx
│
├── types/                  # TypeScript types e interfaces
│   ├── project.ts
│   ├── team.ts
│   ├── contact.ts
│   ├── navigation.ts
│   └── index.ts
│
├── constants/              # Constantes del proyecto
│   ├── sections.ts        # IDs y nombres de secciones
│   ├── breakpoints.ts     # Breakpoints responsive
│   ├── colors.ts          # Paleta de colores
│   └── translations.ts    # Traducciones (ES/EN)
│
├── utils/                  # Funciones utilitarias
│   ├── scroll.ts
│   ├── validation.ts
│   ├── format.ts
│   └── api.ts             # Llamadas a API (si aplica)
│
├── assets/                 # Assets estáticos
│   ├── images/
│   ├── videos/
│   └── icons/
│
├── styles/                 # Estilos globales y temas
│   ├── theme.ts           # Tema de styled-components
│   └── globalStyles.ts    # Estilos globales
│
└── App.tsx
```

---

## Componentes Comunes (common/)

### Button
```typescript
// Componente base reutilizable para todos los botones
- Props: variant, size, onClick, disabled, children
- Variantes: primary, secondary, outline, text
- Tamaños: small, medium, large
```

### Card
```typescript
// Contenedor base para cards (proyectos, equipo, etc.)
- Props: hover, onClick, children
- Estilos base compartidos
```

### Modal
```typescript
// Modal reutilizable para lightbox de proyectos, etc.
- Props: isOpen, onClose, children
- Portal para renderizar fuera del DOM
```

### Section
```typescript
// Wrapper para secciones con padding y max-width consistente
- Props: id, backgroundColor, padding, children
- Maneja scroll animations
```

### Container
```typescript
// Contenedor con max-width y centrado
- Props: maxWidth, padding, children
```

---

## Componentes de Layout

### Header
```typescript
// Ya existe, mejorar con:
- Integración con Navigation
- Menú mobile funcional
- Scroll behavior (cambiar opacidad al hacer scroll)
```

### Footer
```typescript
// Nuevo componente
- Créditos
- Links adicionales (opcional)
```

### Navigation
```typescript
// Nuevo componente
- Menú desktop horizontal
- Menú mobile (hamburguesa)
- Scroll suave a secciones
- Indicador de sección activa
```

---

## Componentes de Secciones

### Hero
```typescript
// Mejorar existente
- Agregar HeroContent con título y descripción
- Props para texto (con soporte i18n)
- Animaciones de entrada
```

### Introduction
```typescript
// Nueva sección
- Texto de misión
- Componente ClientLogos para mostrar logos
- Animación al hacer scroll
```

### WorkShowcase
```typescript
// Nueva sección
- Barra de categorías (filtros)
- Grid de ProjectCard
- Lazy loading
- Modal para ver proyecto completo
```

### CurrentProjects
```typescript
// Nueva sección
- Grid de ProjectStatusCard
- Animación de aparición
```

### Team
```typescript
// Nueva sección
- Grid de TeamMember
- Animación de aparición
```

### Contact
```typescript
// Nueva sección
- ContactForm
- ContactInfo (emails, oficinas, redes)
- Validación y envío
```

---

## Componentes de Features

### ProjectCard
```typescript
// Card reutilizable para proyectos del showcase
- Props: project (Project type), onClick
- Hover effects
- Lazy loading de imagen
```

### ProjectStatusCard
```typescript
// Card para proyectos en curso
- Props: project (CurrentProject type)
- Indicador de estado (badge)
```

### TeamMember
```typescript
// Card de miembro del equipo
- Props: member (TeamMember type)
- Foto, nombre, título
- Hover effects
```

### ContactForm
```typescript
// Formulario de contacto
- Campos: nombre, email, mensaje
- Validación
- Estado de envío (loading, success, error)
- Integración con API/email service
```

### ClientLogos
```typescript
// Grid de logos de clientes
- Props: logos (array)
- Scroll horizontal en mobile
- Lazy loading
```

### MobileMenu
```typescript
// Menú desplegable mobile
- Props: isOpen, onClose, sections
- Animación de entrada/salida
- Links a secciones
```

---

## Hooks Personalizados

### useLanguage
```typescript
// Hook para manejar idioma
- Retorna: { language, setLanguage, t }
- Usa LanguageContext
- Función t() para traducciones
```

### useScrollToSection
```typescript
// Hook para scroll suave a secciones
- Parámetros: sectionId
- Retorna: función scrollTo
```

### useIntersectionObserver
```typescript
// Hook para detectar cuando elemento entra en viewport
- Para animaciones al hacer scroll
- Retorna: ref, isVisible
```

### useMediaQuery
```typescript
// Hook para breakpoints responsive
- Parámetros: breakpoint
- Retorna: boolean (matches)
```

---

## Contexts

### LanguageContext
```typescript
// Context para idioma global
- Provider: LanguageProvider
- Estado: language ('es' | 'en')
- Funciones: setLanguage, t()
- Persistencia en localStorage
```

### NavigationContext (opcional)
```typescript
// Context para estado de navegación
- Sección activa
- Menú abierto/cerrado
```

---

## Types/Interfaces

### project.ts
```typescript
export interface Project {
  id: string
  title: string
  category: ProjectCategory
  thumbnail: string
  video?: string
  images?: string[]
  description: {
    es: string
    en: string
  }
  client?: string
  year?: number
}

export type ProjectCategory = 
  | 'publicidad' 
  | 'redes' 
  | 'tv' 
  | 'videoclips' 
  | 'documentales'

export interface CurrentProject {
  id: string
  title: string
  subtitle: string
  image: string
  status: 'pre-produccion' | 'produccion' | 'post-produccion'
  description: {
    es: string
    en: string
  }
}
```

### team.ts
```typescript
export interface TeamMember {
  id: string
  name: string
  role: {
    es: string
    en: string
  }
  image: string
  bio?: {
    es: string
    en: string
  }
}
```

### contact.ts
```typescript
export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface Office {
  city: string
  address: string
  postalCode: string
  phone: string
}
```

### navigation.ts
```typescript
export interface Section {
  id: string
  label: {
    es: string
    en: string
  }
  href: string
}
```

---

## Constants

### sections.ts
```typescript
export const SECTIONS = {
  HERO: 'hero',
  INTRODUCTION: 'introduction',
  WORK: 'work',
  CURRENT_PROJECTS: 'current-projects',
  TEAM: 'team',
  CONTACT: 'contact',
} as const

export const SECTION_IDS = Object.values(SECTIONS)
```

### breakpoints.ts
```typescript
export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1400px',
} as const
```

### colors.ts
```typescript
export const COLORS = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#FF0000', // Rojo del diseño
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.8)',
  },
  background: {
    dark: '#000000',
    overlay: 'rgba(0, 0, 0, 0.8)',
  },
} as const
```

### translations.ts
```typescript
export const translations = {
  es: {
    // Todas las traducciones en español
  },
  en: {
    // Todas las traducciones en inglés
  },
} as const
```

---

## Utils

### scroll.ts
```typescript
export const scrollToSection = (sectionId: string) => {
  // Implementación de scroll suave
}

export const getSectionOffset = () => {
  // Offset para compensar header fijo
}
```

### validation.ts
```typescript
export const validateEmail = (email: string): boolean => {
  // Validación de email
}

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  // Validación completa del formulario
}
```

### format.ts
```typescript
export const formatPhone = (phone: string): string => {
  // Formateo de teléfono
}
```

---

## Patrones de Implementación

### Estructura de Componente
```
ComponentName/
├── ComponentName.tsx          # Componente principal
├── ComponentName.styles.ts    # Estilos styled-components
├── ComponentName.test.tsx     # Tests
├── ComponentName.types.ts     # Types específicos (si son muchos)
└── index.ts                   # Export
```

### Ejemplo de Componente
```typescript
// ComponentName.tsx
import { ComponentWrapper, ComponentContent } from './ComponentName.styles'
import type { ComponentNameProps } from './ComponentName.types'

export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  // Lógica del componente
  return (
    <ComponentWrapper>
      <ComponentContent>
        {/* Contenido */}
      </ComponentContent>
    </ComponentWrapper>
  )
}
```

### Uso de Theme en styled-components
```typescript
// theme.ts
export const theme = {
  colors: COLORS,
  breakpoints: BREAKPOINTS,
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
  },
}

// En componente
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
```

---

## Orden de Implementación Sugerido

1. **Infraestructura Base**
   - Types e interfaces
   - Constants (sections, breakpoints, colors)
   - Theme de styled-components
   - LanguageContext y useLanguage hook

2. **Componentes Comunes**
   - Button
   - Card
   - Section
   - Container

3. **Navegación**
   - Navigation component
   - MobileMenu
   - useScrollToSection hook
   - Mejorar Header con navegación

4. **Secciones (en orden)**
   - Hero (mejorar con contenido)
   - Introduction
   - WorkShowcase + ProjectCard
   - CurrentProjects + ProjectStatusCard
   - Team + TeamMember
   - Contact + ContactForm + ContactInfo
   - Footer

5. **Mejoras y Optimizaciones**
   - Animaciones de scroll
   - Lazy loading
   - Performance optimizations

---

## Convenciones de Código

### Naming
- Componentes: PascalCase (`ProjectCard`)
- Hooks: camelCase con prefijo `use` (`useLanguage`)
- Funciones utils: camelCase (`scrollToSection`)
- Constantes: UPPER_SNAKE_CASE (`SECTIONS`)
- Types/Interfaces: PascalCase (`Project`, `TeamMember`)

### Props
- Siempre tipadas con interfaces
- Props opcionales con `?`
- Props de styled-components con prefijo `$` (`$isActive`)

### Imports
- Orden: React → librerías → componentes locales → tipos → estilos
- Rutas relativas desde `src/`

### Estilos
- styled-components como primera opción
- Theme para valores compartidos
- Breakpoints desde constants
- Mobile-first cuando sea posible

---

## Testing Strategy

- Tests unitarios para cada componente
- Tests de integración para features complejas
- Tests de accesibilidad (ARIA labels, keyboard navigation)
- Tests de responsive (breakpoints)

---

## Próximos Pasos

1. ✅ Crear estructura de carpetas
2. ✅ Crear types e interfaces base
3. ✅ Crear constants
4. ✅ Crear theme de styled-components
5. ✅ Implementar LanguageContext
6. ✅ Crear componentes comunes
7. ✅ Implementar navegación
8. ✅ Implementar secciones una por una


