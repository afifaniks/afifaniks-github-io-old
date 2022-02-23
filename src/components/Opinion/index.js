import React, { Component } from "react";
import PropTypes from "prop-types";

class OpinionHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Opinions</h3>
                <div className="container">
                    <div className="opinion-quote p-l-2">
                        {
                            this.props.opinions.map((opinion) => <div className="row d-flex align-items-center quote-style justify-text p-2"
                                key={opinion.provider}>
                                <div className="col m-1">
                                    <figure className="note note-primary">
                                        <p>{opinion.body}</p>
                                        <p className="blockquote-footer mt-1">{opinion.provider}</p>
                                    </figure>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

OpinionHolder.propTypes = {
    opinions: PropTypes.array
};

export default OpinionHolder;
