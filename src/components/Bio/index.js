import React, { Component } from "react";

class BioCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="justify-text" dangerouslySetInnerHTML={this.props.bio}></div>
            </div>
        );
    }
}

export default BioCard;
