import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  const handleLanguageChange = (lang: 'es' | 'en') => {
    console.log('Language changed to:', lang)
  }

  const handleMenuToggle = (isOpen: boolean) => {
    console.log('Menu toggled:', isOpen)
  }

  return (
    <>
      <Header 
        onLanguageChange={handleLanguageChange}
        onMenuToggle={handleMenuToggle}
      />
      <Hero />
    </>
  )
}

export default App
