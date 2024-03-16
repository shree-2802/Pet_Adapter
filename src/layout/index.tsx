import React from 'react'
import { components } from '../components';
import { Outlet } from 'react-router-dom';
import styles from "./index.module.scss";
export type layoutType = {
  usertype: string
}
const Layout = ({ usertype }: layoutType) => {
  return (
    <div className={styles.layout}>
      {usertype === 'admin' ? <components.Navbar.AdminNavbar /> : <components.Navbar.UserNavbar />}
      <Outlet />
    </div>
  )
}

export default Layout
