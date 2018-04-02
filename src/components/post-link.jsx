import React from "react";
import Link from "gatsby-link";
import {Card, CardTitle} from "react-materialize"

const PostLink = ({post}) => (

  <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={post.frontmatter.image}/>

      </div>
      <div className="card-content">

        <span style={{
          fontSize: '14pt'
        }}>
          <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Link>
        </span>

        <p>
          <span>{post.frontmatter.date}</span>
        </p>
        <p>

          <span className="green-text valign-wrapper">
            <i className="material-icons icon-btn">code</i>
            {post.frontmatter.code}</span>
        </p>

      </div>

    </div>
  </div>
);

export default PostLink;