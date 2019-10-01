import React, { Component } from 'react'
import { Navbar, NavItem, Icon, Container, Button } from 'react-materialize'
import { navigateTo } from 'gatsby-link'
import {
  goToTop,
  goToAnchor
} from 'react-scrollable-anchor'

export default class Header extends Component {
  goTop = () => {
    goToAnchor('home')
    // removeHash();
  }
  
  render() {
    return (
      <Button
        floating
        fab="horizontal"
        icon="menu"
        className="waves-effect blue-grey waves-dark darken-4"
        large
        style={{ bottom: '45px', right: '24px' }}
      >
        <Button floating icon="contacts" onClick={()=>{goToAnchor('contato')}} className="green darken-3" />
        <Button floating icon="code" onClick={()=>{goToAnchor('skills')}} className="grey darken-3" />
        {/* <Button floating icon="account_circle" onClick={()=>{goToAnchor('sobre')}} className="red darken-4" /> */}
        <Button floating icon="arrow_upward" onClick={()=>{goToTop()}} className="blue darken-3" />
      </Button>
    )
  }
}
