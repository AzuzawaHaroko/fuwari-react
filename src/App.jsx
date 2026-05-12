import React from 'react'
import { FloatingScrollbar } from './components/FloatingScrollbar.jsx'
import { HeroBanner } from './components/HeroBanner.jsx'
import { Sidebar } from './components/HomePage/Sidebar.jsx'
import { Navbar } from './components/Navbar.jsx'
import { categories, notices, siteInfo, tags } from './data/siteData.js'
import { AppRoutes } from './router/index.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.appShell}>
      <Navbar siteName={siteInfo.name} navItems={siteInfo.navItems} />
      <HeroBanner image={siteInfo.banner} />

      <main className={styles.pageLayout} aria-label="Page content">
        <Sidebar
          profile={siteInfo.profile}
          notices={notices}
          categories={categories}
          tags={tags}
        />
        <section className={styles.routePanel}>
          <AppRoutes />
        </section>
      </main>

      <button className={styles.backToTop} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 14l4-4 4 4" />
        </svg>
      </button>
      <FloatingScrollbar />
    </div>
  )
}
