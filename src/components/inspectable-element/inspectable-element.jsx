import { useState, useRef, useCallback } from 'react'
import { AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import TokenTooltip from './token-tooltip'

const TOOLTIP_WIDTH = 240
const VIEWPORT_MARGIN = 8
const ELEMENT_GAP = 8
const FLIP_THRESHOLD = 80

export default function InspectableElement({
  as: Tag = 'span',
  tokens,
  children,
  className,
  ...props
}) {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const ref = useRef(null)

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    const estimatedHeight = tokens.length * 24 + 24
    const placement = rect.top < FLIP_THRESHOLD + estimatedHeight ? 'below' : 'above'

    const top =
      placement === 'above'
        ? rect.top - estimatedHeight - ELEMENT_GAP
        : rect.bottom + ELEMENT_GAP

    const left = Math.max(
      VIEWPORT_MARGIN,
      Math.min(
        rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2,
        window.innerWidth - TOOLTIP_WIDTH - VIEWPORT_MARGIN
      )
    )

    setPosition({ top, left })
    setVisible(true)
  }, [tokens])

  const handleMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <>
      <Tag
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
