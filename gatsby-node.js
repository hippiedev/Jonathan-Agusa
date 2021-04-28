const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/template/post.js");

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date(fromNow: true)
            description
            path
            title
            featuredImg {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            thumb {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  `)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
};
