import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "components/Header";
import { Waypoint } from "react-waypoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";

const InfiniteScrolling = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const ITEMS_PER_PAGE = 20;

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        if (!hasNextPage) return;

        const searchUserURL = `https://api.github.com/search/users?q=dcoder&page=${page}&per_page=${ITEMS_PER_PAGE}`;
        axios.get(searchUserURL).then(({ data: { items, total_count } }) => {
            if (items) {
                if (total_count === users.length + items.length) {
                    setHasNextPage(false);
                }

                setUsers(users => [...users, ...items]);
                setPage(page => page + 1);
            }
        });
    };

    const loadMoreData = () => {
        if (page > 1) {
            getData();
        }
    };

    return (
        <>
            <Header title="Infinite Scrolling Pagination" />

            <ExternalInfo page="infniteScrolling" />

            <div className="row">
                <div className="col text-center">
                    <h2>Infinite Scrolling Loader!!!</h2>
                    <p>....</p>
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-left">
                                <h4 className="d-inline">Github Users List</h4>
                            </div>

                            <ul className="list-group list-group-flush">
                                {users.map((user, idx) => (
                                    <UserCard
                                        key={idx}
                                        sno={idx + 1}
                                        {...user}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {hasNextPage && (
                        <Waypoint onEnter={loadMoreData}>
                            <h5 className="text-muted mt-5">
                                Loading data{" "}
                                <FontAwesomeIcon icon="spinner" spin={true} />
                            </h5>
                        </Waypoint>
                    )}
                </div>
            </div>
        </>
    );
};

const UserCard = ({ sno, login, id, avatar_url, html_url }) => {
    return (
        <li className="list-group-item">
            <div className="card border-0">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img
                            src={avatar_url}
                            className="img-thumbnail border-secondary rounded-circle"
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body py-1 px-2 text-left">
                            <h5 className="card-title">
                                {sno} . {login}
                            </h5>
                            <p className="card-text">{id}</p>
                            <p className="card-text">
                                <button
                                    type="button"
                                    className="btn btn-outline-info mr-2"
                                >
                                    <i className="fas fa-edit mr-2"></i>
                                    View On Github
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default InfiniteScrolling;
