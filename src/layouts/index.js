import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'github-markdown-css/github-markdown.css';
import 'material-icons/iconfont/material-icons.scss';

import './styles/style.css';
import './styles/devicon.min.css';
import './styles/devicon-colors.css';
import './styles/fontawesome-free-5.0.9/web-fonts-with-css/css/fontawesome-all.min.css';
import favicon from './assets/ico.png';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet>
      <link rel="icon" type="image/png" href={favicon}/>

      <meta name="msapplication-TileColor" content="#2BBBAD"/>
      <meta name="theme-color" content="#171e22"/>

      <title>Lucas Gonçalves</title>
    </Helmet>
    
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
