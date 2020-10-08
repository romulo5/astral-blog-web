/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import BasePortableText from "@sanity/block-content-to-react"
import clientConfig from "../../client-config"

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    //   mainImage: Figure
  },
}

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
)

export default PortableText
