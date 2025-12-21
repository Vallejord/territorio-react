import { describe, it, expect, vi, beforeEach } from 'vitest'
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

    expect(screen.getByText(/Convertimos IDEAS/i)).toBeInTheDocument()
  })

  it('should emphasize keywords IDEAS, ESCENCIA, CLIENTE, AUDIENCIA', () => {
    render(
      <LanguageProvider>
        <Introduction />
      </LanguageProvider>
    )

    // Verificar que las palabras enfatizadas están presentes
    const missionText = screen.getByText(/Convertimos/i).textContent
    expect(missionText).toContain('IDEAS')
    expect(missionText).toContain('ESCENCIA')
    expect(missionText).toContain('CLIENTE')
    expect(missionText).toContain('AUDIENCIA')
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

