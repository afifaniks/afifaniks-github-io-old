import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class SocialWidget extends Component {
    render() {
        return (
            <div className="d-inline-block">
                {
                    this.props.socialLinks
                    // eslint-disable-next-line array-callback-return
                    && Object.keys(this.props.socialLinks).map((profile) => <span key={profile}><a href={ this.props.socialLinks[profile] }>{ profile }</a> | </span>)
                }
                <a href="https://medium.com/@afifaniks" className="bg-highlight">Afif&apos;s Log</a>
            </div>
        );
    }
}

SocialWidget.propTypes = {
    socialLinks: PropTypes.object
};

export default SocialWidget;
