import React from "react";
import Header from "components/Header";
import AppConfig from "App.config";

import { useDispatch } from "react-redux";
import { startVideoPlayer } from "actions/layout";
import ExternalInfo from "components/ExternalInfo";

const VideoPlayer = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Header title="Floating Youtube Video Players" />

            <ExternalInfo page="floatingYoutubePlayer" />

            <div className="row">
                <div className="col text-center">
                    <h2>Floating youtube player widget</h2>
                    <p>
                        Click the below videos to watch them in a floating
                        widget which you can drag and rezize
                    </p>

                    <div className="row py-5">
                        {AppConfig.youtubeVideos.map(video => {
                            return (
                                <div
                                    className="col-md-4 p-3 card-hover "
                                    key={video.id}
                                >
                                    <div
                                        className="card cursor-pointer"
                                        onClick={() =>
                                            dispatch(startVideoPlayer(video.id))
                                        }
                                    >
                                        <img
                                            className="card-img-top"
                                            src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                                            alt="Card cap"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {video.title}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoPlayer;
