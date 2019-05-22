import React, { Component } from 'react';

const mtg = require('mtgsdk');

export default class DrafterContainer extends Component {
    state = {
        set = ''
    };

    componentDidMount() {
        fetch(`https://api.magicthegathering.io/v1/sets/WAR`)
        .then(response => response.json())
        .then(data => this.setState({
            set: data
        }))
        .catch((errors) => {
            console.log('Bolas has won')
        });
    };

    render() {
     
    }
}