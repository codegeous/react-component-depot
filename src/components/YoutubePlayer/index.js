import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopVideoPlayer } from "actions/layout";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const YoutubePlayer = () => {
    const videoPlayer = useSelector(state => state.layout.videoPlayer);
    const dispatch = useDispatch();

    if (!videoPlayer.visible) {
        return null;
    }

    return (
        <Draggable handle=".handle">
            <div className="custom-youtube-player">
                <ResizableBox width={450} height={300}>
                    <iframe
                        id="player"
                        type="text/html"
                        style={{ width: "100%", height: "100%" }}
                        src={`https://www.youtube.com/embed/${videoPlayer.video}`}
                        frameborder="0"
                    ></iframe>

                    <div
                        className="close d-flex justify-content-center"
                        onClick={() => dispatch(stopVideoPlayer())}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="handle d-flex justify-content-center">
                        <i className="fas fa-arrows-alt"></i>
                    </div>
                </ResizableBox>
            </div>
        </Draggable>
    );
};

export default YoutubePlayer;
