import React from "react";
import AppConfig from "App.config";

const withExternalInfo = Component => props => {
    const { page } = props;
    let links = {};
    if (page && AppConfig.links[page]) {
        links.code = AppConfig.links[page].code;
        links.tutorial = AppConfig.links[page].tutorial;
    }

    return <Component {...links} {...props} />;
};

export default withExternalInfo;
