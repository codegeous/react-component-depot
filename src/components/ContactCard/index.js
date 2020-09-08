import React, { useState } from "react";
import { updateContact, deleteContact } from "actions/contacts";
import { useDispatch } from "react-redux";

const ContactCard = ({ name, phone, index }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [inputs, setInputs] = useState({ name, phone });

    const updateFormValue = ({ target: { name, value } }) =>
        setInputs((inputObj) => ({ ...inputObj, [name]: value }));

    const toggleEditMode = () => setEditMode((mode) => !mode);

    const updateContactData = () => {
        dispatch(updateContact({ ...inputs }, index));
        toggleEditMode();
    };

    const deleteContactFromList = () => {
        dispatch(deleteContact(index));
    };

    return (
        <li className="list-group-item">
            <div className="card border-0">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img
                            src={`https://api.adorable.io/avatars/90/${name}.png`}
                            alt=""
                            className="img-thumbnail border-secondary rounded-circle"
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body py-1 px-2 text-left">
                            <h5 className="card-title">
                                {!editMode && name}
                                {editMode && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={inputs.name}
                                        name="name"
                                        onChange={(e) => updateFormValue(e)}
                                    />
                                )}
                            </h5>
                            <p className="card-text">
                                {!editMode && phone}
                                {editMode && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={inputs.phone}
                                        name="phone"
                                        onChange={(e) => updateFormValue(e)}
                                    />
                                )}
                            </p>
                            <p className="card-text">
                                {!editMode && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-outline-info mr-2"
                                            onClick={toggleEditMode}
                                        >
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={deleteContactFromList}
                                        >
                                            <i className="fas fa-trash mr-2"></i>
                                            Delete
                                        </button>
                                    </>
                                )}

                                {editMode && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-outline-success  mr-2"
                                            onClick={updateContactData}
                                        >
                                            <i className="fas fa-save mr-2"></i>
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary mr-2"
                                            onClick={toggleEditMode}
                                        >
                                            <i className="fas fa-times-circle mr-2"></i>
                                            Cancel
                                        </button>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ContactCard;
