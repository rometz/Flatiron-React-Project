import React, { Component } from 'react';
import CardMapper from './CardContainer';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class BoosterContainer extends Component {
    constructor() {
        super();
        this.state = {
            cards: "Ultimate Victory"
        }
    }

    handleFetchBooster() {
       // e.preventPropagation();
        const pack = this.props.fetchBooster();
        console.log(pack)
        this.setState({           
            cards: pack
        });

        console.log(this.state)
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleFetchBooster()}>Open a Pack</button>
                <CardMapper cardObjects={this.props.cardObjects} />
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {cardObjects: state.cards}
}

export default connect(mapStateToProps, {fetchBooster})(BoosterContainer);