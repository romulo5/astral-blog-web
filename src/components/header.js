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
        author {
          image {
            alt
            ...SanityImage
          }
        }
      }
    }
  `)

  // const [stickyHeader, setStickyHeader] = useState(false)

  const [isSticky, setSticky] = useState(false)
  const [height, setHeight] = useState({})
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
    const navbar = document.getElementById("navbar")
    const header = document.getElementById("header")
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <header>
      <div
        className={`${
          isSticky ? "fixed bg-white z-50 h-16 " : "pb-6 flex-col"
        } transform ease-linear flex  items-center  shadow-2xl  mb-6 w-full`}
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
                isSticky ? "hidden" : "flex"
              } w-full object-contain xl:object-cover xl:h-64 object-center `}
            />
          )}
        <Link
          to="/"
          className={`${isSticky ? "hover:shadow-none px-5" : "hidden"}`}
        >
          <img
            src={
              data.sanitySiteSettings.author.image &&
              imageUrlFor(buildImageObj(data.sanitySiteSettings.author.image))
                .width(40)
                .height(40)
                .url()
            }
            alt={data.sanitySiteSettings.author.image.alt}
            className="transition duration-300 ease-in-out sm:scale-125 transform hover:scale-150 rounded-full m-0"
          />
        </Link>
        <div
          className={`flex w-full ${
            isSticky
              ? "text-base pr-5  "
              : "  md:flex-row flex-col justify-evenly items-center"
          }  `}
        >
          {" "}
          <h1
            className={`flex ${
              isSticky
                ? "text-base pr-5 hidden sm:flex"
                : "  text-3xl sm:text-4xl"
            }  py-5 text-gray-700 `}
          >
            <Link to="/" className="hover:shadow-none">
              {data.sanitySiteSettings.title}
            </Link>
          </h1>
          <nav
            id="navbar"
            className={`flex  justify-self-center  text-gray-700  ${
              isSticky ? "self-center text-sm sm:text-base" : "sm:text-xl "
            } `}
          >
            <Link to="/" className="px-2">
              comTexto
            </Link>
            <span> · </span>
            <Link to="/" className="px-2">
              comVerso
            </Link>
            <span> · </span>
            <Link to=" " className="px-2">
              comFoto
            </Link>
          </nav>
        </div>
      </div>
      <div
        className={` ${isSticky ? "flex" : "hidden "} `}
        style={{ height: height.heightValue }}
      />
    </header>
  )
}

export default Header
