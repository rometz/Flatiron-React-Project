import React, { Component } from 'react';

class DeckInput extends Component {
    state = {
        text: ''
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.addRestaurant(this.state.text)
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