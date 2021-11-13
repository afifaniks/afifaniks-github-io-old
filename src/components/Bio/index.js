import React, { Component } from "react";
import PropTypes from "prop-types";

class BioCard extends Component {
    render() {
        return (
            <div className="justify-text" dangerouslySetInnerHTML={{ __html: this.props.bio }}/>
        );
    }
}

BioCard.propTypes = {
    bio: PropTypes.string
};

export default BioCard;
