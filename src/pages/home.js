import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Parallax, NavItem, Icon, Container } from 'react-materialize'
import { navigateTo } from 'gatsby-link'
import Typist from 'react-typist'
import Mouse from '../components/mouse'
import Bubble, {
  BubbleLayer,
  BubbleCluster,
  BubbleLayerBoundary,
} from '../components/bubble/Bubble'
import '../layouts/styles/style.scss'
import 'react-typist/dist/Typist.css'

export default class Home extends Component {
  state = {
    visible: false,
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true })
  }
  render() {
    return (
      <div>
        <div className="valign-wrapper center-align hero masthead-font">
          <div className="container">
            <div className="card transparent z-depth-0">
              <div className="card-content white-text" style={{margin: '0px', padding: '0px'}}>
                <Typist
                  className="TypistExample-header"
                  avgTypingSpeed={20}
                  startDelay={100}
                  onTypingDone={this.onHeaderTyped}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 0,
                  }}
                >
                  <a
                    className="text-uppercase h1"
                    style={{
                      color: '#eee',
                    }}
                  >
                    <strong>Lucas Gonçalves</strong>
                  </a>
                </Typist>
                <div className="TypistExample-content mb-4">
                  {this.state.renderMsg ? (
                    <Typist
                      className="TypistExample-message p"
                      avgTypingSpeed={20}
                      cursor={{
                        hideWhenDone: false,
                      }}
                    >
                    
                      <strong className="font-weight-bold">{'<p>'} </strong>
                      <a
                        className="p"
                        style={{
                          color: '#FFF',
                        }}
                      >
                        Desenvolvedor Web & Mobile
                      </a>
                      <Typist.Delay ms={40} />
                      <strong className="font-weight-bold">{' p>'}</strong>
                      <Typist.Backspace count={2} delay={80} />
                      <Typist.Delay ms={60} />
                      <strong className="font-weight-bold">{' </p>'}</strong>
                    </Typist>
                  ) : null}
                </div>
              </div>
              <div className="card-action">
                <div className="row center-align">
                  <button
                    onClick={() => navigateTo('/projetos')}
                    className="waves-effect waves-light btn-large green darken-2"
                  >
                    <i className="material-icons left">library_books</i>projetos
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="mouseicon center-align">
              <Mouse />
            </div>
      </div>
    )
  }
}
