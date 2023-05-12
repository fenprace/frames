import { useLayoutEffect, useRef } from 'react'

export const useDivider = (direction: 'horizontal' | 'vertical') => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    const element = ref.current

    const prev = element.previousElementSibling as HTMLDivElement
    const next = element.nextElementSibling as HTMLDivElement

    let x = 0
    let y = 0
    let offset = 0

    const mouseMove = (e: MouseEvent) => {
      // How far the mouse has been moved
      const delta = direction === 'horizontal' ? e.clientX - x : e.clientY - y

      const parentRect = (
        element.parentNode as HTMLDivElement
      ).getBoundingClientRect()
      const parentSize =
        direction === 'horizontal' ? parentRect.width : parentRect.height

      const newOffset = ((offset + delta) / parentSize) * 100

      if (direction === 'horizontal') prev.style.width = `${newOffset}%`
      else prev.style.height = `${newOffset}%`
      prev.style.flex = '0 0 auto'

      document.body.style.cursor =
        direction === 'horizontal' ? 'col-resize' : 'row-resize'
      prev.style.userSelect = 'none'
      prev.style.pointerEvents = 'none'
      next.style.userSelect = 'none'
      next.style.pointerEvents = 'none'
    }

    const mouseUp = () => {
      document.body.style.removeProperty('cursor')
      prev.style.removeProperty('user-select')
      prev.style.removeProperty('pointer-events')
      next.style.removeProperty('user-select')
      next.style.removeProperty('pointer-events')

      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }

    const mouseDown = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      offset =
        direction === 'horizontal'
          ? prev.getBoundingClientRect().width
          : prev.getBoundingClientRect().height

      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)
    }

    element.addEventListener('mousedown', mouseDown)
    return () => element.removeEventListener('mousedown', mouseDown)
  }, [direction])

  return ref
}
