import React, { Component } from "react";

export default class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    handleDecrease = (e) => {
        this.setState({ count: this.state.count - 1 });
    };

    handleIncrease = (e) => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1 style={{ fontSize: "60px" }}>{this.state.count}</h1>
                <button
                    onClick={this.handleIncrease}
                    style={{ padding: "10px", marginRight: "5px" }}
                >
                    increase
                </button>
                <button
                    onClick={this.handleDecrease}
                    style={{ padding: "10px" }}
                >
                    decrease
                </button>
            </div>
        );
    }
}
