import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { createCard } from '../actions/CardActions';
import { fetchBooster } from '../actions/DraftActions';

class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.renderCardsProps = this.renderCardsProps.bind(this)
        this.state = {
            cards: [],
            cardCount: 0
        }
    }

    handleFetchBooster() {
        this.props.fetchBooster();    
    };

    handleAddCard(e) {
        console.log(e.target)
        const cardName = e.target.innerText;
        const id = e.target.attributes.cardid.value;       
        this.props.createCard(cardName, id);
        console.log(this.props.createCard())
        console.log(this.props.cardObject)
        this.setState({
            cards: [...this.state.cards, cardName]
        });
        if ( this.state.cardCount < 40 ) {
            this.handleFetchBooster();
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
            idvCard => <Card key={idvCard.id} cardId={idvCard.id} name={idvCard.name} text={idvCard.text} manaCost={idvCard.manaCost} handleAddCard={(e) => this.handleAddCard(e)} />
        )} else {
            return <h3>Your Deck Is Complete</h3>
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.handleFetchBooster()}>Open a Pack</button>
                </div>
                <div className="mtg-cards">
                    {this.renderCardsProps()}
                </div>
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

export default connect(mapStateToProps, { createCard, fetchBooster })(CardsContainer);