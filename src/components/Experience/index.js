import React, { Component } from "react";
import PropTypes from "prop-types";

class ExperienceHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Work Experience</h3>
                <ul>
                    {
                        this.props.experiences.map((workExperience) => <li key={workExperience.companyName}>
                            <p className="org-title" >
                                <a href={workExperience.companyWebsite}>
                                    {workExperience.companyName}
                                </a>
                            </p>
                            <table className="table-borderless">
                                <tbody>
                                    <tr className="text-left">
                                        <td className="text-left"><b>Designation</b></td>
                                        <td className="text-left pl-1">{workExperience.designation}</td>
                                    </tr><tr>
                                        <td className="text-left"><b>Period</b></td>
                                        <td className="text-left pl-1">{workExperience.from} - {workExperience.to}</td>
                                    </tr>
                                </tbody>
                            </table>
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
