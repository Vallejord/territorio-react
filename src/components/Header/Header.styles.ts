import styled from 'styled-components'

// Breakpoint for tablet/mobile - below this, show only logo + hamburger
const MOBILE_BREAKPOINT = '768px'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
  padding: 1rem 2rem;
  box-sizing: border-box;
`

export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const LogoImage = styled.img`
  height: 28px;
  width: auto;
  object-fit: contain;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.1rem;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`

export const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`

export const LanguageButton = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: opacity 0.2s ease;
  font-family: inherit;

  &:hover {
    opacity: 1;
  }
`

export const LanguageSeparator = styled.span`
  color: #ffffff;
  opacity: 0.6;
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`

