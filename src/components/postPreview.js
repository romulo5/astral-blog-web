/* eslint-disable no-underscore-dangle */
import React from "react"
import { format } from "date-fns"
import { pt } from "date-fns/esm/locale"
import { Link } from "gatsby"
import { buildImageObj } from "../utils/helpers"
import { imageUrlFor } from "../utils/image-url"
import PortableText from "./portableText"

const PostPreview = post => {
  const date = new Date(post.publishedAt)
  return (
    <div key={post.id} className="p-2 mb-2">
      <article className="">
        <div className="flex transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl ">
          <div className="flex justify-center items-center w-2/5 ">
            <Link to="#" className="hover:shadow-none">
              {post.mainImage && post.mainImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(post.mainImage))
                    .width(290)
                    .height(280)
                    .auto("format")
                    .url()}
                  alt={post.mainImage.alt}
                  className=" m-0 rounded-lg "
                />
              )}
              {post.images && post.images.images[0].asset && (
                <img
                  src={imageUrlFor(buildImageObj(post.images.images[0]))
                    .width(290)
                    .height(280)
                    .auto("format")
                    .url()}
                  alt={post.images.images[0].alt}
                  className=" m-0 rounded-lg "
                />
              )}
            </Link>
          </div>
          <div className="flex flex-col justify-between p-4 w-3/5">
            <div className="flex  mb-3">
              <Link to="#" className="hover:shadow-none">
                <span
                  //   className="transition-colors duration-300 py-1 md:px-2
                  //  text-gray-600 text-sm hover:bg-gray-700 hover:text-white rounded-lg"
                  className={`flex transition duration-300 ease-in-out transform hover:scale-110  py-1 px-2 
                ${
                  post.category === "comFoto"
                    ? "bg-orange-700"
                    : post.category === "comVerso"
                    ? "bg-blue-800"
                    : "bg-teal-800"
                }
                      text-white text-xs  hover:opacity-75 rounded-lg`}
                >
                  {post.category}
                </span>
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="#" className="hover:shadow-none ">
                <h4 className="hover:text-gray-600 text-xl">{post.title}</h4>
              </Link>
            </div>
            {post._rawExcerpt && (
              <div className="hidden md:flex mb-3 text-sm text-gray-700">
                <PortableText blocks={post._rawExcerpt} />
              </div>
            )}
            <div className="flex ">
              <div className="hidden md:flex justify-center items-center">
                <Link to="#" className="hover:shadow-none ">
                  <img
                    src={
                      post.authors[0].author.image &&
                      imageUrlFor(buildImageObj(post.authors[0].author.image))
                        .width(50)
                        .height(50)
                        .url()
                    }
                    alt={post.authors[0].author.image.alt}
                    className="transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-125 rounded-full m-0"
                  />
                </Link>
              </div>
              <div className="flex justify-between md:flex-col md:pl-6 w-full">
                <div className="flex text-gray-600 text-xs md:text-sm hover:text-gray-800">
                  <Link to="#" className="hover:shadow-none ">
                    <p> {post.authors[0].author.name}</p>
                  </Link>
                </div>
                <div className="flex md:hidden text-gray-500 text-xs md:text-sm">
                  {format(date, "dd'/'MM'/'yyyy'", { locale: pt })}
                </div>
                <div className="hidden md:flex text-gray-500 text-xs md:text-sm">
                  {format(date, "dd'  de 'MMMM ' de 'yyyy'", { locale: pt })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PostPreview
