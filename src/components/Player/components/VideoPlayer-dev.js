import React from "react";
import { VideoPlayerContext } from "./VideoPlayerContext";

import { BsXLg } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

function VideoPlayer(props) {
    const context = React.useContext(VideoPlayerContext);
    //console.log("VideoPlayer: ", props);

    // function toogleVisibility(){
    //     //context.toggleShow;
    //     if(context.show === true) { context.setShow(false); }
    //     else { context.setShow(true); }
    //     //console.log("toogleVisibility()");
    //     console.log("VideoPlayer context: ", context);
    // }


    return (
        context.show ?
        <StyledVideoPlayer>
        {/* <div id="dv-modal" className="modal"> */}
        <div id="dv-modal" className="modal" style={{ display: context.show ? 'block' : 'none' }}>
        {/* <div id="dv-modal" className="modal" style={{ display: context.show ? 'block' : 'none' }}> */}
        {/* <div id="dv-modal" className="modal" style={{ display: props.showPlayer ? "block" : "none" }}> */}
        {/* <div id="dv-modal" className="modal" open={context.show}> */}
            <div className="modal-content">

                <div className="modal-header">
                    <div className="close">
                        <button type="button" onClick={ () => context.toggleShow() }><BsXLg /></button>
                    </div>
                    {/* <h1>Meu modal com HTML</h1> */}
                </div>

                <div className="modal-body">
                    <p>Integer in augue felis. Quisque bibendum luctus sapien in egestas. Proin ullamcorper tempus eleifend.
                        Sed at sollicitudin libero. Maecenas sodales condimentum sapien vel mattis. Nam lacinia risus vel
                        nisl venenatis rhoncus. Duis sit amet massa maximus, mollis mi ac, pellentesque purus. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc dictum neque
                        faucibus fringilla pellentesque. Phasellus malesuada aliquet augue. Mauris at eleifend risus, sit
                        amet scelerisque augue.</p>
                        
                        {/* <img src="https://satellasoft.com/img/artigos/2020/08/260/steam-store.webp" alt="The Witcher" style="width: 100%;"> */}
                        </div>
                        
                <div className="modal-footer">
                </div>

            </div>
        </div>
        </StyledVideoPlayer>
        :
        <></>
    )

}