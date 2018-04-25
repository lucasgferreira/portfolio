import React, { Component } from 'react'
import { Navbar, NavItem, Icon, Container, Button } from 'react-materialize'
import { navigateTo } from 'gatsby-link'
import {
  goToTop,
  goToAnchor,
  removeHash,
  configureAnchors,
} from 'react-scrollable-anchor'

export default class Header extends Component {
  goTop = () => {
    goToAnchor('home')
    // removeHash();
  }
  render() {
    return (
      <Navbar brand="Lucas Gonçalves" fixed right className="bg-dark darken-4">
        <NavItem onClick={() => console.log('test click')}>
          Getting started
        </NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    )
  }
}
