import React from "react";

const ExternalInfo = ({ gitLink, youtubeLink }) => {
    return (
        <h6>
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <span class="badge badge-danger mr-2">
                    Youtube Tuorials Page{" "}
                    <i class="fas fa-external-link-alt"></i>
                </span>
            </a>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <span class="badge badge-secondary mr-2">
                    Github Component Page{" "}
                    <i class="fas fa-external-link-alt"></i>
                </span>
            </a>
        </h6>
    );
};

export default ExternalInfo;
