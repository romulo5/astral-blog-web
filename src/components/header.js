import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { buildImageObj } from "../utils/helpers"
import { imageUrlFor } from "../utils/image-url"

const Header = () => {
  const data = useStaticQuery(graphql`
    fragment SanityImage on SanityMainImage {
      crop {
        _key
        _type
        top
        bottom
        left
        right
      }
      hotspot {
        _key
        _type
        x
        y
        height
        width
      }
      asset {
        _id
      }
    }
    query SiteTitleQuery {
      sanitySiteSettings {
        title
        image {
          alt
          ...SanityImage
        }
      }
    }
  `)

  // const [stickyHeader, setStickyHeader] = useState(false)

  const [isSticky, setSticky] = useState(false)
  const [height, setHeight] = useState({})
  const [offset, setOffset] = useState(0)
  // const changeHeader = () => {
  //   if (window.scrollY > 200) {
  //     setStickyHeader(true)
  //   } else {
  //     setStickyHeader(false)
  //   }
  //   console.log(stickyHeader)
  // }
  // window.addEventListener("scroll", changeHeader)

  const handleScroll = () => {
    let off = 0
    if (
      window.pageYOffset > navbar.offsetTop
      // window.pageYOffset > header.nextElementSibling.offsetHeight
    ) {
      // setOffset(header.nextElementSibling.offsetHeight)
      setSticky(true)
      off = header.nextElementSibling.offsetHeight - navbar.offsetHeight
      // console.log(`navbar: ${navbar.offsetTop}`)
    } else {
      setHeight({ heightValue: `${header.offsetHeight}px` })
    }
    if (window.pageYOffset < off) {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    const navbar = document.getElementById("navbar")
    const header = document.getElementById("header")
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <>
      <header className={`${isSticky ? " " : ""} h-auto flex w-full `}>
        <div
          className={`  ${
            isSticky ? "fixed bg-white z-50 h-16  " : ""
          } transform ease-linear flex flex-col justify-end items-center pb-6  shadow-2xl  mb-6 w-full`}
          id="header"
        >
          {data.sanitySiteSettings.image &&
            data.sanitySiteSettings.image.asset && (
              <img
                src={imageUrlFor(buildImageObj(data.sanitySiteSettings.image))
                  .height(300)
                  .auto("format")
                  .url()}
                alt={data.sanitySiteSettings.image.alt}
                className={` ${
                  isSticky ? "" : " "
                } w-full object-contain xl:object-cover xl:h-64 object-center`}
              />
            )}
          <h1 className="flex text-4xl sm:text-5xl py-5">
            <Link
              to="/"
              className={` ${
                isSticky ? "hidden " : " "
              } text-gray-700 hover:shadow-none`}
            >
              {data.sanitySiteSettings.title}
            </Link>
          </h1>
          <nav id="navbar" className={` ${isSticky ? " " : " "} flex `}>
            <Link to="/" className="sm:text-xl  text-gray-700 px-2">
              comTexto
            </Link>
            <span> · </span>
            <Link to="/" className="sm:text-xl text-gray-700 px-2">
              comVerso
            </Link>
            <span> · </span>
            <Link to=" " className="sm:text-xl text-gray-700 px-2">
              comFoto
            </Link>
          </nav>
        </div>
        <div
          className={` ${isSticky ? "flex" : "hidden "} `}
          style={{ height: height.heightValue }}
        />
      </header>
    </>
  )
}

export default Header
