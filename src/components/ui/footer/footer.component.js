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
            <a href="https://www.facebook.com/" className={styles.icon}>
              <Facebook />
            </a>
            <a href="https://twitter.com/" className={styles.icon}>
              <Twitter />
            </a>
            <a href="http://instagram.com/" className={styles.icon}>
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/" className={styles.icon}>
              <LinkedIn />
            </a>
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
