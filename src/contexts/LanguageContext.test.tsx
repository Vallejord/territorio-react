import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'

// Componente de prueba para usar el hook
const TestComponent = () => {
  const { language, setLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button onClick={() => setLanguage('en')}>Change to EN</button>
      <button onClick={() => setLanguage('es')}>Change to ES</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('should provide default language as es', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('es')
  })

  it('should change language when setLanguage is called', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('es')

    await user.click(screen.getByText('Change to EN'))

    expect(screen.getByTestId('language')).toHaveTextContent('en')
  })

  it('should persist language in localStorage', () => {
    localStorage.setItem('territorio-language', 'en')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('en')
  })
})


