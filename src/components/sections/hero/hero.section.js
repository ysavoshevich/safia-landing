import React from "react"
import styles from "./hero.module.scss"
import Dashboard from "~/assets/images/hero-dashboard.svg"
import Google from "~/assets/images/google.svg"
import Amazon from "~/assets/images/amazon.svg"
import Netflix from "~/assets/images/netflix.svg"
import Slack from "~/assets/images/slack.svg"
import Zoom from "~/assets/images/zoom.svg"

export default function HeroSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={"container"}>
          <div className={styles.top}>
            <h1>Landing Template for Startups</h1>
            <div>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <button>Pricing and Plans</button>
            </div>
          </div>
          <Dashboard className={styles.dashboard} />
          <div className={styles.icons}>
            <Google className={styles.icon} />
            <Amazon className={styles.icon} />
            <Netflix className={styles.icon} />
            <Slack className={styles.icon} />
            <Zoom className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  )
}
