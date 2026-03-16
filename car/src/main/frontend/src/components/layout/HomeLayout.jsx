import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styles from './HomeLayout.module.css'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout