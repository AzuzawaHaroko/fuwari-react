import React from 'react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine} />
      <p>
        (c) 2026 Haroko. All Rights Reserved. / <a href="/rss.xml">RSS</a> / <a href="/sitemap-index.xml">Sitemap</a>
        <br />
        Powered by <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a> & <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>
      </p>
    </footer>
  )
}
