import React from "react"
import styles from "./trial.module.scss"
import ArrowRight from "~/assets/images/arrow-right.svg"

export default function TrialSection() {
  return (
    <section className={styles.root}>
      <div className="container" style={{ maxWidth: "840px" }}>
        <div className={styles.block}>
          <p className={styles.subheading}>Ready to start?</p>
          <h2 className={styles.heading}>Start your free trial today!</h2>
          <button className={styles.button}>
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
