import React from "react";

const DEFAULT_TABLE_CONFIG = {
  tableClassName: "rounded-table",
  headerClassName: "bg-primary text-white",
};

const Table = ({ columns, dataSource, config = {} }) => {
  const TABLE_CONFIG = {
    ...DEFAULT_TABLE_CONFIG,
    ...config,
  };

  const renderData = (data, column) => {
    if (typeof column.render === "function") {
      return column.render(data[column.key]);
    } else {
      return data[column.key];
    }
  };

  return (
    <table className={"table " + TABLE_CONFIG.tableClassName}>
      <thead className={TABLE_CONFIG.headerClassName}>
        <tr>
          {columns?.map((column, idx) => (
            <th key={idx}> {column.title} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((data, idx) => (
          <tr key={idx}>
            {columns?.map((column, index) => (
              <td key={index}>{renderData(data, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
