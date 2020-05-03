import React from "react";
import Burger from "resources/images/burger.svg";
import Four from "resources/images/four.svg";
import Header from "components/Header";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
    const history = useHistory();

    return (
        <>
            <Header title="" />

            <div className="row w-100 pt-4">
                <div className="col mb-3 col-12 text-center">
                    <img
                        src={Four}
                        className="mr-2"
                        alt=""
                        style={{ width: "150px" }}
                    />
                    <img
                        src={Burger}
                        className="mr-2"
                        alt=""
                        style={{ width: "250px" }}
                    />
                    <img
                        src={Four}
                        className=""
                        alt=""
                        style={{ width: "150px" }}
                    />
                </div>
                <div className="col text-center mt-4">
                    <h3>Page you're trying to access is not available</h3>
                    <Button
                        variant="info"
                        className="/cursor-pointer"
                        onClick={() => history.push("/")}
                    >
                        Go to Home Page
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
