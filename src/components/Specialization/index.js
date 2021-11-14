import React, { Component } from "react";
import PropTypes from "prop-types";

class SpecializationHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Specialization</h3>
                <div className="row p-l-2">
                    {
                        this.props.specializations.map((specialization) => <div className="key-element col-lg-4 col-md-6 text-left"
                            key={specialization}>
                            {specialization}
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

SpecializationHolder.propTypes = {
    specializations: PropTypes.array
};

export default SpecializationHolder;
