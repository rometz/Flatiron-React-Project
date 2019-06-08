import React, { Component } from 'react';
import Cards from '../components/Cards/Cards';
import { connect } from 'react-redux';

class CardsContainer extends Component {
    state = {
        cardData: []
    }

    render() {
        return (
            <div>
                <Cards />
            </div>
        )   
    } 
}

const mapStateToProps = state => {

}

const mapDispatchToProps = state => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);