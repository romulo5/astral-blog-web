import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AuthorImageQuery {
      sanitySiteSettings {
        title
      }
    }
  `)
  return (
    <footer className="flex flex-col mt-2 bg-gray-800 text-gray-500 h-64 w-full justify-between items-center pt-6">
      <h1 className="flex text-2xl pt-6">
        <Link to="/" className="hover:shadow-none">
          {data.sanitySiteSettings.title}
        </Link>
      </h1>
      <nav className="flex items-center  text-base sm:text-xl text-gray-300 ">
        <Link to="/" className="px-2">
          comTexto
        </Link>
        <span className="text-xs"> {"\u274A"} </span>
        <Link to="/" className="px-2">
          comVerso
        </Link>
        <span className="text-xs"> {"\u274A"} </span>
        <Link to=" " className="px-2">
          comFoto
        </Link>
      </nav>

      <div className="flex flex-col items-center text-xs sm:text-sm pb-1">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300">{"\u2764"}</span> Rômulo Melo
        </p>
        <p>powered by GatsbyJS + SanityIO</p>
      </div>
    </footer>
  )
}

export default Footer
