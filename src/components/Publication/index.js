import React, { Component } from "react";
import PropTypes from "prop-types";

class PublicationHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Publication</h3>
                <ul>
                    {
                        this.props.publications.map((publication) => <li key={publication.title}>
                            <p className="org-title" >
                                <a href={publication.url}>
                                    {publication.title}
                                </a>
                            </p>
                            <table className="table-borderless">
                                <tbody>
                                    <tr className="text-left">
                                        <td className="text-left"><b>Published in</b></td>
                                        <td className="text-left pl-1">{publication.publisher}</td>
                                    </tr>
                                    {
                                        publication.doi
                                        && <tr>
                                            <td className="text-left"><b>DOI</b></td>
                                            <td className="text-left pl-1 word-break">{publication.doi}</td>
                                        </tr>
                                    }
                                    <tr className="text-left">
                                        <td className="text-left"><b>Year of</b></td>
                                        <td className="text-left pl-1">{publication.year}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

PublicationHolder.propTypes = {
    publications: PropTypes.array
};

export default PublicationHolder;
