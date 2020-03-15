import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div style={{ padding: '10px 0px' }}>{this.props.children}</div>
        );
    }
}

export default Content;
