import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class SocialWidget extends Component {
    render() {
        return (
            <div className="d-inline-block">
                {
                    this.props.socialLinks
                    && Object.keys(this.props.socialLinks).map((profile, index) => {
                        if (index > 0) {
                            return (
                                <span key={profile}> | <a href={ this.props.socialLinks[profile] }>{ profile }</a></span>);
                        }
                        return <a key={profile} href={ this.props.socialLinks[profile] }>{ profile }</a>;
                    })
                }
                <div className="m-2">
                    <a href="https://afifaniks.github.io/blog" className="bg-highlight">Jump to the Blog</a>
                </div>
            </div>
        );
    }
}

SocialWidget.propTypes = {
    socialLinks: PropTypes.object
};

export default SocialWidget;
