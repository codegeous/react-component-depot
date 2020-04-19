export const actionTypes = {
    TOGGLE_NAVBAR: "Layout/TOGGLE_NAVBAR"
};

export function toggleNavbar() {
    return dispatch => {
        return dispatch({ type: actionTypes.TOGGLE_NAVBAR });
    };
}
