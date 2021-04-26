const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/template/post.js");

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
          html
          id
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
