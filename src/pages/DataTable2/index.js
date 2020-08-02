import React, { useEffect, useState, useMemo } from "react";
import Header from "components/Header";
import { TableHeader, Pagination, Search } from "components/DataTable";
import useFullPageLoader from "hooks/useFullPageLoader";
import ExternalInfo from "components/ExternalInfo";

const DataTable2 = () => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    const headers = [
        { name: "ID#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "User Name", field: "uname", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phone", field: "phone", sortable: false },
        { name: "DOB", field: "dob", sortable: false },
        { name: "Website", field: "url", sortable: true },
        { name: "Company", field: "company", sortable: true },
        { name: "Address", field: "address", sortable: true },
    ];

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch("https://dcoders-tutorial.herokuapp.com/mock/data?total=1000")
                .then((response) => response.json())
                .then((json) => {
                    hideLoader();
                    setComments(json.users);
                });
        };

        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    console.log(commentsData);
    return (
        <>
            <Header title="Building a data table in react" />

            <ExternalInfo page="datatable" />

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={(value) => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {commentsData.map((comment, idx) => {
                                return (
                                    <tr key={idx}>
                                        {headers.map((col, colIdx) => (
                                            <td key={`${idx}-${colIdx}`}>
                                                {comment[col.field]}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {loader}
        </>
    );
};

export default DataTable2;
