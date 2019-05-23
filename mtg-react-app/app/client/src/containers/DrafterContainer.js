import React, { Component } from 'react';
import BoosterPack from './BoosterPack';
import { connect } from 'react-redux';

class DrafterContainer extends Component {

    render() {
        return (
            <div>
                <BoosterPack />
            </div>
        )
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({

})