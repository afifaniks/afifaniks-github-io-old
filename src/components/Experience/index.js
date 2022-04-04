import React from "react";
import PropTypes from "prop-types";
import CompanyProject from "./CompanyProject";

function ExperienceHolder(props) {
    return (
        <div>
            <h3 className="section-title">Work Experience</h3>
            <ul>
                {
                    props.experiences.map((workExperience) => <>
                        <li key={workExperience.companyName}>
                            <p className="key-element">
                                <a href={workExperience.companyWebsite}>
                                    {workExperience.companyName}
                                </a>
                            </p>
                            {
                                workExperience.history.map((history) => <div key={history.designation}
                                    className="text-left work-history">
                                    <p className="m-0 p-0"><b>{history.designation}</b></p>
                                    <small>{history.from} - {history.to}</small>
                                    <CompanyProject projects={history.affiliatedProjects} />
                                </div>)
                            }
                        </li>
                    </>)
                }
            </ul>
        </div>
    );
}

ExperienceHolder.propTypes = {
    experiences: PropTypes.array
};

export default ExperienceHolder;
