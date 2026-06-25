import { useState, useCallback } from 'react'
import { AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import TokenTooltip from './token-tooltip'

const TOOLTIP_WIDTH = 320
const VIEWPORT_MARGIN = 8
const CURSOR_OFFSET = 16

export default function InspectableElement({
  as: Tag = 'span',
  tokens,
  children,
  className,
  ...props
}) {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const updatePosition = useCallback((e) => {
    const estimatedHeight = tokens.length * 24 + 24
    setPosition({
      left: Math.max(VIEWPORT_MARGIN, Math.min(e.clientX + CURSOR_OFFSET, window.innerWidth - TOOLTIP_WIDTH - VIEWPORT_MARGIN)),
      top: Math.max(VIEWPORT_MARGIN, e.clientY - estimatedHeight - CURSOR_OFFSET),
    })
  }, [tokens])

  const handleMouseEnter = useCallback((e) => {
    updatePosition(e)
    setVisible(true)
  }, [updatePosition])

  const handleMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <>
      <Tag
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={updatePosition}
        className={cn('cursor-crosshair', className)}
        {...props}
      >
        {children}
      </Tag>
      <AnimatePresence>
        {visible && (
          <TokenTooltip
            tokens={tokens}
            top={position.top}
            left={position.left}
            width={TOOLTIP_WIDTH}
          />
        )}
      </AnimatePresence>
    </>
  )
}
