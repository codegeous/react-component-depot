export const actionTypes = {
    TOGGLE_NAVBAR: "Layout/TOGGLE_NAVBAR",
    START_VIDEO_PLAYER: "VideoPlayer/start",
    STOP_VIDEO_PLAYER: "VideoPlayer/stop"
};

export function toggleNavbar() {
    return dispatch => {
        return dispatch({ type: actionTypes.TOGGLE_NAVBAR });
    };
}

export function startVideoPlayer(video) {
    return dispatch => {
        return dispatch({ type: actionTypes.START_VIDEO_PLAYER, video });
    };
}

export function stopVideoPlayer() {
    return dispatch => {
        return dispatch({ type: actionTypes.STOP_VIDEO_PLAYER });
    };
}
