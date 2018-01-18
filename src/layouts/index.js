import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <div className="header">
    <div className="logo">
      <Link to="/">
        KJ
      </Link>
    </div>
    <ul className="main-nav"> 
      <li className="nav-item">
        <Link to="/dev"
              activeClassName="nav-active">
              Dev
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/music"
              activeClassName="nav-active">
              Music
        </Link>
      </li>          
      <li className="nav-item">
        <Link to="/contact"
              activeClassName="nav-active">
              Contact
        </Link>
      </li>
    </ul>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kameron Johnson"
      meta={[
        { name: 'description', content: 'Kameron Johnson' },
        { name: 'keywords', content: 'Kameron Johnson' },
      ]}
    />
    <div className="container">
      <Header />
      <div className="main">
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
