import React, { Component } from "react";
import PropTypes from "prop-types";

class SpecializationHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Specialization</h3>
                <ul>
                    {
                        this.props.specializations.map((specialization, index) => <li key={index}>
                            <p className="org-title" >
                                {specialization}
                            </p>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

SpecializationHolder.propTypes = {
    specializations: PropTypes.array
};

export default SpecializationHolder;
