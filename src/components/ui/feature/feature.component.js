import React from "react"
import styles from "./feature.module.scss"

export default function Feature({ icon, title, text }) {
  return (
    <div className={styles.root}>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
