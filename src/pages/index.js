import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import '../components/header.css'
import Header from '../components/Header'
import Box from '../components/Box'
import '../components/index.css'
import snowman from '../images/snowman.png'
import { FaBeer } from 'react-icons/fa'
import { IoIosBug } from 'react-icons/io'

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
    <Header />
    {/* <Layout/> */}
    <div className="text-content-div" id="portfolio">
      <div className="container">
        <div className="container-title">
          <h1>About</h1>
        </div>
        <div className="container-attributes">
          <ul>
            <div>
              <IoIosBug size={100} />
            </div>
            <div>
              <IoIosBug size={100} />
            </div>
            <div>
              <IoIosBug size={100} />
            </div>
            <div>
              <IoIosBug size={100} />
            </div>
            <div>
              <IoIosBug size={100} />
            </div>
          </ul>
        </div>
        <div className="container-description">
          <h1>My name is Daniel and I'm a Web Developer</h1>
          <p>
            I know a picture means 1000 words so i won't quite explain what I'm
            doing in that picture... But this snowman was built through
            procrasination and a beautiful snowfall. Fast-forward a few hours
            after this picture was taken, I somehow gained popularity and became
            the "snow-man" guy for a day or two. I'm someone who loves change
            and I really love to pursue
          </p>
        </div>

        {/* <img className="snowman" src={snowman} alt="snowman!"/> */}
        <div className="box-image">
          <Box img={snowman} />
        </div>
      </div>
    </div>
    <div className="blog-content-div">
      <ul className="blogpost">
        {data.allContentfulBlogPost.edges.map((edge, id) => (
          <BlogPost key={id} node={edge.node} key={id} id={id} />
        ))}
      </ul>
    </div>
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
