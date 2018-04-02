import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'github-markdown-css/github-markdown.css';

import Header from '../components/Header';
import './styles/style.css';
import './styles/devicon.min.css';
import './styles/devicon-colors.css';
import './styles/fontawesome-free-5.0.9/web-fonts-with-css/css/fontawesome-all.min.css';
import favicon from './assets/ico.png';

const TemplateWrapper = ({ children }) => (
  <div>
   <Helmet>
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet" />
    
      <title>Portfolio</title>
    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
