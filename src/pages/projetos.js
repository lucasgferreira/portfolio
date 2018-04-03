import React from "react";
import {navigateTo} from "gatsby-link";
import PostLink from '../components/post-link.jsx';

const header = () => {
  return (
    <div className="card center-align">
      <div className="card-content">
        <span className="card-title">Projetos</span>
      </div>
      <div className="card-action">
        <button
          onClick={() => navigateTo('/portfolio')}
          className="waves-effect waves-light btn">
          <i className="material-icons left">arrow_back</i>Home</button>
      </div>
    </div>
  );
}

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>);

  return <div className="projetos-bg">
    <div className="container">{header()}
      <div className="row">{Posts}</div>
    </div>
  </div>;
};

export default IndexPage;

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
            code
          }
        }
      }
    }
  }
`;