import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createContact } from "actions/contacts";

const AddContact = ({ onClose }) => {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ name: "", phone: "" });

    const updateFormValue = ({ target: { name, value } }) =>
        setInputs(inputObj => ({ ...inputObj, [name]: value }));

    const addContact = () => {
        console.log(inputs);
        dispatch(createContact({ ...inputs }));
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body id="add-contact-modal">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inputs.name}
                            name="name"
                            onChange={e => updateFormValue(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inputs.phone}
                            name="phone"
                            onChange={e => updateFormValue(e)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addContact}>
                    Add Contact
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddContact;
