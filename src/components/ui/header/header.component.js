import React from "react"
import Logo from "~/components/ui/logo/logo.component.js"
import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.root}>
    <div className={styles.container}>
      <Logo />
      <button className={styles.button}>Login</button>
    </div>
  </header>
)

export default Header
