import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoosterPack from './BoosterPack';

class Deck extends Component {
    state = {
        amount: 0,
        cards: '',
        boosterPack: ''
    }

    handlePacks = props => {
        const packCards = props
    }

    render() {
        return (
            <div>
                
                <BoosterPack />
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect()(Deck);