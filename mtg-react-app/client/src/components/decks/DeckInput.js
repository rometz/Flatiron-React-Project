import React, { Component } from 'react';

class DeckInput extends Component {
    /*
    state = {
        text: ''
    }
    */
    constructor() {
        super();
        this.state = { text: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.addDeck(this.state.text)
        this.setState({
            text: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e) }>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default DeckInput;