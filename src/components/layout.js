/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     sanitySiteSettings {
  //       title
  //       image {
  //         asset {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <main className="flex w-3/4 bg-green-400">{children}</main>
        <footer className="flex mt-2">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
