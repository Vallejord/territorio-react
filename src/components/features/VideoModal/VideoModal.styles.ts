import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease-out;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${scaleIn} 0.3s ease-out;
`

export const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  z-index: 10;

  @media (max-width: 768px) {
    top: -2.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000000;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-bottom: 56.25%;
  }
`

export const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const VideoTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1.5rem 0 0 0;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 0 0 0;
  }
`

