import React from "react"
import styles from "./info-block.module.scss"
import classNames from "classnames"

export default function InfoBlock({ heading, subheading, image, isReverse }) {
  const rootStyles = isReverse
    ? classNames([styles.root, styles.reverse])
    : styles.root
  return (
    <div className={rootStyles}>
      <div className={styles.content}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.subheading}>{subheading}</p>
      </div>
      <div className={styles.image}>{image}</div>
    </div>
  )
}
