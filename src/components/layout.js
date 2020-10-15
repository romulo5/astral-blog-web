/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <main className="flex mx-2 md:mx-0 md:w-4/5 xl:w-3/5">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
