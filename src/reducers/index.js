import { combineReducers } from "redux";
import layout from "./layout";
import contacts from "./contacts";

export default combineReducers({
    layout,
    contacts
});
