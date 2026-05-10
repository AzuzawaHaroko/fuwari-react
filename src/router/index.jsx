import React, { useLayoutEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from '../pages/HomePage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'
import styles from './RouteTransition.module.css'

export function AppRoutes() {
  const location = useLocation()
  const [entered, setEntered] = useState(false)

  useLayoutEffect(() => {
    setEntered(false)
    const timer = window.setTimeout(() => {
      setEntered(true)
    }, 20)

    return () => window.clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className={`${styles.routeTransition} ${entered ? styles.entered : ''}`} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
