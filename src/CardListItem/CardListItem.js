import React, { Component } from 'react';
import './CardListItem.css'



class CardListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardCount: 1
    }
  }

  updateListItem = (event) => {
    if (event.target.classList.contains('fa-trash-alt')) {
      this.props.removeListItem(parseInt(event.target.closest('li').id))
    } else if (event.target.classList.contains('fa-plus')) {
      this.increaseCardCount()
    } else if (event.target.classList.contains('fa-minus')) {
      this.decreaseCardCount()
    }
  }

  increaseCardCount = () => {
    if (this.state.cardCount < 4) {
      this.setState({ cardCount: this.state.cardCount + 1 })
    }
  }

  decreaseCardCount = () => {
    if (this.state.cardCount > 1) {
      this.setState({ cardCount: this.state.cardCount - 1 })
    }
  }

  render(props) {
    return(
      <li onClick={this.updateListItem} id={this.props.cardIndex}>
        {this.props.cardName}
        <i class="fas fa-plus"></i>
        <span>{this.state.cardCount}</span>
        <i class="fas fa-minus"></i>
        <i class="far fa-trash-alt"></i>
      </li>                  
    )          
  }
}
 
export default CardListItem;