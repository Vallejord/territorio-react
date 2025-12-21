import { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  VideoWrapper,
  VideoPlayer,
  VideoTitle,
} from './VideoModal.styles'

export interface VideoModalProps {
  isOpen: boolean
  videoSrc: string
  title: string
  onClose: () => void
}

export const VideoModal = ({ isOpen, videoSrc, title, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="video-title">
        <CloseButton onClick={onClose} aria-label="Cerrar video">
          <FiX />
        </CloseButton>
        <VideoWrapper>
          <VideoPlayer
            ref={videoRef}
            src={videoSrc}
            controls
            playsInline
            autoPlay
          />
        </VideoWrapper>
        {title && <VideoTitle id="video-title">{title}</VideoTitle>}
      </ModalContainer>
    </ModalOverlay>
  )
}

