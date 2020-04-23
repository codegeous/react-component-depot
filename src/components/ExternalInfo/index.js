import React from "react";

const ExternalInfo = ({ gitLink, youtubeLink }) => {
    return (
        <h6 className="text-center">
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <span className="badge badge-danger mr-2 p-3">
                    Youtube Tuorial of this demo{" "}
                    <i className="fas fa-external-link-alt"></i>
                </span>
            </a>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <span className="badge badge-secondary mr-2 p-3">
                    Github Source Code{" "}
                    <i className="fas fa-external-link-alt"></i>
                </span>
            </a>
        </h6>
    );
};

export default ExternalInfo;
