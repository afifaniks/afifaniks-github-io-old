import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import SocialWidget from "../Social";
import BioCard from "../Bio";
import ProfilePicture from "../../assets/images/dp.jpeg";
import { boldFormatter, urlFormatter } from "../../utils/textProcessor";
import ExperienceHolder from "../Experience";
import EducationHolder from "../Education";
import AchievementsHolder from "../Achievement";
import PublicationHolder from "../Publication";
import CertificationHolder from "../Certification";
import SpecializationHolder from "../Specialization";
import ProjectsHolder from "../Project";
import RecommendationHolder from "../Recommendations";

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: "",
            headline: "",
            email: "",
            socialLinks: {},
            bio: "",
            homepage: "",
            experiences: [],
            educations: [],
            achievements: [],
            publications: [],
            certifications: [],
            specializations: [],
            projects: [],
            opinions: []
        };
    }

    componentDidMount() {
        this.setState(
            this.props.profileData
        );
    }

    render() {
        this.setOpenGraphTags();
        return (
            <div className="card text-center">
                <div className="card-body container">
                    <img
                        className="img-fluid m-1 profile-picture"
                        src={ProfilePicture}
                        alt={this.state.profileName} />
                    <div className="profile-name mt-1">
                        {this.state.profileName} <a className="email-icon" href={`mailto:${this.state.email}`}>
                            <i className="far fa-envelope"/>
                        </a>
                    </div>
                    <div className="profile-tagline">
                        {this.state.headline}
                    </div>
                    <div className="container">
                        <div className="m-2 mb-4">
                            <SocialWidget socialLinks={this.state.socialLinks} />
                        </div>
                        <BioCard bio={boldFormatter(urlFormatter(this.state.bio))} />
                        <SpecializationHolder specializations={this.state.specializations} />
                        <ExperienceHolder experiences={this.state.experiences} />
                        <EducationHolder educations={this.state.educations} />
                        <AchievementsHolder achievements={this.state.achievements} />
                        <PublicationHolder publications={this.state.publications} />
                        <ProjectsHolder projects={this.state.projects} />
                        <CertificationHolder certifications={this.state.certifications} />
                        <RecommendationHolder opinions={this.state.opinions}/>
                    </div>
                </div>
            </div>
        );
    }

    setOpenGraphTags() {
        document.querySelector("[property=\"og:title\"]").content = this.state.profileName;
        document.querySelector("[property=\"og:site_name\"]").content = this.state.profileName;
        document.querySelector("[property=\"og:description\"]").content = this.state.headline;
        document.querySelector("[property=\"og:url\"]").content = this.state.homepage;
        document.querySelector("[property=\"og:type\"]").content = "profile";
    }
}

ProfileView.propTypes = {
    profileData: PropTypes.object.isRequired
};

export default ProfileView;
