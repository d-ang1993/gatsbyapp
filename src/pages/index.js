import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


import SEO from '../components/seo'

const BlogPost = ({node}) => {
  // const url = `/blog/${node.slug}`
  return (
    <li>
      <Link to = {node.slug}> {node.title}</Link>
      <img src= {node.heroImage.resize.src} alt="double it!" />
      <div> {node.body.childMarkdownRemark.excerpt} </div>
      <div> {node.publishDate} </div>
    </li>

  )
}

const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul className="blogpost">
      {/* {console.log(data)} */}
      {data.allContentfulBlogPost.edges.map((edge, id)=> <BlogPost node = {edge.node} key = {id} />)}
    </ul>
  </Layout>
)


export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost (
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort: { fields: [publishDate], order: DESC }
      ) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
           resize(width: 300, height: 300) {
             src
           }
          }
          publishDate
        }
      }
    }
  }
`
