import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import '../components/header.css'
// import BlogPost from './page-2'

import SEO from '../components/seo'

// class BlogPost extends React.Component {
//   render(){
//     return(
//       <li>order
//         {this.props.node.title}
//         {this.props.node.title}
//       </li>
//     )
//   }
// }
const BlogPost = ({node}) => {

  // const
  // const url = `/blog/${node.slug}`
  return (
    <li>
      <Link to = {node.slug}> {node.title}</Link>
      <img src= {node.heroImage.resize.src} alt="double it!" />
      <div> {node.body.childMarkdownRemark.excerpt} </div>
      <br/>
      <div> {node.publishDate} </div>
      <div>{console.log(node)}</div>
      {/* <div>{process.env.CONTENTFUL_SPACE_ID}</div> */}
    </li>

  )
}

const IndexPage = ({data}) => (
  <Layout>
    {/* <img className="imgthis" src={data.allContentfulBlogPost.edges[0].node.heroImage.resize.src} alt="double it!" /> */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul className="blogpost">
      {data.allContentfulBlogPost.edges.map((edge, id)=> <BlogPost node = {edge.node} key = {id} id = {id} />)}
    </ul>
    {/* {console.log(data.allContentfulBlogPost.edges[0].node.heroImage)} */}
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
