import React from 'react'
import styles from './Pagination.module.css'

function getPageItems(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  const first = 1
  const last = total
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  const pages = [first]

  if (start > 2) {
    pages.push('start-ellipsis')
  }

  for (let page = start; page <= end; page += 1) {
    pages.push(page)
  }

  if (end < total - 1) {
    pages.push('end-ellipsis')
  }

  pages.push(last)
  return pages
}

export function Pagination({ current, total, onPageChange = () => {} }) {
  const currentPage = Math.min(Math.max(current, 1), Math.max(total, 1))
  const pageItems = getPageItems(currentPage, total)
  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= total

  const handlePageChange = (page) => {
    if (page === currentPage || page < 1 || page > total) {
      return
    }

    onPageChange(page)
  }

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.pageButton}
        type="button"
        aria-label="Previous page"
        disabled={isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14 7l-5 5 5 5" />
        </svg>
      </button>

      {pageItems.map((item) => (
        typeof item === 'number' ? (
          <button
            key={item}
            className={`${styles.pageButton} ${item === currentPage ? styles.pageCurrent : ''}`}
            type="button"
            aria-current={item === currentPage ? 'page' : undefined}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        ) : (
          <span key={item} className={styles.pageEllipsis} aria-hidden="true">...</span>
        )
      ))}

      <button
        className={styles.pageButton}
        type="button"
        aria-label="Next page"
        disabled={isLastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M10 7l5 5-5 5" />
        </svg>
      </button>
    </nav>
  )
}
