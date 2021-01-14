import React from "react"
import styles from "./pricing.module.scss"
import Button from "~/components/ui/button/button.component"
import classNames from "classnames"

export default function PricingBlock({
  children,
  active,
  price,
  plan,
  currency,
}) {
  const rootStyles = active
    ? classNames(styles.root, styles.active)
    : styles.root
  return (
    <div className={rootStyles}>
      <p className={styles.plan}>{plan}</p>
      <div className={styles.price}>
        <span className={styles.sign}>{currency}</span>
        <p className={styles.number}>{price}</p>
      </div>
      <div className={styles.bulletPoints}>{children}</div>

      <Button text="Get Started" variant={active ? "blue" : "grey"} />
    </div>
  )
}
