import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import SideBar from "../components/sideBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex ">
      <PostList />
      <SideBar />
    </div>
  </Layout>
)

export default IndexPage
