import React, { Component, useState } from "react";

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
    render() {
        return (
            <div style={{ fontSize: "30px" }}>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.handleIncrease}
                    style={{ padding: "20px", marginRight: "5px" }}
                >
                    increase count
                </button>
                <button
                    onClick={this.handleDecrease}
                    style={{ padding: "20px" }}
                >
                    decrease count
                </button>
            </div>
        );
    }
}

export default ClassCounter;
