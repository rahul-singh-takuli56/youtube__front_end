import React from "react";
import './Video.css';

function Video({ title, channel, time, views, verified }) {
    return (
        <>
            <div className="container">
                <div className="pic_img">
                    <img src="https://picsum.photos/id/1/200/300" alt="image" />
                </div>
                <div className="title"> {title} </div>
                <div className="channel">{channel} {verified && ' ✅ '}</div>
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
            </div>
        </>
    );
}


export default Video