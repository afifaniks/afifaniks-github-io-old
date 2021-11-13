import React, { Component } from "react";
import PropTypes from "prop-types";

class ExperienceHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Experience</h3>
                <ul>
                    {
                        this.props.experiences.map((workExperience) => <li key={workExperience.companyName}>
                            <p className="company-name" >
                                <a href={workExperience.companyWebsite}>
                                    {workExperience.companyName}
                                </a>
                            </p>
                            <p className="text-left m-1">
                                Designation: {workExperience.designation}
                            </p>
                            <p className="text-left m-1">
                                Period: {workExperience.from} - {workExperience.to}
                            </p>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

ExperienceHolder.propTypes = {
    experiences: PropTypes.array
};

export default ExperienceHolder;
