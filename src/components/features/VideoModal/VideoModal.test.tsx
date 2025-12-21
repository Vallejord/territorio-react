import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoModal } from './VideoModal'

// Mock video methods
beforeAll(() => {
  window.HTMLMediaElement.prototype.play = vi.fn()
  window.HTMLMediaElement.prototype.pause = vi.fn()
})

describe('VideoModal', () => {
  const mockOnClose = vi.fn()

  it('should render when isOpen is true', () => {
    render(
      <VideoModal
        isOpen={true}
        videoSrc="/test-video.mp4"
        title="Test Video"
        onClose={mockOnClose}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('should not render when isOpen is false', () => {
    render(
      <VideoModal
        isOpen={false}
        videoSrc="/test-video.mp4"
        title="Test Video"
        onClose={mockOnClose}
      />
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <VideoModal
        isOpen={true}
        videoSrc="/test-video.mp4"
        title="Test Video"
        onClose={mockOnClose}
      />
    )

    const closeButton = screen.getByLabelText(/cerrar/i)
    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})

