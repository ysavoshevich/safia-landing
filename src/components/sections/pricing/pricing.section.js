import React from "react"
import styles from "./pricing.module.scss"
import TextWithIcon from "~/components/ui/text-with-icon/text-with-icon.component"
import Checkmark from "~/assets/images/checkmark.svg"
import PricingBlock from "~/components/ui/pricing-block/pricing.component"

const TextWithCheckmark = ({ text }) => {
  return <TextWithIcon icon={<Checkmark />} text={text} />
}

const DefaultItems = () => {
  return (
    <>
      <TextWithCheckmark text="7,000,000+ Events" />
      <TextWithCheckmark text="4 Custom Domains" />
      <TextWithCheckmark text="Dedicated Support Agent" />
      <TextWithCheckmark text="12 months Data History" />
      <TextWithCheckmark text="1 Dedicated SSL" />
    </>
  )
}

export default function PricingSection() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.top}>
          <p>Saflow</p>
          <h3>Pricing</h3>
        </div>
        <div className={styles.prices}>
          <PricingBlock currency="$" price="0" plan="Free">
            <DefaultItems />
          </PricingBlock>
          <PricingBlock currency="$" price="23" plan="Basic" active={true}>
            <DefaultItems />
          </PricingBlock>
          <PricingBlock currency="$" price="59" plan="Premium">
            <DefaultItems />
          </PricingBlock>
        </div>
      </div>
    </section>
  )
}
