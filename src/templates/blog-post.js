import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const {
      title,
      body
    } = this.props.data.contentfulBlogPost
    return (
      <div>
        <Layout>
          <h1 className="blog-title">  { title } </h1>
          <div dangerouslySetInnerHTML = {{__html: body.childMarkdownRemark.html}} />

        </Layout>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
