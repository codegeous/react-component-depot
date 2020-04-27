import { actionTypes } from "actions/contacts";

const initialState = {
    list: [{ name: "John Doe", phone: "500550512" }]
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_CONTACT:
            return {
                ...state,
                list: [...state.list, { ...action.contact }]
            };

        case actionTypes.UPDATE_CONTACT:
            return {
                ...state,
                list: state.list.map((contact, index) =>
                    index === action.index ? { ...action.contact } : contact
                )
            };

        case actionTypes.DELETE_CONTACT:
            return {
                ...state,
                list: state.list.filter(
                    (contact, index) => index !== action.index
                )
            };

        default:
            return { ...state };
    }
}
