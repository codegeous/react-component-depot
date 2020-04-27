export const actionTypes = {
    CREATE_CONTACT: "Contact/create",
    UPDATE_CONTACT: "Contact/update",
    DELETE_CONTACT: "Contact/delete"
};

export function createContact(contact) {
    return dispatch => {
        return dispatch({ type: actionTypes.CREATE_CONTACT, contact });
    };
}

export function updateContact(contact, index) {
    return dispatch => {
        return dispatch({ type: actionTypes.UPDATE_CONTACT, contact, index });
    };
}

export function deleteContact(index) {
    return dispatch => {
        return dispatch({ type: actionTypes.DELETE_CONTACT, index });
    };
}
