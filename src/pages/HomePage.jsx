import React, { useState } from 'react'
import { Footer } from '../components/HomePage/Footer.jsx'
import { Pagination } from '../components/HomePage/Pagination.jsx'
import { PostList } from '../components/HomePage/PostList.jsx'
import { posts } from '../data/siteData.js'
import styles from '../components/HomePage/HomePage.module.css'

export function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(100)

  return (
    <section className={styles.contentColumn}>
      <PostList posts={posts} />
      <Pagination current={currentPage} total={totalPage} onPageChange={setCurrentPage} />
      <Footer />
    </section>
  )
}
