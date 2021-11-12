import React, { Component } from "react";
import ProfileLinks from "../../statics/profileLinks";
import "./index.css";

class SocialCard extends Component {
    render() {
        return (
            <div className="d-inline-block m-2">
                {
                    Object.entries(ProfileLinks).map((profile, index) => {
                        if (index > 0) {
                            return (
                                <span key={profile[0]}> | <a href={ profile[1] }>{ profile[0] }</a></span>);
                        }
                        return <a key={profile[0]} href={ profile[1] }>{ profile[0] }</a>;
                    })
                }

            </div>
        );
    }
}

export default SocialCard;
