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
                            <p className="key-element" >
                                <a href={workExperience.companyWebsite}>
                                    {workExperience.companyName}
                                </a>
                            </p>
                            {
                                workExperience.history.map((history, index) => <div key={history.designation} className="text-left">
                                    <p className="m-0 p-0"><b>{history.designation}</b></p>
                                    <small>{history.from} - {history.to}</small>
                                    {
                                        index < workExperience.history.length - 1 ? <hr className="width-20"/> : <></>
                                    }
                                </div>)
                            }
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
