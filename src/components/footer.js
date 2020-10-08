import React from "react"

const Footer = () => {
  return (
    <footer className="flex mt-2">
      © {new Date().getFullYear()}, construído com
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
