import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../components/header.css'
import Header from '../components/Header'
import IndexContent from '../components/IndexContent'
import BlogContent from '../components/BlogContent'
import Footer from '../components/Footer'
import '../components/index.css'
import snowman from '../images/snowman.png'

// import BlogPost from './page-2'

import SEO from '../components/seo'

const BlogPost = props => {
  return (
    <div className="blogpost-container">
      <Link to={props.node.slug}>
        <li>
          <div className="blogpost-content">
            <img
              className="blogpost-image"
              src={props.node.heroImage.resize.src}
              alt="double it!"
            />
            <div className="content-block">
              <p className="content-block-title">{props.node.title}</p>
              <p className="content-block-description">
                {props.node.body.childMarkdownRemark.excerpt}
              </p>
              {/* <div className="blog-post-date"> {props.node.publishDate} </div> */}
            </div>
          </div>
        </li>
      </Link>
    </div>
  )
}

const IndexPage = ({ data }) => (
  <div className="content-page">
    <Layout>
    {/* <Header /> */}
      <IndexContent snowman={snowman}/>
      <BlogContent data={data} id="portfolio"/>
    </Layout>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
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
