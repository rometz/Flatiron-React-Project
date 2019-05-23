import React, { Component } from 'react';
import BoosterPack from './BoosterPack';

export default class DrafterContainer extends Component {
    state = {
        setCode = '',
        packs = ''
    };

    componentDidMount() {
        fetch(`https://api.magicthegathering.io/v1/sets/WAR`)
        .then(set => set.json())
        .then(data => this.setState({
            setCode: data["code"]
        }))
        .catch((errors) => {
            console.log('Bolas has won')
        });
        fetch(`https://api.magicthegathering.io/v1/sets/WAR/booster`)
        .then(booster => booster.json())
        .then(data => this.setState({
            packs: data
        }))
        .catch((errors) => {
            console.log('Bolas has won')
        });
    };

    render() {
     
    }
}