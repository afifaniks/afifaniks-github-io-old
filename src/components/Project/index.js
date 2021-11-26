import React, { Component } from "react";
import PropTypes from "prop-types";

class ProjectsHolder extends Component {
    render() {
        return (
            <div>
                <div className="section-title d-flex">
                    <h3 className="m-0">Projects</h3>
                    <i className="fas fa-info-circle info-icon"
                        data-toggle="tooltip"
                        title="Only open sourced and personal projects are listed here"/>
                </div>
                <ul>
                    {
                        this.props.projects.map((project) => <li key={project.title}>
                            <p className="key-element" >
                                <a href={project.url}>
                                    {project.title}
                                </a>
                            </p>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

ProjectsHolder.propTypes = {
    projects: PropTypes.array
};

export default ProjectsHolder;
