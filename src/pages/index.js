import React from 'react'
import Link from 'gatsby-link'
import FaGithub from 'react-icons/lib/fa/github';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import poster from '../images/tree-mobile.jpg'

const IndexPage = ({data}) => (
  <div className="index-page">
    <div className="main-content">
      <video autoPlay loop id="bg-video" poster={poster}>
        <source src="https://s3-us-west-2.amazonaws.com/kameronjohnson/treetop.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <h1>Hi, I'm Kameron.</h1>
      <p>A music composer turned <span>web developer</span> from sunny Portland, Oregon!</p>
  {/*    
      <p> 
        <Link to="/page-2/">page 2</Link>
      </p>
      <h2>Post Index</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <Link key={post.node.id} 
                  to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}        
            </Link>
          </li>
        ))}
      </ul>
  */}
    </div>
      <footer className="footer">
        <h3 className="footer-text">Where to find me</h3>
        <ul className="footer-links">
          <li>
            <a className="footer-link grow" target="_blank" href="https://github.com/kameronjohnson">
              <FaGithub />
            </a>
          </li>
          <li>
            <a className="footer-link grow" target="_blank" href="https://soundcloud.com/kameronjohnsonmusic">
              <FaSoundcloud />
            </a>
          </li>
          <li>
            <a className="footer-link grow" target="_blank" href="https://www.linkedin.com/in/kameronjohnson">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </footer>
  </div>
)

// export const pageQuery = graphql`
//   query IndexQuery{
//     allMarkdownRemark(
//       limit: 10
//       sort: { fields: [frontmatter___date], order: ASC}
//       filter: { frontmatter:{ published: { eq: true }}}
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
