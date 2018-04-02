import React, {Component} from "react";
import Link from 'gatsby-link'
import {Parallax, NavItem, Icon, Container} from "react-materialize"
import Typist from "react-typist";
import Mouse from "../components/mouse";
import Bubble, {BubbleLayer, BubbleCluster, BubbleLayerBoundary} from "../components/bubble/Bubble";
import "../layouts/styles/style.scss";
import "react-typist/dist/Typist.css";

export default class Home extends Component {
  state = {
    visible: false,
    renderMsg: false
  };

  onHeaderTyped = () => {
    this.setState({renderMsg: true});
  };
  render() {

    return (
      <div>
        <div className="valign-wrapper hero masthead-font">

          <div className="container center-align">
            <div className="TypistExample">
              <Typist
                className="TypistExample-header"
                avgTypingSpeed={4000}
                startDelay={1000}
                onTypingDone={this.onHeaderTyped}
                cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: true,
                hideWhenDoneDelay: 0
              }}>
                <a
                  className="text-uppercase h1"
                  style={{
                  color: "#eee"
                }}>
                  <strong>Lucas Gonçalves</strong>
                </a>
              </Typist>
              <div className="TypistExample-content mb-4">
                {this.state.renderMsg
                  ? (
                    <Typist
                      className="TypistExample-message p"
                      cursor={{
                      hideWhenDone: false
                    }}>
                      <strong className="font-weight-bold">{"<p>"}{" "}</strong>
                      <a
                        className="p"
                        style={{
                        color: "#FFF"
                      }}>
                        Desenvolvedor Web & Mobile
                      </a>
                      <Typist.Delay ms={500}/>
                      <strong className="font-weight-bold">{" p>"}</strong>
                      <Typist.Backspace count={2} delay={1000}/>
                      <Typist.Delay ms={750}/>
                      <strong className="font-weight-bold">{" </p>"}</strong>

                    </Typist>
                  )
                  : null}
              </div>
            </div>
            <div className="row round-btn">
              <a href="https://github.com/lucasgferreira" className="btn-floating waves-effect waves-light grey darken-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:lucasg_f@outlook.com" className="btn-floating waves-effect waves-light yellow darken-4">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/lucas-goncalves-programador" className="btn-floating waves-effect waves-light light-blue darken-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

          </div>

        </div>
        <div className="mouseicon center-align valign-wrapper">
          <Mouse/>
        </div>
      </div>

    );
  }
}
