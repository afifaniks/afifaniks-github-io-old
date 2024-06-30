import PropTypes from "prop-types";
import React, { Component } from "react";

class ProjectsHolder extends Component {
    render() {
        return (
            <div>
                <div className="section-title d-flex">
                    <h3 className="m-0">Projects</h3>
                </div>
                <ul>
                    {
                        this.props.projects.map((project) => <li key={project.title}>
                            <div>
                                <div className="key-element mb-0">
                                    <a href={project.url}>
                                        {project.title}
                                    </a>
                                </div>
                                {
                                    project.stack
                                    && <div className="text-left">
                                        Using <b>{project.stack.join(", ")}</b>
                                    </div>
                                }
                            </div>
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
