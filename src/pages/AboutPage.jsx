import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function AboutPage() {
  return (
    <section className={styles.card}>
      <h1>关于</h1>
      <p>有空再整这一页</p>
      <Link to="/">Back Home</Link>
    </section>
  )
}
