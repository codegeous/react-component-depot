import React from "react";

const AutoCompleteItem = ({
    name,
    capital,
    region,
    flag,
    onSelectItem,
    isHighlighted
}) => {
    return (
        <li
            className={`list-group-item ${
                isHighlighted ? "active highlighted" : ""
            }`}
            onClick={onSelectItem}
        >
            <div className="row">
                <div className="col text-left">
                    <p className="mb-0 font-weight-bold line-height-1">
                        {name}{" "}
                        <img src={flag} alt="" style={{ width: "30px" }} />
                    </p>
                    <p className="mb-0 badge badge-primary">{region}</p>
                    <p className="mb-0 ml-2 badge badge-secondary">{capital}</p>
                </div>
            </div>
        </li>
    );
};

export default AutoCompleteItem;
