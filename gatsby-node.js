/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 //createPages from the api
 exports.createPages = ({boundActionCreators, graphql}) => {
     const {createPage} = boundActionCreators;
     
     const postTemplate = path.resolve('src/templates/post.js');

     //run query via graphql to get all markdown files
     return graphql(`{
         allMarkdownRemark {
             edges {
                 node {
                     html
                     id
                     frontmatter {
                         path
                         title
                         date
                     }
                 }
             }
         }
     }`)
     .then(res => {
         if(res.errors) {
             return Promise.reject(res.errors);
         }

         //this is an array of all our pages
         res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
         })

     })
 }