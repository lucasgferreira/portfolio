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
  form = () => {
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="row left-align">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                name="name"
                id="icon_prefix"
                type="text"
                className="validate"
                required
                title="preencha o seu nome!"
              />
              <label htmlFor="icon_prefix">Nome</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                name="email"
                id="icon_prefix"
                type="email"
                className="validate"
                required
                title="preencha o campo email!"
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
              <textarea
                name="message"
                id="ms"
                className="materialize-textarea"
                required
                title="preencha o campo menssagem!"
              />
              <label htmlFor="ms">Mensagem</label>
            </div>
          </div>
          <div data-netlify-recaptcha />
          <button
            className="btn waves-effect grey waves-dark darken-4 white-text z-depth-4"
            type="submit"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="contato-bg valign-wrapper">
          <div className="row container">
            <div className="col s12 m6 center-align">
              <div className="card transparent z-depth-0">
                <div className="card-content white-text">
                  <span className="card-title">Redes sociais</span>
                  <p style={{ fontSize: '14pt' }}>
                    Deixe seu recado no formulário de contato!
                  </p>
                </div>
                <div className="card-action">
                  <div className="row center-align">
                    <a
                      className="waves-effect waves-light btn grey darken-2"
                      target="_blank"
                      href="https://github.com/lucasgferreira"
                      style={{ margin: '1px' }}
                    >
                      <i className="material-icons left">code</i>Github
                    </a>
                    <a
                      className="waves-effect waves-light btn blue darken-3"
                      target="_blank"
                      href="https://www.linkedin.com/in/lucas-goncalves-programador"
                    >
                      <i className="fab fa-linkedin right" />Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 center-align">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Contato</span>
                  {this.form()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
