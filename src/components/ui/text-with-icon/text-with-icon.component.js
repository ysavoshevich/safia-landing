import React from "react"
import styles from "./text-with-icon.module.scss"

export default function TextWithIcon({ text, icon }) {
  return (
    <div className={styles.root}>
      {icon}
      <p>{text}</p>
    </div>
  )
}
