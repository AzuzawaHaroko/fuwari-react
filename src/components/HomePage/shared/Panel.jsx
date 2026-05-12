import React from 'react'
import styles from './Panel.module.css'

export function Panel({ title, className = '', children }) {
  return (
    <section className={`${styles.panel} ${className}`}>
      {title && (
        <header className={styles.panelTitle}>
          <span aria-hidden="true" />
          <h2>{title}</h2>
        </header>
      )}
      {children}
    </section>
  )
}
