import "./videohome.css";
import React, { Component } from "react";
import Video from "../../Video/bonitavideoprincipal2.mp4"


export default class VideoHome extends Component {
    render() {
        return (
            <div className="video-inicio">
                <video autoPlay loop muted>
                    <source src={Video} type="video/mp4"></source>
                </video>
            </div>
        )
    }
} 