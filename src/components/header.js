import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      sanitySiteSettings {
        title
        image {
          asset {
            url
          }
        }
      }
    }
  `)
  return (
    <header className="">
      <div className="flex flex-col items-center py-6  mb-6">
        <img
          className="flex h-64 w-full"
          src={data.sanitySiteSettings.image.asset.url}
          alt=""
        />
        <h1 className="flex ">
          <Link to="/" className="text-gray-600">
            {data.sanitySiteSettings.title}
          </Link>
        </h1>
        <nav>
          <Link to="/" className="text-gray-600 px-2">
            comTexto
          </Link>
          <Link to="/" className="text-gray-600 px-2">
            comVerso
          </Link>
          <Link to="/" className="text-gray-600 px-2">
            comFoto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
