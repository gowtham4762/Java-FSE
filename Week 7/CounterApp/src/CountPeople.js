import React, { Component } from 'react';

export default class CountPeople extends Component {
    constructor(props) {
        super(props);
        this.state = { entrycount: 0, exitcount: 0 };
    }

    UpdateEntry = () => {
        this.setState({ entrycount: this.state.entrycount + 1 });
    }

    UpdateExit = () => {
        this.setState({ exitcount: this.state.exitcount + 1 });
    }

    render() {
        return (
            <div>
                <h2>Mall Entry Counter</h2>
                <p>Entry Count: {this.state.entrycount}</p>
                <p>Exit Count: {this.state.exitcount}</p>
                <button onClick={this.UpdateEntry}>Login</button>
                <button onClick={this.UpdateExit}>Exit</button>
            </div>
        );
    }
}