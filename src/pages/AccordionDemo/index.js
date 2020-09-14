import React, { useState } from "react";
import Header from "components/Header";
import Accordion from "components/Accordion";
import ExternalInfo from "components/ExternalInfo";

const AccordionDemo = () => {
    const AccordionData = [
        {
            title: "Why can’t I sign in?",
            content:
                "Make sure you’re trying to sign in to the right application system. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.",
        },
        {
            title: "Where can I find out about funding?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
        },
        {
            title: "How can I make a change to my application?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
        },
    ];

    return (
        <>
            <Header title="Building Accordion in ReactJS" />

            <ExternalInfo page="accordion" />

            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="row">
                        <div className="col-12">
                            <h3>Frequently Asked Questions</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-left">
                            <Accordion data={AccordionData} />
                        </div>
                        <div className="col-12 text-left mt-4">
                            <h4>Accordion with "multiple" option</h4>
                            <Accordion data={AccordionData} multiple={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionDemo;
