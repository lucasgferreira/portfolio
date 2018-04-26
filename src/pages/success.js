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
import Plx from 'react-plx'
import { navigateTo } from 'gatsby-link'
import bgcode from '../layouts/assets/contact_us.jpg'

export default class Footer extends Component {
  render() {
    return (
      <div className="contato-bg valign-wrapper center-align">
        <div className="container">
          <div className="card transparent z-depth-0">
            <div className="card-content white-text">
              <span className="card-title">Obrigado!</span>
              <p style={{ fontSize: '14pt' }}>
                Seu envio de formulário foi recebido.
              </p>
            </div>
            <div className="card-action">
              <div className="row center-align">
                <a
                  className="waves-effect waves-light btn grey darken-2"
                  href="https://github.com/lucasgferreira"
                  href="/"
                >
                  <i className="material-icons left">arrow_back</i>home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
