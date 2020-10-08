import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      sanitySiteSettings {
        title
        image {
          asset {
            fluid(maxWidth: 2048) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return (
    <header className="">
      <div className="flex flex-col items-center pb-6  mb-6">
        <Img
          className="w-full h-64"
          imgStyle={{ objectPosition: "bottom" }}
          fluid={data.sanitySiteSettings.image.asset.fluid}
        />

        <h1 className="flex text-4xl sm:text-5xl py-5">
          <Link to="/" className="text-gray-700 hover:shadow-none">
            {data.sanitySiteSettings.title}
          </Link>
        </h1>
        <nav>
          <Link to="/" className="sm:text-xl  text-gray-700 px-2">
            comTexto
          </Link>
          <span> · </span>
          <Link to="/" className="sm:text-xl text-gray-700 px-2">
            comVerso
          </Link>
          <span> · </span>
          <Link to="/" className="sm:text-xl text-gray-700 px-2">
            comFoto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
