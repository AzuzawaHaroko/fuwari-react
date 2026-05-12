import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from '../pages/HomePage.jsx'
import { AboutPage } from '../pages/AboutPage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'
import styles from './RouteTransition.module.css'

function RouteTransition({ children }) {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const firstFrame = requestAnimationFrame(() => {
      const secondFrame = requestAnimationFrame(() => {
        setEntered(true)
      })

      return () => cancelAnimationFrame(secondFrame)
    })

    return () => cancelAnimationFrame(firstFrame)
  }, [])

  return (
    <div className={`${styles.routeTransition} ${entered ? styles.entered : ''}`}>
      {children}
    </div>
  )
}

export function AppRoutes() {
  const location = useLocation()

  return (
    <RouteTransition key={location.key}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RouteTransition>
  )
}
