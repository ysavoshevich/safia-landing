import React from "react"
import styles from "./button.module.scss"
import ArrowRight from "~/assets/images/arrow-right.svg"
import classNames from "classnames"

export default function Button({ text, variant }) {
  const buttonStyles = variant
    ? classNames(styles.button, styles[variant])
    : styles.button
  return (
    <button className={buttonStyles}>
      {text} <ArrowRight />
    </button>
  )
}
