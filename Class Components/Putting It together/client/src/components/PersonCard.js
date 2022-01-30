import React, { Component, useState } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageUp: this.props.age,
        };

    }

    render() {
        const {firstName, lastName, color} = this.props;

        return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.ageUp}</p>
            <p>Hair Color: {color}</p>
            <button onClick={()=> this.setState({ ageUp: this.state.ageUp + 1})}>Happy Birthday!</button>
        </div>
        );
    }
}

export default PersonCard;