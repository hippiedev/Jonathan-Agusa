import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from 'react-helmet';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../styles/Archive.scss';

export default function Template({ data }) {
  const blogPost = data.allMarkdownRemark.nodes;
  return (
    <div>
      <Helmet>
        <script src="https://kit.fontawesome.com/8c8a5b4cb9.js" crossorigin="anonymous"></script>
        </Helmet>
      <Header/>
      <div className="Archive" >
      {blogPost.map((post) => (
        <div className="ArchivePost" key={post.id}>
        <Link to={post.frontmatter.path}>
          
            <h3>{post.frontmatter.title}</h3>
            <span>{post.frontmatter.date}</span>
            <p>{post.frontmatter.description}</p>
          
        </Link>
        </div>
      ))}
      </div>
      <Footer />
    </div>
  );
}

export const postQuery = graphql`
  query BlogPage {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          date
          path
          title
          description
        }
        id
      }
    }
  }
`;
