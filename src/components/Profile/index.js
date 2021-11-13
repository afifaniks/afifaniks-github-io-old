import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import SocialWidget from "../Social";
import BioCard from "../Bio";
import ProfilePicture from "../../assets/images/dp.jpeg";
import { urlFormatter } from "../../utils/textProcessor";
import ExperienceHolder from "../Experience";
import EducationHolder from "../Education";
import AchievementsHolder from "../Achievements";

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: "",
            headline: "",
            socialLinks: {},
            bio: "",
            experiences: [],
            educations: [],
            achievements: []
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
                    <img
                        className="img-fluid rounded-circle m-1 profile-picture"
                        src={ProfilePicture}
                        alt={this.state.profileName} />
                    <div className="profile-name mt-1">
                        {this.state.profileName}
                    </div>
                    <div className="profile-tagline">
                        {this.state.headline}
                    </div>
                    <SocialWidget socialLinks={this.state.socialLinks} />
                    <div className="container">
                        <BioCard bio={urlFormatter(this.state.bio)} />
                        <ExperienceHolder experiences={this.state.experiences} />
                        <EducationHolder educations={this.state.educations} />
                        <AchievementsHolder achievements={this.state.achievements} />
                    </div>
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
        bio: PropTypes.string.isRequired,
        experiences: PropTypes.array,
        educations: PropTypes.array,
        achievements: PropTypes.array,
    }
};

export default ProfileView;
