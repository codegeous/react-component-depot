import React from "react";
import Header from "components/Header";
import BuiltWithReactList from "./builtWithReact";

const BuiltWithReact = () => {
    return (
        <>
            <Header title="Popular Websites built with react" />

            <div className="row w-100 pt-4">
                <div className="col mb-3 col-12">
                    <h5 className="mb-5 text-info">
                        Below is the list of websites built with reactJS and
                        verified by react dev tool extension, with their
                        valuation or funding details as of May, 2020. All the
                        funding/valuation information was obtained from
                        crunchbase.com
                    </h5>
                    {BuiltWithReactList.map(website => {
                        return (
                            <p>
                                <a
                                    href={website.website}
                                    className="text-primary mr-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {website.name}
                                </a>

                                {website.funding && (
                                    <a
                                        href={website.crunchbase}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        - ({website.funding})
                                    </a>
                                )}
                            </p>
                        );
                    })}

                    <p className="">
                        <h3>And many more...</h3>
                    </p>
                </div>
            </div>
        </>
    );
};

export default BuiltWithReact;
