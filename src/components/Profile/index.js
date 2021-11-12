import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import SocialCard from "../Social";
import BioCard from "../Bio";
import ProfilePicture from "../../assets/images/dp.jpeg";
import { urlFormatter } from "../../utils/textProcessor";

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: "",
            headline: "",
            socialLinks: {},
            bio: ""
        };
    }

    componentDidMount() {
        this.setState(
            this.props.profileData
        );
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <img className="img-fluid rounded-circle m-1 profile-picture" src={ProfilePicture} />
                    <div className="profile-name mt-1">
                        {this.state.profileName}
                    </div>
                    <div className="profile-tagline">
                        {this.state.headline}
                    </div>
                    <SocialCard />
                    {
                        this.state.bio
                        && <BioCard bio={urlFormatter(this.state.bio)}/>
                    }
                </div>
            </div>
        );
    }
}

ProfileView.propTypes = {
    profileData: {
        profileName: PropTypes.string.isRequired,
        headline: PropTypes.string,
        socialLinks: {
            Github: PropTypes.string,
            Instagram: PropTypes.string,
            Linkedin: PropTypes.string,
            "Google Scholar": PropTypes.string,
            ResearchGate: PropTypes.string
        },
        bio: PropTypes.string.isRequired
    }
};

export default ProfileView;
