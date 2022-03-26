import React, { Component } from 'react'
import {
  Icon,
  Container,
  Card,
  CardTitle,
  Parallax,
  Row,
  Input,
} from 'react-materialize'
import { navigateTo } from 'gatsby-link'
import bgcode from '../../layouts/assets/contact_us.jpg'

export default class Footer extends Component {

  render() {
    return (
      <div>

        <footer className="page-footer green darken-4">
          <div className="container">
            <div className="row">
              <div className="col l12 s12">
                <h5 className="white-text">Lucas Gonçalves</h5>
                <p className="grey-text text-lighten-4">
                  Desenvolvido por Mim (É Claro!) - em ReactJs
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright center-align">
            <div className="container">
              © 2018
              <a
                className="white-text"
                style={{ marginLeft: 5 }}
                href="https://github.com/lucasgferreira"
              >
                {' '}
                https://github.com/lucasgferreira
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
