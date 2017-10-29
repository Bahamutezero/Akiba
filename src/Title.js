import React, { Component } from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <p>Hello World!</p>
            </div>
        )
    }
}
