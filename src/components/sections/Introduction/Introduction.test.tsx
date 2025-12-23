import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Introduction } from './Introduction'
import { LanguageProvider } from '../../../contexts/LanguageContext'

// Mock Swiper
vi.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}))

vi.mock('swiper/modules', () => ({
  Autoplay: vi.fn(),
}))

vi.mock('swiper/css', () => ({}))

describe('Introduction', () => {
  it('should render mission text in Spanish by default', () => {
    render(
      <LanguageProvider>
        <Introduction />
      </LanguageProvider>
    )

    // El texto está dividido en múltiples spans, buscar por parte del texto
    expect(screen.getByText(/Convertimos/i)).toBeInTheDocument()
    expect(screen.getByText(/IDEAS/i)).toBeInTheDocument()
  })

  it('should emphasize keywords IDEAS, ESCENCIA, CLIENTE, AUDIENCIA', () => {
    render(
      <LanguageProvider>
        <Introduction />
      </LanguageProvider>
    )

    // Verificar que las palabras enfatizadas están presentes en el documento
    // El texto está dividido en múltiples elementos, así que buscamos cada palabra individualmente
    expect(screen.getByText(/IDEAS/i)).toBeInTheDocument()
    expect(screen.getByText(/ESCENCIA/i)).toBeInTheDocument()
    expect(screen.getByText(/CLIENTE/i)).toBeInTheDocument()
    expect(screen.getByText(/AUDIENCIA/i)).toBeInTheDocument()
    
    // Verificar que las palabras enfatizadas están dentro de elementos con estilo especial
    const ideasElement = screen.getByText(/IDEAS/i)
    const escenciaElement = screen.getByText(/ESCENCIA/i)
    const clienteElement = screen.getByText(/CLIENTE/i)
    const audienciaElement = screen.getByText(/AUDIENCIA/i)
    
    // Verificar que están dentro de elementos span (las palabras enfatizadas)
    expect(ideasElement.tagName).toBe('SPAN')
    expect(escenciaElement.tagName).toBe('SPAN')
    expect(clienteElement.tagName).toBe('SPAN')
    expect(audienciaElement.tagName).toBe('SPAN')
  })

  it('should render client logos', () => {
    render(
      <LanguageProvider>
        <Introduction />
      </LanguageProvider>
    )

    // Verificar que Swiper está renderizado (contiene los logos)
    expect(screen.getByTestId('swiper')).toBeInTheDocument()
  })
})

