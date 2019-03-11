import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Image from '../components/image'
import Header from '../components/Header'
import './blog-post.css'
import Helmet from 'react-helmet'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, body, heroImage, publishDate } = this.props.data.contentfulBlogPost
    // console.log(heroImage.fluid.tracedSVG)
    return (
      <Layout>
        <Nav />
        <Helmet title={title} />
        <div className="wrapper">
          <div className="hero">
            <img src={heroImage.resize.src} alt={title} />
          </div>
          <h1 className="section-headline"> {title} </h1>
          <p>{publishDate}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        resize(width: 1300, height: 300) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
