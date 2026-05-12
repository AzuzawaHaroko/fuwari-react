import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export function Navbar({ siteName, navItems }) {
  return (
    <header className={styles.navbar}>
      <Link className={`${styles.brand} ${styles.navButton}`} to="/" aria-label={siteName}>
        <span className={styles.brandIcon}>H</span>
        {siteName}
      </Link>

      <nav className={styles.navLinks} aria-label="Primary">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.label}
              className={styles.navButton}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
              <span className={styles.externalMark}>ext</span>
            </a>
          ) : (
            <Link key={item.label} className={styles.navButton} to={item.href}>
              {item.label}
            </Link>
          )
        ))}
      </nav>

      {/* <div className={styles.navTools} aria-label="Tools">
        <button className={styles.iconButton} aria-label="Search">S</button>
        <button className={styles.iconButton} aria-label="Toggle theme">T</button>
      </div> */}
    </header>
  )
}
