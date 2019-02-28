import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import '../components/header.css'
import Header from '../components/Header'
import Image from '../components/image'
import '../components/index.css'
// import BlogPost from './page-2'

import SEO from '../components/seo'

const BlogPost = ({node}) => {


  return (
      <div>
        <Link to = {node.slug}> {node.title}</Link>
        <img src= {node.heroImage.resize.src} alt="double it!" />
        <div> {node.body.childMarkdownRemark.excerpt} </div>
        <br/>
        <div className="blog-post-date"> {node.publishDate} </div>
        <div>{console.log(node)}</div>
      </div>
  )
}

const IndexPage = ({data}) => (
  <div>
    <Header/>
    <div className="text-content-div">
      <div className="text-content">
        <div className="container">
          <h3>WHO WE ARE</h3>
          <h1>TELL THE WORLD ABOUT YOURSELF</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
          </p>
          <div className="box">
          </div>
        </div>
      </div>
    </div>
    <div className="text-content-div">
      <ul className="blogpost">
        {data.allContentfulBlogPost.edges.map((edge, id)=> <li><BlogPost node = {edge.node} key = {id} id = {id} /></li>)}
      </ul>
    </div>
  </div>
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
