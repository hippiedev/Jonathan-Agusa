import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
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
          <div className="Thumbnail">
            <Img style={{height: "100%", width: "100%", backgroundSize: "cover"}} fluid={post.frontmatter.thumb.childImageSharp.fluid} />
            </div>
            <div className="PostWrap">
            <h3>{post.frontmatter.title}</h3>
            <span>{post.frontmatter.date}</span>
            <p>{post.frontmatter.description}</p>
            </div>
          
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
      frontmatter {
        date(fromNow: true)
        description
        title
        path
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}

`;
