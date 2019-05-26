import React, { Component } from 'react';
import Deck from './Deck';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class DrafterContainer extends Component {

    componentDidMount() {
        this.props.fetchBooster();
    };

    render() {
        return (
            <div>
                <Deck />
            </div>
        )
    }
}

const mapStateToProps = ({ pack }) => ({ pack });

export default connect(mapStateToProps, { fetchBooster })(DrafterContainer);