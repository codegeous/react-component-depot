import React, { useState } from "react";
import Header from "components/Header";
import AddContact from "components/AddContact";
import ContactCard from "components/ContactCard";

import { useSelector } from "react-redux";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

/**
 * Redux CURD Operations
 *
 * 1. Read data from redux store
 * 2. Create data in store
 * 3. Update a data in store
 * 4. Delete the data from store
 */

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.list);

    const [contactFormVisiblity, setContactFormVisiblity] = useState(false);

    const toggleContactFormVisiblity = () =>
        setContactFormVisiblity(visiblity => !visiblity);

    return (
        <>
            <Header title="Redux CRUD Operations (Create, Read, Update and Delete)" />

            <ExternalInfo page="contactListCRUD" />

            <div className="row">
                <div className="col text-center">
                    <h2>Manage contacts!!!</h2>
                    <p>
                        This demo performs CRUD operation in redux store. You
                        can add, edit and delete a contact in the below demo
                    </p>

                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-left">
                                <h4 className="d-inline">Contact List</h4>
                                <span
                                    className="float-right mt-1 cursor-pointer"
                                    onClick={toggleContactFormVisiblity}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <ul className="list-group list-group-flush">
                                {contacts.map((contact, index) => (
                                    <ContactCard
                                        {...contact}
                                        index={index}
                                        key={contact.name}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {contactFormVisiblity && (
                        <AddContact onClose={toggleContactFormVisiblity} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ContactList;
