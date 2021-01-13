import React from "react"
import PropTypes from "prop-types"
import Header from "~/components/ui/header/header.component.js"
import "~/styles/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
