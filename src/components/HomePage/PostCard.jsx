import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export function PostCard({ post }) {
  return (
    <article className={`${styles.postCard} ${post.cover ? styles.hasCover : ''}`}>
      {post.cover && (
        <Link className={styles.postCover} to={post.href} aria-label={post.title}>
          <img src={post.cover} alt={`Cover Image of ${post.title}`} />
        </Link>
      )}

      <div className={styles.postBody}>
        <Link className={styles.postTitle} to={post.href}>
          {post.title}
          <span>&gt;</span>
        </Link>

        <div className={styles.postMeta} aria-label="Post metadata">
          <span>* {post.date}</span>
          <Link to={`/archive/?category=${post.category}`}>[] {post.category}</Link>
          <span className={styles.postTags}>
            # {post.tags.map((tag) => (
              <Link key={tag} to={`/archive/?tag=${tag}`}>{tag}</Link>
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

      <Link className={styles.enterButton} to={post.href} aria-label={post.title}>&gt;</Link>
    </article>
  )
}
