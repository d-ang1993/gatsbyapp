import React from 'react';
import BlogPost from '../pages/BlogPost'
import BlogTitle from './BlogTitle'

class BlogContent extends React.Component {
  render(){
    return(
      <div className="blog-content-div" id="portfolio">
        <BlogTitle/>
        <ul className="blog-post">
          {this.props.data.allContentfulBlogPost.edges.map((edge, id) => (
            <BlogPost key={id} node={edge.node} key={id} id={id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogContent
