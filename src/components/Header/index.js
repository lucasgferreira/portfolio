import React, {Component} from "react"
import {Navbar, NavItem, Icon, Container, Button} from "react-materialize"
import {navigateTo} from "gatsby-link"
import {goToTop, goToAnchor, removeHash, configureAnchors} from 'react-scrollable-anchor'

export default class Header extends Component {
  goTop = () => {
    goToAnchor('home');
    // removeHash();
  }
  render() {

    return (
      <Button
        floating
        fab='horizontal'
        icon='menu'
        className='grey darken-4'
        fabClickOnly
        large>

        <Button
          onClick={() => goToAnchor('footer', false)}
          floating
          icon='contacts'
          className='blue darken-3'/>
        <Button
          onClick={() => goToAnchor('skills', false)}
          floating
          icon='code'
          className='green darken-3'/>
        <Button
          onClick={() => window.scrollTo(0, 0)}
          floating
          icon='arrow_upward'
          className='grey darken-3'/>
      </Button>
    );
  }
}