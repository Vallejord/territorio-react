import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

// Mock video elements since jsdom doesn't support video playback
beforeAll(() => {
  window.HTMLMediaElement.prototype.load = vi.fn()
  window.HTMLMediaElement.prototype.play = vi.fn()
  window.HTMLMediaElement.prototype.pause = vi.fn()
})

describe('Hero', () => {
  describe('Structure', () => {
    it('renders a section element with hero role', () => {
      render(<Hero />)
      expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
    })
  })

  describe('Video Background', () => {
    it('renders a video element', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video')
      expect(video).toBeInTheDocument()
      expect(video.tagName).toBe('VIDEO')
    })

    it('video has autoplay attribute', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video')
      expect(video).toHaveAttribute('autoplay')
    })

    it('video has muted attribute for autoplay policy', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video') as HTMLVideoElement
      // React sets muted as a property, not an attribute
      expect(video.muted).toBe(true)
    })

    it('video has loop attribute', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video')
      expect(video).toHaveAttribute('loop')
    })

    it('video has playsinline attribute for mobile', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video')
      expect(video).toHaveAttribute('playsinline')
    })

    it('video has a src attribute with video URL', () => {
      render(<Hero />)
      const video = screen.getByTestId('hero-video') as HTMLVideoElement
      expect(video.src).toContain('.mp4')
    })
  })

  describe('Styling', () => {
    it('hero section has full viewport height', () => {
      render(<Hero />)
      const hero = screen.getByRole('region', { name: /hero/i })
      expect(hero).toHaveStyle({ minHeight: '100vh' })
    })

    it('has an overlay element for visual effect', () => {
      render(<Hero />)
      const overlay = screen.getByTestId('hero-overlay')
      expect(overlay).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('section has aria-label for screen readers', () => {
      render(<Hero />)
      const hero = screen.getByRole('region')
      expect(hero).toHaveAttribute('aria-label')
    })
  })
})
