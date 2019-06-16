import React, { Component } from 'react';
import Deck from '../components/decks/Deck';
import CardsContainer from './CardContainer';
import { deleteCards } from '../actions/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DeckContainer extends Component {

    renderCardsProps() {
        const cardProps = this.props.cardsObject.cardData;
        console.log(cardProps)
        if ( cardProps !== undefined ) {
            return cardProps.map(
                idvCard => <Deck key={idvCard.multiverseid} name={idvCard.name} />
            )
        }
    };

    handleLinkRoute() {
        if ( this.props.cardsObject.cardData.length > 0 ) {
            return (
                <Router>
                    <h3 href="#" onClick={() => this.handleOnClick()}><Link to="/draft/">DELETE YOUR DECK AND DRAFT ANOTHER?</Link></h3>
                    <Route path='/drafter/' exact component={CardsContainer} />
                </Router>
            )
        }
    }

    handleOnClick() {
        this.props.deleteCards(this.props.cardsObject);
        console.log(this.props.cardsObject)
    };

    render() {
        return (
            <div>
                <div>
                    {this.handleLinkRoute()}
                </div>
                
                <div className="mtg-cards">
                    {this.renderCardsProps()}
                </div>
            </div>
                
        )
    };
};

const mapStateToProps = state => {
    return {
        cardsObject: state.cards
    };
};


export default connect(mapStateToProps, { deleteCards })(DeckContainer);