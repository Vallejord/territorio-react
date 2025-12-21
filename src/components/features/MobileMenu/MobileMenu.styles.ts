import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile browsers */
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.3s ease-out;

  @media (orientation: landscape) and (max-height: 500px) {
    height: 100vh;
    height: 100dvh;
  }
`

export const MenuContainer = styled.div<{ $isOpen: boolean }>`
  width: 85%;
  max-width: 400px;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile browsers */
  background-color: #000000;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  /* Mobile-first: landscape adjustments */
  @media (orientation: landscape) and (max-height: 500px) {
    width: 70%;
    max-width: 350px;
    height: 100vh;
    height: 100dvh;
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 400px;
  }
`

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;

  @media (orientation: landscape) and (max-height: 500px) {
    padding: 0.75rem 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px; /* Touch target size */
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  @media (orientation: landscape) and (max-height: 500px) {
    font-size: 1.25rem;
    min-width: 40px;
    min-height: 40px;
    padding: 0.4rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`

export const MenuNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  @media (orientation: landscape) and (max-height: 500px) {
    padding: 0.5rem 0;
    max-height: calc(100vh - 200px);
    max-height: calc(100dvh - 200px);
  }

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`

export const MenuLink = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  text-align: left;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  min-height: 44px; /* Touch target size */
  display: flex;
  align-items: center;

  @media (orientation: landscape) and (max-height: 500px) {
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
    min-height: 40px;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding: 1.25rem 2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: #ff0000;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const MenuFooter = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
  background-color: #000000;

  @media (orientation: landscape) and (max-height: 500px) {
    padding: 0.75rem 1.25rem;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
    gap: 1.5rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  @media (orientation: landscape) and (max-height: 500px) {
    gap: 1.25rem;
  }
`

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px; /* Touch target size */
  min-height: 44px;
  padding: 0.5rem;

  @media (orientation: landscape) and (max-height: 500px) {
    font-size: 1.25rem;
    min-width: 40px;
    min-height: 40px;
    padding: 0.4rem;
  }

  &:hover {
    opacity: 0.7;
    color: #ff0000;
  }

  &:active {
    opacity: 0.5;
  }
`

export const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  width: 100%;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;

  @media (orientation: landscape) and (max-height: 500px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`

export const LanguageButton = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  transition: opacity 0.2s ease, color 0.2s ease;
  font-family: inherit;
  min-width: 50px;

  &:hover {
    opacity: 1;
    color: ${({ $isActive }) => ($isActive ? '#ff0000' : '#ffffff')};
  }

  &:active {
    opacity: 1;
  }
`

export const LanguageSeparator = styled.span`
  color: #ffffff;
  opacity: 0.6;
`

