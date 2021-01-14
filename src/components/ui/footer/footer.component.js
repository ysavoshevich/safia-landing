import React from "react"
import styles from "./footer.module.scss"
import Facebook from "~/assets/images/fb.svg"
import Twitter from "~/assets/images/tw.svg"
import Instagram from "~/assets/images/ig.svg"
import LinkedIn from "~/assets/images/ln.svg"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <Facebook className={styles.icon} />
            <Twitter className={styles.icon} />
            <Instagram className={styles.icon} />
            <LinkedIn className={styles.icon} />
          </div>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>
              Terms & Conditions
            </Link>
            <Link to="/" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
