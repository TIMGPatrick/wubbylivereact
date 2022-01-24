import React, {useEffect, useRef} from "react";
import VideoJS from './VideoJS/videoJS'
import {useSelector} from "react-redux";

function VideoPlayer(props) {

    const playerRef = useRef(null);

    useEffect(() => {
        console.log(episodeState.videoSource)
    })

    let episodeState = useSelector((state) => state.episode.episode)

    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        aspectRatio: "16:9",
        sources: [{
            src: episodeState.videoSource,
            type: 'application/dash+xml'
        }]
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });
    };

    // const changePlayerOptions = () => {
    //   // you can update the player through the Video.js player instance
    //   if (!playerRef.current) {
    //     return;
    //   }
    //   // [update player through instance's api]
    //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
    //   playerRef.current.autoplay(false);
    // };

    return (
        <>
            <div>{episodeState.title}</div>

            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

            <div>{episodeState.description}</div>
            <div>{episodeState.date}</div>
        </>
    );
}

export default VideoPlayer
