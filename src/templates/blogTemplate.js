import React from "react";

const header = () => {
  return (
    <div className="card">
      <div className="card-content">
        <a href="https://github.com/lucasgferreira"><span className="card-title">https://github.com/lucasgferreira</span></a>
      </div>
      <div className="card-action">
        <a className="waves-effect waves-light btn" href="/projetos/">
          <i className="material-icons left">arrow_back</i>Projetos</a>
      </div>
    </div>
  );
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container container">
    {header()}
      <div className="blog-post card-panel" style={{marginBottom: '100px'}}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY DD de MMMM")
        path
        title
        image
        code
      }
    }
  }
`;