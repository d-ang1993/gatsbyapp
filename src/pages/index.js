import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../components/header.css'
import Header from '../components/Header'
import IndexContent from '../components/IndexContent'

import Footer from '../components/Footer'
import BlogTitle from '../components/BlogTitle'
import '../components/index.css'
import snowman from '../images/snowman.png'


// import BlogPost from './page-2'

import SEO from '../components/seo'

const BlogPost = props => {
  return (
    <li className="blogpost-container">
      <Link to={props.node.slug}>

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
  
      </Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
      <div className="content-page">
      <IndexContent snowman={snowman}/>
      <div className="blog-content-div" id="portfolio">
        <BlogTitle/>
        <ul className="blog-post">
          {data.allContentfulBlogPost.edges.map((edge, id) => (
            <BlogPost node={edge.node} key={id} id={id} />
          ))}
        </ul>
      </div>
  </div>
</Layout>
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
            resize(width: 800, height: 600) {
              src
            }
          }
          publishDate
        }
      }
    }
  }
`
