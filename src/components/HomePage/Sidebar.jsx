import React from 'react'
import { Link } from 'react-router-dom'
import { Panel } from './shared/Panel.jsx'
import styles from './Sidebar.module.css'

export function Sidebar({ profile, notices, categories, tags, className = '' }) {
  return (
    <aside className={`${styles.sidebar} ${className}`} aria-label="Sidebar widgets">
      <Panel className={styles.profileCard}>
        <Link className={styles.avatarLink} to="/about/" aria-label="Go to About Page">
          <img src={profile.avatar} alt={`Profile Image of ${profile.name}`} />
          <span className={styles.avatarMask}>ID</span>
        </Link>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <div className={styles.socialRow}>
          {profile.links.map((link) => (
            <Link key={link} to="/" aria-label={link}>{link.slice(0, 1)}</Link>
          ))}
        </div>
      </Panel>

      <Panel title="Announcement" icon="!">
        <div className={styles.noticeList}>
          {notices.map((notice) => (
            <p key={notice}>{notice}</p>
          ))}
        </div>
      </Panel>

      <Panel title="Categories" icon="C">
        <div className={styles.linkList}>
          {categories.map((category) => (
            <Link key={category.name} to={`/archive/?category=${category.name}`}>
              <span>{category.name}</span>
              <strong>{category.count}</strong>
            </Link>
          ))}
        </div>
      </Panel>

      <Panel title="Tags" icon="#">
        <div className={styles.tagCloud}>
          {tags.map((tag) => (
            <Link key={tag.name} to={`/archive/?tag=${tag.name}`}>
              {tag.name}
              <span>{tag.count}</span>
            </Link>
          ))}
        </div>
      </Panel>
    </aside>
  )
}
