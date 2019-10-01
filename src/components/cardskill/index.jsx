import React, {Component} from 'react';
import './card.css';

class CardSkill extends Component {
  nivel() {
    if (this.props.nivel === 1) {
      return (
        <strong className="red-text">Principiante</strong>
      );
    } else if (this.props.nivel === 2) {
      return (
        <strong className="blue-text">Proficiente</strong>
      );
    }
    return (
      <strong className="green-text">Experiente</strong>
    );
  }
  
  render() {
    return (

      <div className="col s6 m4 l3 xl1">
        <div className="card bg-card bg-card:hover hoverable">
          <div className="card-image">
            <i
              className={`devicon-${this.props.icon}-plain colored`}
              style={{
              fontSize: '5rem',
              paddingTop: '1rem'
            }}/>
            
          </div>
          <div className="card-content">
          <span>{this.props.nome}</span>
            <p>{this.nivel()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSkill;
