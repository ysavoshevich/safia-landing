import React from "react"
import Button from "~/components/ui/button/button.component"
import styles from "./trial.module.scss"
import classNames from "classnames"

export default function TrialSection({ inverted }) {
  const rootStyles = inverted
    ? classNames(styles.root, styles.inverted)
    : styles.root
  return (
    <section className={rootStyles}>
      <div className="container">
        <div className={styles.block}>
          <div className={styles.textWrapper}>
            <p className={styles.subheading}>Ready to start?</p>
            <h2 className={styles.heading}>Start your free trial today!</h2>
          </div>
          <Button text="Get Started" />
        </div>
      </div>
    </section>
  )
}
