import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #000000;
  width: 100%;
  box-sizing: border-box;
`

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem 1.5rem 2rem;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1rem 1.5rem;
    gap: 0;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }
`

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  flex: 1;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`

export const InfoColumn = styled.div<{ $align?: 'left' | 'center' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: ${({ $align }) => {
    if ($align === 'center') return 'center'
    if ($align === 'right') return 'flex-end'
    return 'flex-start'
  }};

  @media (max-width: 599px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    align-items: ${({ $align }) => {
      if ($align === 'center') return 'center'
      if ($align === 'right') return 'flex-end'
      return 'flex-start'
    }};
    text-align: ${({ $align }) => $align || 'left'};
  }
`

export const InfoTitle = styled.h3`
  font-size: 0.875rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const InfoText = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const InfoLink = styled.a`
  font-size: 0.875rem;
  color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-decoration: none;
  transition: opacity 0.3s ease;
  word-break: break-word;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

export const SocialSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    padding: 1.75rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    gap: 2.5rem;
  }
`

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.75rem;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    padding: 1.25rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    justify-content: center;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`

export const Credit = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.7rem;
  }
`

