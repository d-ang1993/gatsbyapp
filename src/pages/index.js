import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import '../components/header.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Box from '../components/Box'
import '../components/index.css'
import snowman from '../images/snowman.png'
import { GiBlackBelt } from 'react-icons/gi'
import { IoIosBug } from 'react-icons/io'
import { MdCloud } from 'react-icons/md'
import { GiPumpkinMask } from 'react-icons/gi'
import { GiGroundSprout } from 'react-icons/gi'
import { DiReact } from 'react-icons/di'
import { DiRuby } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3Full } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'

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
    <Layout>
      <div className="text-content-div" id="portfolio">
        <div className="container">
          <div className="container-title">
            <h1>About</h1>
            <div className="title-line" />
          </div>
          <div className="container-attributes">
            <ul>
              <li>
                <div className="container-icon-case">
                  <MdCloud
                    className="attribute-case"
                    size={180}
                    color="#e31b6d"
                  />
                  <GiBlackBelt className="attribute" size={75} color="white" />
                </div>
              </li>
              <li>
                <div className="container-icon-case">
                  <MdCloud
                    className="attribute-case"
                    size={180}
                    color="#e31b6d"
                  />
                  <GiPumpkinMask
                    className="attribute"
                    size={80}
                    color="white"
                  />
                </div>
              </li>
              <li>
                <div className="container-icon-case">
                  <MdCloud
                    className="attribute-case"
                    size={180}
                    color="#e31b6d"
                  />
                  <IoIosBug className="attribute" size={80} color="white" />
                </div>
              </li>

              <li>
                <div className="container-icon-case">
                  <MdCloud
                    className="attribute-case"
                    size={180}
                    color="#e31b6d"
                  />
                  <GiGroundSprout
                    className="attribute"
                    size={80}
                    color="white"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="container-description">
            <AboutMe />
          </div>
          <div className="box-image">
            <Box img={snowman} />
          </div>
            <div className="container-skill">
              <div className="skill-stack">
                <DiPostgresql size={100} color="#090a0f" className="skill-stack-icon"/>
                <h1>Postgresql</h1>
              </div>
              <div className="skill-stack">
                <DiCss3Full size={100} color="#090a0f" className="skill-stack-icon"/>
                <h1>CSS</h1>
              </div>
              <div className="skill-stack">
                <DiRuby size={100} color="#090a0f" className="skill-stack-icon" />
                <h1>Ruby</h1>
              </div>
              <div className="skill-stack">
                <DiJavascript1 size={100} color="#090a0f" className="skill-stack-icon"/>
                <h1>Javascript</h1>
              </div>
              <div className="skill-stack">
                <DiReact size={100} color="#090a0f" className="skill-stack-icon"/>
                <h1>React</h1>
              </div>

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
