import React from "react"
import Layout from "~/components/Layout"
import HeroSection from "~/components/sections/hero/hero.section"
import SEO from "~/components/SEO"
import FeaturesSection from "~/components/sections/features/features.section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturesSection />
  </Layout>
)

export default IndexPage
