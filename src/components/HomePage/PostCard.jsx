import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export function PostCard({ post }) {
  return (
    <Link className={`${styles.postCard} ${post.cover ? styles.hasCover : ''}`} to={post.href}>
      {post.cover && (
        <div className={styles.postCover}>
          <img src={post.cover} alt={`Cover Image of ${post.title}`} />
        </div>
      )}

      <div className={styles.postBody}>
        <h2 className={styles.postTitle}>
          {post.title}
        </h2>

        <div className={styles.postMeta} aria-label="Post metadata">
          <span>* {post.date}</span>
          <span>[] {post.category}</span>
          <span className={styles.postTags}>
            # {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </div>

        <p className={styles.postExcerpt}>{post.excerpt}</p>

        <div className={styles.postStats}>
          <span>{post.words} words</span>
          <span>|</span>
          <span>{post.minutes} minute{post.minutes > 1 ? 's' : ''}</span>
        </div>
      </div>

      <div className={styles.enterButton} aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M10 7l5 5-5 5" />
        </svg>
      </div>
    </Link>
  )
}
