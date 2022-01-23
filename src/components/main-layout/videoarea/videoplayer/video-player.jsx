import React from "react";
import VideoArea from "../video-area";

function VideoPlayer(props) {
    return (

        <div>
            <h1>{props.episode.title}</h1>
            <video src={props.episode.videoSource}>
            </video>
            <p>{props.episode.description}</p>
            <p>{props.episode.date}</p>
        </div>
    )
}

export default VideoPlayer
