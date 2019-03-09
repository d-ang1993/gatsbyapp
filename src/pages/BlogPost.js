import React from 'react'
import { Link, graphql } from 'gatsby'


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

export default BlogPost
