import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ data, multiple = false }) => {
    const [active, setActive] = useState(0);

    return (
        <div className="custom-accordion">
            {data.map((tab, idx) => (
                <AccordionItem
                    key={idx}
                    {...tab}
                    active={active === idx}
                    multiple={multiple}
                    onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
                />
            ))}
        </div>
    );
};

const AccordionItem = ({ title, content, active, multiple, onToggle }) => {
    const [visiblity, setVisiblity] = useState(false);

    const isActive = () => (multiple ? visiblity : active);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        onToggle();
    };

    return (
        <div className={`card ${isActive() ? "accordion-active" : ""}`}>
            <div className="card-header" onClick={toogleVisiblity}>
                {title}
                <span className="accordion-icon">
                    <FontAwesomeIcon icon="chevron-right" />
                </span>
            </div>
            <div className="card-body">{content}</div>
        </div>
    );
};

export default Accordion;
