import React from 'react'
import { Footer } from '../components/HomePage/Footer.jsx'
import { Pagination } from '../components/HomePage/Pagination.jsx'
import { PostList } from '../components/HomePage/PostList.jsx'
import { posts } from '../data/siteData.js'
import styles from '../components/HomePage/HomePage.module.css'

export function HomePage() {
  return (
    <section className={styles.contentColumn}>
      <PostList posts={posts} />
      <Pagination current={1} total={1} />
      <Footer />
    </section>
  )
}
