import React from "react";
import { graphql } from "gatsby";
import "../styles/Post.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function postTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Header />
      <div className="Post">
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        <div
          className="Content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Footer />
    </div>
  );
}

export const postTemplateQuery = graphql`
  query MyQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
