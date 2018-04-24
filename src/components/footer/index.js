import React, {Component} from "react"
import {Icon, Container, Card, CardTitle, Parallax} from "react-materialize"
import {navigateTo} from "gatsby-link"
import bgcode from '../../layouts/assets/contact_us.jpeg';

export default class Footer extends Component {

  links = () => {
    return (
      <ul className="collection left-align">

        <li className="collection-item avatar">
          <i className="fab fa-github fa-lg circle grey darken-3"></i>
          <span className="title">GitHub</span>
          <p>
            <a href="https://github.com/lucasgferreira">
              https://github.com/lucasgferreira</a>
          </p>
        </li>
        <li className="collection-item avatar">
          <i className="fab fa-linkedin fa-lg circle light-blue darken-4"></i>
          <span className="title">Linkedin</span>
          <p>
            <a href="https://www.linkedin.com/in/lucas-goncalves-programador">
              https://www.linkedin.com/in/lucas-goncalves-programador</a>

          </p>
        </li>
        <li className="collection-item avatar">
          <i className="fas fa-envelope fa-lg circle yellow darken-4"></i>
          <span className="title">E-mail</span>
          <p>
            <a href="mailto:lucasg_f@outlook.com">
              lucasg_f@outlook.com</a>
          </p>
        </li>
      </ul>
    )
  }

  render() {

    return (
      <footer className="page-footer grey lighten-5 center-align">
        <div className="valign-wrapper">
          <div className="container">

            <button onClick={ () => navigateTo('/projetos')} className="waves-effect waves-light btn-large">
              <i className="material-icons left">code</i>projetos</button>

            <Card
              header={< CardTitle reveal image = {
              bgcode
            }
            waves = 'light' />}
              title={< strong >Contatos </strong>}
              reveal={this.links()}>
              </Card>
          </div>
        </div>
        <div className="footer-copyright center-align">
          <div className="container grey-text text-darken-4">
            © 2018
            <a className="blue-text text-darken-1" style={{marginLeft: 5}} href="https://github.com/lucasgferreira"> https://github.com/lucasgferreira</a>
          </div>
        </div>
      </footer>
    );
  }
}