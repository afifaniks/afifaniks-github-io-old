import React, { Component } from "react";

class BioCard extends Component {
    render() {
        return (
            <div className="justify-text" dangerouslySetInnerHTML={{ __html: this.props.bio }}/>
        );
    }
}

export default BioCard;
