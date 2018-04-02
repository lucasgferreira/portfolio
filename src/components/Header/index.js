import React, {Component} from "react"
import {Navbar, NavItem, Icon, Container, Button} from "react-materialize"
import {navigateTo} from "gatsby-link"
import { goToTop, goToAnchor, removeHash, configureAnchors } from 'react-scrollable-anchor'


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
        <button onClick={() => goToAnchor('footer', false)} className="btn-floating waves-effect waves-light blue darken-3">
          <i className="material-icons">contacts</i>
        </button>
        <button onClick={() => goToAnchor('skills', false)} className="btn-floating waves-effect waves-light green darken-3">
          <i className="material-icons">code</i>
        </button>
        <button onClick={() => window.scrollTo(0, 0)} className="btn-floating waves-effect waves-light grey darken-3">
          <i className="material-icons">arrow_upward</i>
        </button>

      </Button>
    );
  }
}