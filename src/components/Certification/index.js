import React, { Component } from "react";
import PropTypes from "prop-types";
import CertificateTypes from "./CertificateTypes";

class CertificationHolder extends Component {
    getCertificateSection(certificateType, header) {
        return <div id={`certification_${certificateType}`}>
            <h5 align={"left"}>[{header}]</h5>
            <ul>
                {
                    this.props.certifications.filter((certificate) => certificate.type === certificateType).map((certificate) => <li key={certificate.title}>
                        <p className="key-element" >
                            <a href={certificate.url}>
                                {certificate.title}
                            </a>
                        </p>
                    </li>)
                }
            </ul>
        </div>;
    }

    render() {
        return (
            <div>
                <div className="section-title d-flex">
                    <h3>Courses/Certifications</h3>
                    <small>&nbsp;<b>({this.props.certifications.length})</b></small>
                </div>
                {
                    this.getCertificateSection(CertificateTypes.SOFTWARE_ENGINEERING, "Software Engineering")
                }
                {
                    this.getCertificateSection(CertificateTypes.AI_ML, "Artificial Intelligence/Machine Learning")
                }
                {
                    this.getCertificateSection(CertificateTypes.CLOUD_SERVICE, "Cloud Services")
                }
                {
                    this.getCertificateSection(CertificateTypes.WEB, "Web")
                }
                {
                    this.getCertificateSection(CertificateTypes.DATABASE, "Database")
                }
            </div>
        );
    }
}

CertificationHolder.propTypes = {
    certifications: PropTypes.array
};

export default CertificationHolder;
