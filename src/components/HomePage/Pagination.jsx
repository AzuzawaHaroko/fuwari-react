import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pagination.module.css'

export function Pagination({ current, total }) {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <Link className={`${styles.pageButton} ${styles.disabled}`} to="/" aria-disabled="true">&lt;</Link>
      <div className={styles.pageCurrent}>{current}</div>
      <Link className={`${styles.pageButton} ${current >= total ? styles.disabled : ''}`} to="/" aria-disabled={current >= total}>&gt;</Link>
    </nav>
  )
}
