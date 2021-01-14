import React from "react"
import Feature from "~/components/ui/feature/feature.component"
import styles from "./features.module.scss"
import Rectangles from "~/assets/images/features/rectangles.svg"
import Discussion from "~/assets/images/features/discussion.svg"
import Circles from "~/assets/images/features/circles.svg"
import Stats from "~/assets/images/features/stats.svg"
import Profiles from "~/assets/images/features/profiles.svg"
import Folders from "~/assets/images/features/folders.svg"

const lorem =
  "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."

export default function FeaturesSection() {
  return (
    <section className={styles.root}>
      <div className="container" style={{ maxWidth: "840px" }}>
        <h2 className={styles.heading}>Features</h2>
        <p className={styles.subheading}>
          Our landing page template works on all devices, so you only have to
          set.
        </p>
        <div className={styles.features}>
          <Feature icon={<Rectangles />} title={"Dashboard"} text={lorem} />
          <Feature icon={<Discussion />} title={"Comment"} text={lorem} />
          <Feature
            icon={<Circles />}
            title={"Tailored Comments"}
            text={lorem}
          />
          <Feature icon={<Stats />} title={"Statistic"} text={lorem} />
          <Feature icon={<Profiles />} title={"Profiles"} text={lorem} />
          <Feature icon={<Folders />} title={"Folders"} text={lorem} />
        </div>
      </div>
    </section>
  )
}
