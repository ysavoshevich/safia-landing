import React from "react"
import styles from "./info.module.scss"
import InfoBlock from "~/components/ui/info-block/info-block.component"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import InfoGraphic1 from "~/assets/images/info/info-graphic-1.svg"
// import InfoGraphic2 from "~/assets/images/info/info-graphic-2.svg"
// import InfoGraphic3 from "~/assets/images/info/info-graphic-3.svg"

const lorem =
  "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results."

export default function InfoSection() {
  const data = useStaticQuery(graphql`
    query {
      InfoGraphic1: file(
        relativePath: { eq: "images/info/info-graphic-1.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      InfoGraphic2: file(
        relativePath: { eq: "images/info/info-graphic-2.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      InfoGraphic3: file(
        relativePath: { eq: "images/info/info-graphic-3.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
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
          image={<Image fluid={data.InfoGraphic1.childImageSharp.fluid} />}
          isReverse={true}
        />
        <InfoBlock
          heading="How does it work?"
          subheading={lorem}
          image={<Image fluid={data.InfoGraphic2.childImageSharp.fluid} />}
        />
        <InfoBlock
          heading="How does it work?"
          subheading={lorem}
          image={<Image fluid={data.InfoGraphic3.childImageSharp.fluid} />}
          isReverse={true}
        />
      </div>
    </section>
  )
}
