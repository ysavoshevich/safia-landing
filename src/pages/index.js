import React from "react"
import Layout from "~/components/Layout"
import HeroSection from "~/components/sections/hero/hero.section"
import SEO from "~/components/SEO"
import FeaturesSection from "~/components/sections/features/features.section"
import TrialSection from "~/components/sections/trial/trial.section"
import InfoSection from "~/components/sections/info/info.section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturesSection />
    <TrialSection />
    <InfoSection />
  </Layout>
)

export default IndexPage
