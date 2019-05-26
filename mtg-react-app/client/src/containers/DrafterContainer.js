import React, { Component } from 'react';
import Deck from './Deck';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

const booster = this.props.fetchBooster();

class DrafterContainer extends Component {

    componentDidMount() {
        return booster
    };

    render() {
        return (
            <div>
                <Deck packCards={this.props.cards} />
            </div>
        )
    }
}

const mapStateToProps = ({ pack }) => ({ pack });

export default connect(mapStateToProps, { fetchBooster })(DrafterContainer);