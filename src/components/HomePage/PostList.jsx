import React from 'react'
import { PostCard } from './PostCard.jsx'
import styles from './PostList.module.css'

export function PostList({ posts }) {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
