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

// Unused animation removed

export const ContactSection = styled.section`
  background-color: #000000;
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;

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

export const FormWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0;
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


