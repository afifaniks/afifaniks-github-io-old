import React, { Component } from "react";
import PropTypes from "prop-types";

class CertificationHolder extends Component {
    render() {
        return (
            <div>
                <div className="section-title d-flex">
                    <h3>Certifications</h3>
                    <small>&nbsp;<b>({this.props.certifications.length})</b></small>
                </div>
                <ul>
                    {
                        this.props.certifications.map((certificate) => <li key={certificate.title}>
                            <p className="key-element" >
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
