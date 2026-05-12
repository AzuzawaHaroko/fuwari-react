import React from 'react'
import { Link } from 'react-router-dom'
import { Panel } from './shared/Panel.jsx'
import styles from './Sidebar.module.css'

const socialIcons = [
  {
    label: 'GitHub',
    src: '/images/social-icons/github.svg',
    className: styles.githubIcon,
    url: 'https://space.bilibili.com/3312190'
  },
  {
    label: 'Bilibili',
    src: '/images/social-icons/bilibili.svg',
    className: styles.bilibiliIcon,
    url: 'https://github.com/AzuzawaHaroko'
  },
  {
    label: 'X',
    src: '/images/social-icons/x.svg',
    className: styles.xIcon,
    url: 'https://x.com/KOMEJIHA'
  },
]

export function Sidebar({ profile, notices, categories, tags, className = '' }) {
  return (
    <aside className={`${styles.sidebar} ${className}`} aria-label="Sidebar widgets">
      <Panel className={styles.profileCard}>
        <Link className={styles.avatarLink} to="/about/" aria-label="Go to About Page">
          <img src={profile.avatar} alt={`Profile Image of ${profile.name}`} />
          <span className={styles.avatarMask}>
            <img src="/images/avatar-mask.svg" alt="" aria-hidden="true" />
          </span>
        </Link>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <p>{profile.bio2}</p>
        <p>{profile.bio3}</p>
        <div className={styles.socialRow}>
          {profile.links.map((link, index) => {
            const icon = socialIcons[index]

            return (
              <Link key={link} to="/" aria-label={icon?.label ?? link}>
                <img onClick={() => window.open(icon.url, '_blank')} className={icon?.className} src={icon?.src} alt="" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </Panel>

      <Panel title="一点有的没的" icon="!">
        <div className={styles.noticeList}>
          不是球球空间
        </div>
      </Panel>
      <Panel title="两点有的没的" icon="!">
        <div className={styles.noticeList}>
          没想好写什么
        </div>
      </Panel>

      {/* <Panel title="Categories">
        <div className={styles.linkList}>
          {categories.map((category) => (
            <Link key={category.name} to={`/archive/?category=${category.name}`}>
              <span>{category.name}</span>
              <strong>{category.count}</strong>
            </Link>
          ))}
        </div>
      </Panel>

      <Panel title="Tags">
        <div className={styles.tagCloud}>
          {tags.map((tag) => (
            <Link key={tag.name} to={`/archive/?tag=${tag.name}`}>
              {tag.name}
              <span>{tag.count}</span>
            </Link>
          ))}
        </div>
      </Panel> */}
    </aside>
  )
}
