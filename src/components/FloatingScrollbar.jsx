import React, { useEffect, useRef, useState } from 'react'
import styles from './FloatingScrollbar.module.css'

export function FloatingScrollbar() {
  const trackRef = useRef(null)
  const thumbRef = useRef(null)
  const metricsRef = useRef({
    maxThumbTop: 0,
    scrollableHeight: 0,
    thumbHeightPx: 0,
  })
  const dragStateRef = useRef({
    dragging: false,
    pointerOffset: 0,
  })
  const [state, setState] = useState({
    thumbHeight: 0,
    visible: false,
  })
  const [dragging, setDragging] = useState(false)

  const applyThumbPosition = (thumbTop) => {
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translateY(${thumbTop}px)`
    }
  }

  const updateMetrics = () => {
    if (!trackRef.current) {
      return
    }

    const viewportHeight = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const scrollableHeight = Math.max(pageHeight - viewportHeight, 0)
    const visible = scrollableHeight > 1
    const trackHeight = trackRef.current.getBoundingClientRect().height
    const thumbHeightPx = visible
      ? Math.max((viewportHeight / pageHeight) * trackHeight, 36)
      : 0
    const maxThumbTop = Math.max(trackHeight - thumbHeightPx, 1)
    const scrollRatio = visible ? window.scrollY / scrollableHeight : 0

    metricsRef.current = {
      maxThumbTop,
      scrollableHeight,
      thumbHeightPx,
    }
    setState({ thumbHeight: thumbHeightPx, visible })
    applyThumbPosition(scrollRatio * maxThumbTop)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (dragStateRef.current.dragging) {
        return
      }

      const { maxThumbTop, scrollableHeight } = metricsRef.current
      const scrollRatio = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      applyThumbPosition(scrollRatio * maxThumbTop)
    }

    updateMetrics()
    const frame = requestAnimationFrame(updateMetrics)
    const resizeObserver = new ResizeObserver(updateMetrics)
    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateMetrics)
    window.addEventListener('load', updateMetrics)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateMetrics)
      window.removeEventListener('load', updateMetrics)
    }
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!dragStateRef.current.dragging) {
        return
      }

      const trackRect = trackRef.current.getBoundingClientRect()
      const { maxThumbTop, scrollableHeight } = metricsRef.current
      const pointerY = event.clientY - trackRect.top - dragStateRef.current.pointerOffset
      const thumbTop = Math.min(Math.max(pointerY, 0), maxThumbTop)
      const scrollRatio = thumbTop / maxThumbTop

      applyThumbPosition(thumbTop)
      window.scrollTo({
        top: scrollRatio * scrollableHeight,
        behavior: 'auto',
      })
    }

    const handlePointerUp = () => {
      if (!dragStateRef.current.dragging) {
        return
      }

      dragStateRef.current.dragging = false
      setDragging(false)
      document.body.style.userSelect = ''
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [])

  const scrollToPointer = (clientY, pointerOffset = 0) => {
    const trackRect = trackRef.current.getBoundingClientRect()
    const { maxThumbTop, scrollableHeight } = metricsRef.current
    const pointerY = clientY - trackRect.top - pointerOffset
    const thumbTop = Math.min(Math.max(pointerY, 0), maxThumbTop)
    const scrollRatio = thumbTop / maxThumbTop

    applyThumbPosition(thumbTop)
    window.scrollTo({
      top: scrollRatio * scrollableHeight,
      behavior: 'auto',
    })
  }

  const startDragging = (pointerOffset) => {
    dragStateRef.current = {
      dragging: true,
      pointerOffset,
    }
    setDragging(true)
    document.body.style.userSelect = 'none'
  }

  const handleTrackPointerDown = (event) => {
    event.preventDefault()
    startDragging(metricsRef.current.thumbHeightPx / 2)
    scrollToPointer(event.clientY, metricsRef.current.thumbHeightPx / 2)
  }

  const handleThumbPointerDown = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const thumbRect = event.currentTarget.getBoundingClientRect()
    startDragging(event.clientY - thumbRect.top)
  }

  return (
    <div
      ref={trackRef}
      className={`${styles.track} ${dragging ? styles.dragging : ''} ${state.visible ? '' : styles.hidden}`}
      aria-label="Page scrollbar"
      role="scrollbar"
      aria-controls="root"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={state.visible ? 1 : 0}
      onPointerDown={handleTrackPointerDown}
    >
      <div
        ref={thumbRef}
        className={styles.thumb}
        onPointerDown={handleThumbPointerDown}
        style={{ height: `${state.thumbHeight}px` }}
      />
    </div>
  )
}
