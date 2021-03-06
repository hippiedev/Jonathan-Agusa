import React from "react";
import { graphql } from "gatsby";
import "../styles/Post.scss";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function postTemplate({ data }) {
  const rootUrl = 'https://nathanagusa.netlify.app';
  const { markdownRemark: post } = data;
  const image = `${rootUrl}${post.frontmatter.thumb.childImageSharp.fluid.src}`;
  return (
    <React.Fragment>
      <Header />
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta
          name="twitter:description"
          content={post.frontmatter.description}
        />
        <meta name="twitter:image" content={image} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:description"
          content={post.frontmatter.description}
        />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="180" />

        <meta property="og:image:height" content="110" />
        <meta property="og:type" content="article" />
        <meta name="image" content={image} />
        <meta name="description" content={post.frontmatter.description} />
        <title>{post.frontmatter.title}</title>
        <script
          src="https://kit.fontawesome.com/8c8a5b4cb9.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <div className="Post">
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        <Img
          style={{ position: "relative", marginTop: "50px", height: "300px", objectFit: 'cover' }}
          fluid={post.frontmatter.thumb.childImageSharp.fluid}
        />
        <div
          className="Content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Footer top="100px" />
    </React.Fragment>
  );
}

export const postTemplateQuery = graphql`
  query MyQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        date(fromNow: true)
        thumb {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
          }
          relativePath
        }
      }
      id
    }
  }
`;




