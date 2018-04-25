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
import Contato from '../../pages/contato'
import bgcode from '../../layouts/assets/contact_us.jpg'

export default class Footer extends Component {
  links = () => {
    return (
      <ul className="white-text">
        <li>
          <span className="title">E-mail</span>
          <p>
            <a className="white-text" href="mailto:lucasg_f@outlook.com">
              lucasg_f@outlook.com
            </a>
          </p>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Contato />

        <footer className="page-footer green darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Lucas Gonçalves</h5>
                <p className="grey-text text-lighten-4">
                  Desenvolvido por Mim (É Claro!) - em ReactJs
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contatos</h5>
                {this.links()}
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
