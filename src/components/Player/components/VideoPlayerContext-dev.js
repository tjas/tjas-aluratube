import React from "react";

const VideoPlayerContext = React.createContext({
    show: false,
    setShow: (context, state) => {  context.show = state; },
    toggleShow: (context) => { 
        console.log("VideoPlayerProvider: Toggle Modal from", context.show, "to", !context.show);
        if(context.show === true) { context.setShow(context, false); }
        else { context.setShow(context, true); }
    }           
});

function VideoPlayerProvider(props) {
    const [show, setShow] = React.useState(false);
    //const [video, setVideo] = React.useState("");
    //console.log("[1] show: ", show, " / setShow: ", setShow);
    //console.log("[2] video: ", video, " / setVideo: ", setVideo);

    function toggleShow(){
        console.log("VideoPlayerProvider: Toggle Modal from", show, "to", !show);
        if(show === true) { setShow(false); }
        else { setShow(true); }
    }

    return (
        //<VideoPlayerContext.Provider value={{ show: show, video: video, setShow: setShow, setVideo: setVideo, toggleShow: toggleShow }}>
        <VideoPlayerContext.Provider value={{ show: show, setShow: setShow, toggleShow: toggleShow }}>
            {props.children}
        </VideoPlayerContext.Provider>
    );
}