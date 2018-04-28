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
import { goToAnchor } from 'react-scrollable-anchor'
import { navigateTo } from 'gatsby-link'
import bgcode from '../layouts/assets/contact_us.jpg'

export default class Footer extends Component {
  render() {
    return (
      <div className="main">
        <div className="sobre-bg" />
        <div className="valign-wrapper center-align sobre-bg-second">
          <div className="container">
            <div className="card transparent z-depth-0">
              <div className="card-content white-text">
                <span className="card-title">Olá!</span>
                <p style={{ fontSize: '14pt' }}>
                  Sou um programador dinâmico entusiasta e profissional que
                  gostaria de fazer parte de uma equipa bem sucedida e produ va.
                  Sou capaz de trabalhar bem por inicia va própria e posso
                  demonstrar os elevados níveis de mo vação requeridos para
                  cumprir os prazos mais curtos. Tenho facilidade em seguir aos
                  padrões adotados e de aprender novas tecnologias.
                </p>
              </div>
              <div className="card-action">
                <div className="row center-align">
                  <button
                    className="btn-floating btn-large waves-effect waves-light green darken-3"
                    href="https://github.com/lucasgferreira"
                    onClick={() => {
                      goToAnchor('skills')
                    }}
                  >
                    <i className="large material-icons">keyboard_arrow_down</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
