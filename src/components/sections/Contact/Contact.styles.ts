import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

export const ContactSection = styled.section`
  background-color: #000000;
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

export const SectionTitle = styled.h2<{ $isVisible: boolean }>`
  font-size: 2rem;
  color: #ffffff;
  text-align: left;
  margin: 0 0 3rem 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInUp : 'none')} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoTitle = styled.h3`
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin: 0;
`

export const InfoText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  line-height: 1.6;
`

export const InfoLink = styled.a`
  font-size: 0.9rem;
  color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

export const SocialFooter = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 1.5rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

