import React, { useEffect, useState } from 'react'
import styles from './HeroBanner.module.css'

let hasPlayedBannerIntro = false

export function HeroBanner({ image }) {
  const [shouldPlayIntro, setShouldPlayIntro] = useState(() => !hasPlayedBannerIntro)

  useEffect(() => {
    if (shouldPlayIntro) {
      hasPlayedBannerIntro = true
    }
  }, [shouldPlayIntro])

  return (
    <section
      className={`${styles.heroBanner} ${shouldPlayIntro ? styles.intro : ''}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Site banner"
    >
      <div className={styles.heroOverlay} />
    </section>
  )
}
