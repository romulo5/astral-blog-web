/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../utils/helpers"
import PostPreview from "./postPreview"

const PostList = () => {
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
    query {
      comTexto: allSanityComTexto(limit: 6) {
        edges {
          node {
            id
            title
            publishedAt
            slug {
              current
            }
            mainImage {
              alt
              ...SanityImage
            }
            authors {
              author {
                name
                image {
                  ...SanityImage
                  alt
                }
              }
            }
            _rawExcerpt
          }
        }
      }
      comVerso: allSanityComVerso(limit: 6) {
        edges {
          node {
            id
            title
            publishedAt
            slug {
              current
            }
            mainImage {
              alt
              ...SanityImage
            }
            authors {
              author {
                name
                image {
                  ...SanityImage
                  alt
                }
              }
            }
            _rawExcerpt
          }
        }
      }

      comFoto: allSanityComFoto(limit: 6) {
        edges {
          node {
            id
            title
            publishedAt
            slug {
              current
            }
            authors {
              author {
                name
                image {
                  alt
                  ...SanityImage
                }
              }
            }
            _rawExcerpt
            images {
              images {
                alt
                ...SanityImage
              }
            }
          }
        }
      }
    }
  `)
  const comTexto = (data || {}).comTexto
    ? mapEdgesToNodes(data.comTexto)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
        .map(post => ({ ...post, category: "comTexto" }))
    : []
  const comVerso = (data || {}).comVerso
    ? mapEdgesToNodes(data.comVerso)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
        .map(post => ({ ...post, category: "comVerso" }))
    : []
  const comFoto = (data || {}).comFoto
    ? mapEdgesToNodes(data.comFoto)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
        .map(post => ({ ...post, category: "comFoto" }))
    : []
  const posts = comTexto
    .concat(comVerso)
    .concat(comFoto)
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))

  return (
    <div className="flex flex-col xl:w-3/4">
      {/* <h1 className="pb-3">Posts recentes</h1> */}
      {posts &&
        posts.map(post => {
          console.log(post)
          return <PostPreview key={post.id} {...post} />
        })}
    </div>
  )
}

export default PostList
