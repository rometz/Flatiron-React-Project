import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.renderCardsProps = this.renderCardsProps.bind(this)
        this.state = {
            cards: [],
            cardCount: 0
        }
    }

    handleAddCard(e) {
      //  this.props.createCard(e.target.name);
        const card = e.target.innerText;
        console.log(this.props.deckObject);
        if ( this.props.deckObject === null || undefined ) {
            this.props.createDeck(card)
        }
        this.props.createCard(card);
        console.log(this.props.cardObject)
        this.setState({
            cards: [...this.state.cards, card]
        });
        if ( this.state.cardCount < 40 ) {
            this.props.handleFetchBooster();
            this.handleCardCounter();
        }    
    }

    handleCardCounter = () => {
        this.setState({
            cardCount: this.state.cardCount + 1
        });
    }

    renderCardsProps() {
        const cardProps = this.props.draftObjects.draftingData;
        console.log(this.state.cards);
        console.log(this.state.cardCount);
        if ( this.state.cardCount < 40 ) {
        return cardProps.map(
            idvCard => <Card key={idvCard.id} name={idvCard.name} text={idvCard.text} manaCost={idvCard.manaCost} handleAddCard={(e) => this.handleAddCard(e)} />
        )} else {
            return <h3>Your Deck Is Complete</h3>
        }
    }

    render() {
        return (
            <div className="mtg-cards">
                {this.renderCardsProps()}
            </div>
        )   
    } 
}

const mapStateToProps = state => {
    return {
        draftObjects: state.drafts,
        deckObject: state.decks,
        cardObject: state.cards
    }
}

const mapDispatchToProps = dispatch => ({
    createCard: text => dispatch({type: "CREATE_CARD", text }),
    fetchCard: text => dispatch({type: "FETCH_CARD", text }),
    createDeck: text => dispatch({type: "CREATE_DECK", text })
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);