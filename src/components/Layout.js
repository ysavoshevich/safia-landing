import React from "react"
import PropTypes from "prop-types"
import Header from "~/components/ui/header/header.component.js"
import "~/styles/index.scss"
import Footer from "~/components/ui/footer/footer.component"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
