import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <section className={styles.card}>
      <h1>Page not found</h1>
      <p>The route exists in the app shell, but this page has not been implemented yet.</p>
      <Link to="/">Back Home</Link>
    </section>
  )
}
