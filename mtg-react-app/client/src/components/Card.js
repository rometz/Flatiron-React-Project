import React, { Component } from 'react';

class Card extends Component {
    state = {
        favCounter: 0
    }

    handleFavCounter() {
        this.setState({
            favCounter: this.state.favCounter + 1
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <div className="mtg-card">
                        <li id="mtg-card-name" onClick={(e) => this.props.handleAddCard(e)} cardid={this.props.cardId}>{this.props.name}</li>
                        <li id="mtg-card-manaCost">{this.props.manaCost}</li>
                        <li id="mtg-card-text">{this.props.text}</li>
                        <li onClick={() => this.handleFavCounter()}>{this.state.favCounter}</li>
                    </div>
                </ul>
            </div>
        )
    }

}



export default Card;
        
