import React, { Component } from "react";
import PropTypes from "prop-types";

class CertificationHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Certification</h3>
                <ul>
                    {
                        this.props.certifications.map((certificate) => <li key={certificate.title}>
                            <p className="org-title" >
                                <a href={certificate.url}>
                                    {certificate.title}
                                </a>
                            </p>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

CertificationHolder.propTypes = {
    certifications: PropTypes.array
};

export default CertificationHolder;
