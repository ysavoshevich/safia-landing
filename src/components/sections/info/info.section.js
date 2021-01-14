import React from "react"
import styles from "./info.module.scss"
import InfoBlock from "~/components/ui/info-block/info-block.component"
import InfoGraphic1 from "~/assets/images/info/info-graphic-1.svg"
import InfoGraphic2 from "~/assets/images/info/info-graphic-2.svg"
import InfoGraphic3 from "~/assets/images/info/info-graphic-3.svg"

const lorem =
  "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results."

export default function InfoSection() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.top}>
          <p>Saflow</p>
          <h3>How does it work?</h3>
        </div>
        <InfoBlock
          heading="How does it work?"
          subheading={lorem}
          image={<InfoGraphic1 />}
          isReverse={true}
        />
        <InfoBlock
          heading="How does it work?"
          subheading={lorem}
          image={<InfoGraphic2 />}
        />
        <InfoBlock
          heading="How does it work?"
          subheading={lorem}
          image={<InfoGraphic3 />}
          isReverse={true}
        />
      </div>
    </section>
  )
}
