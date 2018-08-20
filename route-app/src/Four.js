import React, { Component } from 'react';
import { Link } from 'react-router';

class Four extends Component {
    render(){
        return(
            <div>
                <h1>I am Four component</h1>
                <ul>
                    <li><link to="/Four/123">Four Point One</link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

export default Four;