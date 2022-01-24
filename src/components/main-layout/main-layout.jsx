import * as React from 'react';
import VideoArea from './videoarea/video-area'
import style from './main-layout.module.css'

// import {useState} from "react";

function MainLayout() {
    return (
        <div className="wrapper">
        <div className={style.homer}>
            <h1>Hello</h1>
            {/*<p>( . ) ( . )</p>*/}
            <p>Test text</p>
            {/*<h1>Booba</h1>*/}
            <VideoArea></VideoArea>

        </div>
        </div>
    )
}

export default MainLayout
