import React from 'react'
import styles from "./paging.module.css"
function Pagination() {
  return (
  <div className={styles.container}>
      <h1>Pagination</h1>
      <div className={styles.pagination}>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#" className={styles.active}>3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  )
}

export default Pagination