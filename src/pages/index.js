import React, {Component} from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import Bubble, {BubbleLayer, BubbleCluster, BubbleLayerBoundary} from "../components/bubble/Bubble";

import {Parallax} from "react-materialize";

import Home from './home';
import Skills from './skills';
import Footer from '../components/footer';
import bgcode from '../layouts/assets/code.jpg';

export default class Portfolio extends Component {
  Component
  render() {

    return (
      <BubbleLayerBoundary className="bg-dark darken-4">
        <main>

          <Home/>

          <ScrollableAnchor id="skills">
            <Skills/>
          </ScrollableAnchor>
          <ScrollableAnchor id="footer">
            <div>
              <Parallax className="parallaxbg" imageSrc={bgcode}/>
              <Footer/></div>
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
            opacity={0.45}/>
          <Bubble
            size={95}
            thickness={15}
            duration={10}
            blur={2}
            top="17%"
            left="5%"
            bottom="0"
            opacity={0.20}/>
          <Bubble
            size={90}
            thickness={15}
            duration={7}
            blur={2}
            top="5%"
            right="6%"
            bottom="0"
            opacity={0.35}/>
          <Bubble
            size={38}
            thickness={11}
            duration={9}
            blur={2}
            top="50%"
            right="6%"
            opacity={0.45}/>
        </BubbleLayer>

        <BubbleLayer travel={15}>
          <Bubble
            size={85}
            thickness={13}
            duration={15}
            blur={6}
            top="45%"
            left="4%"
            opacity={0.25}/>
          <Bubble
            size={75}
            thickness={13}
            duration={10}
            blur={6}
            top="30%"
            right="13%"
            opacity={0.25}/>
          <Bubble
            size={150}
            thickness={20}
            duration={10}
            blur={4}
            top="50%"
            left="85%"
            opacity={0.60}/>
        </BubbleLayer>

        <BubbleLayer travel={30}>
          <Bubble
            size={35}
            thickness={8}
            duration={9}
            blur={4}
            top="15%"
            left="15%"
            opacity={0.07}/>

          <BubbleCluster duration={15} left="40%" top="2%">
            <Bubble size={30} thickness={10} blur={5} opacity={0.07}/>
            <Bubble size={40} thickness={13} blur={2} opacity={0.2}/>
          </BubbleCluster>
        </BubbleLayer>

      </BubbleLayerBoundary>
    );
  }
}