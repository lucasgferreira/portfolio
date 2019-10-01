import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Bubble, {
  BubbleLayer,
  BubbleCluster,
  BubbleLayerBoundary,
} from '../components/bubble/Bubble'

import { Parallax } from 'react-materialize'

import Header from '../components/Header';
import Home from './home'
import Sobre from './sobre'
import Skills from './skills'
import Contato from './contato'
import Footer from '../components/footer'

export default class Portfolio extends Component {
  Component
  render() {
    return (
      <div>
      <BubbleLayerBoundary className="bg-dark darken-4">
        <main>

          <Header/>
          <Home />
          {/* <ScrollableAnchor id="sobre">
            <Sobre />
          </ScrollableAnchor> */}
          <ScrollableAnchor id="skills">
            <Skills />
          </ScrollableAnchor>
        </main>
        <BubbleLayer travel={5}>
          <Bubble
            size={130}
            thickness={20}
            duration={8}
            blur={2}
            top="20%"
            left="5%"
            bottom="0"
            opacity={0.45}
          />
          <Bubble
            size={95}
            thickness={15}
            duration={10}
            blur={2}
            top="17%"
            left="5%"
            bottom="0"
            opacity={0.2}
          />
          <Bubble
            size={90}
            thickness={15}
            duration={7}
            blur={2}
            top="5%"
            right="6%"
            bottom="0"
            opacity={0.35}
          />
          <Bubble
            size={38}
            thickness={11}
            duration={9}
            blur={2}
            top="30%"
            right="6%"
            opacity={0.45}
          />

           <BubbleCluster duration={15} left="3%" bottom="2%">
            <Bubble size={300} thickness={45} blur={5} opacity={0.12} />
            <Bubble size={80} thickness={13} blur={2} opacity={0.2} />
          </BubbleCluster>
        </BubbleLayer>

        <BubbleLayer travel={30}>
          <Bubble
            size={35}
            thickness={8}
            duration={7}
            blur={4}
            top="65%"
            left="15%"
            opacity={0.07}
          />

          <Bubble
            size={140}
            thickness={20}
            duration={9}
            blur={2}
            top="60%"
            right="6%"
            opacity={0.45}
          />

           <Bubble
            size={90}
            thickness={20}
            duration={9}
            blur={2}
            top="50%"
            right="8%"
            opacity={0.45}
          />

          <Bubble
            size={180}
            thickness={30}
            duration={9}
            blur={2}
            top="45%"
            left="6%"
            opacity={0.2}
          />

          <BubbleCluster duration={15} left="40%" top="2%">
            <Bubble size={30} thickness={10} blur={5} opacity={0.07} />
            <Bubble size={40} thickness={13} blur={2} opacity={0.2} />
          </BubbleCluster>
        </BubbleLayer>
      </BubbleLayerBoundary>
      <ScrollableAnchor id="contato">
            <Contato />
          </ScrollableAnchor>
          <ScrollableAnchor id="footer">
              <Footer />
          </ScrollableAnchor>
      </div>
    )
  }
}
