import React, { useState, useEffect } from "react";

const Header = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    useEffect(() => {
        onSorting(sortingField, sortingOrder);
    }, [sortingField, sortingOrder]);

    const onSortChange = field => {
        setSortingField(field);
        setSortingOrder(order =>
            field === sortingField && order === "asc" ? "desc" : "asc"
        );
    };

    return (
        <thead>
            <tr>
                {headers.map(head => (
                    <HeaderItem
                        {...head}
                        key={head.field}
                        onSort={onSortChange}
                        sorting={
                            sortingField === head.field ? sortingOrder : null
                        }
                    />
                ))}
            </tr>
        </thead>
    );
};

const HeaderItem = ({ name, field, isSortable, onSort, sorting }) => {
    return (
        <th
            key={field}
            onClick={() => {
                return isSortable ? onSort(field) : null;
            }}
        >
            {name}
            {sorting === "asc" && (
                <span>
                    <i className="fas fa-arrow-down"></i>
                </span>
            )}
            {sorting === "desc" && (
                <span>
                    <i className="fas fa-arrow-up"></i>
                </span>
            )}
        </th>
    );
};

export default Header;
