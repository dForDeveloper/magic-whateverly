import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(props) { 
    return(
        <article className='card--container'>
          <img className="card--image"
                src={this.props.currentCard.imageSource}
                alt=""/>
          <div className='counter--container'>
            <h1 className='card--counter'>1x</h1>   
          </div>
        </article>
      );
    }
  }
  
  export default Card; 