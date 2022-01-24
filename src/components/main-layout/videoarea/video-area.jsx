import React, {useEffect, useState} from 'react'
import VideoPlayer from '../../../components/main-layout/videoarea/videoplayer/video-player';
import {getEpisode1, getEpisode2, getEpisode3, getEpisode4} from "../../../store/episodeSlice/episodeSlice";
import { useSelector} from "react-redux";

function VideoArea() {

    let episodeState = useSelector((state) => state.episode.episode)

    useEffect(() => {
        console.log("video area: video area mounted")
        console.log(episodeState.videoSource)
    })



    return (
        <div>
            <VideoPlayer episode={episodeState}/>
        </div>
    )
}


export default VideoArea;
