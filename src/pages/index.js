import React from "react"
import Layout from "~/components/Layout"
import HeroSection from "~/components/sections/hero/hero.section"
import SEO from "~/components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
