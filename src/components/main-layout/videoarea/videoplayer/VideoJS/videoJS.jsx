import React, {useEffect, useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import {useSelector} from "react-redux";

export const VideoJS = ( props ) => {

    const episodeState = useSelector((state) => state.episode.episode)

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const { options, onReady } = props;

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });
        } else {
            // you can update player here [update player through props]
            let player = playerRef.current;
            options.autoplay = true;
            options.sources.src = episodeState.videoSource
            options.sources.type = "application/dash+xml"
            player.src({src: options.sources.src, type: options.sources.type})
            player.autoplay(options.autoplay);
        }
    }, [options, videoRef, episodeState, onReady]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
        </div>
    );
}

export default VideoJS;
