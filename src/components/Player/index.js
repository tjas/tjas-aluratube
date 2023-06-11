import React from "react";
import { StyledVideoPlayer } from "./styles";
import styled from "styled-components";

import { BsXLg, BsPlayFill, BsCollectionPlay } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */
import ReactFocusLock from "react-focus-lock";

export const initial = {
    initialValues: { 
        isOpen: false, 
        title: "",
        thumb:"",
        url: ""
    }
}

// Custom Hook
//function usePlayer({isOpen, title, thumb, url, ...props}) {
//function usePlayer() {
function usePlayer(props) {
    const [values, setValues] = React.useState(initial.initialValues);
    //const [values, setValues] = React.useState(props);
    // const [values, setValues] = React.useState({
    //     isOpen: props.isOpen ? props.isOpen : initial.initialValues.isOpen,
    //     title: props.title ? props.title : initial.initialValues.title,
    //     thumb: props.thumb ? props.thumb : initial.initialValues.thumb,
    //     url: props.url ? props.url : initial.initialValues.url,
    // });

    React.useEffect(() => {
        // empty dependencies array
        // RUNS ONLY ONCE AFTER first render

        // console.log(
        //     "1)", localStorage.getItem("playerValues").isOpen,
        //     "2)", localStorage.getItem("playerValues").title,
        //     "3)", localStorage.getItem("playerValues").thumb,
        //     "4)", localStorage.getItem("playerValues").url);

        console.log("[1] playerValues:", localStorage.getItem("playerValues"));
        console.log("[2] playerValues:", JSON.stringify(values));
        console.log("[3] playerValues:", JSON.parse(localStorage.getItem("playerValues")));

        if(!localStorage.getItem("playerValues")){
            localStorage.setItem("playerValues", JSON.stringify(initial.initialValues));
        } else {
            setValues({
                isOpen: props.isOpen ? props.isOpen : JSON.parse(localStorage.getItem("playerValues")).isOpen,
                title: props.title ? props.title : JSON.parse(localStorage.getItem("playerValues")).title,
                thumb: props.thumb ? props.thumb : JSON.parse(localStorage.getItem("playerValues")).thumb,
                url: props.url ? props.url : JSON.parse(localStorage.getItem("playerValues")).url,

                //isOpen: props.isOpen ? props.isOpen : localStorage.getItem("playerValues").isOpen,
                //title: props.title ? props.title : localStorage.getItem("playerValues").title,
                //thumb: props.thumb ? props.thumb : localStorage.getItem("playerValues").thumb,
                //url: props.url ? props.url : localStorage.getItem("playerValues").url,

                // isOpen: localStorage.getItem("playerValues").isOpen,
                // title: localStorage.getItem("playerValues").title,
                // thumb: localStorage.getItem("playerValues").thumb,
                // url: localStorage.getItem("playerValues").url,

            });
        };
      }, [])

    React.useEffect(() => {
        //if(!localStorage.getItem("playerValues")){
        //    localStorage.setItem("playerValues", JSON.stringify(initial.initialValues));
        //};
        localStorage.setItem("playerValues", JSON.stringify(values));
        console.log("LocalStorage changed:", JSON.parse(localStorage.getItem("playerValues")));
    }, [values]);
    
    return {
        values,
        isOpen: () => values.isOpen,
        title: () => values.title,
        thumb: () => values.thumb,
        url: () => values.url,
        toggleIsOpen: () => { 
            //console.log("usePlayer: [1] Toggle Modal from", values.isOpen, "to", !values.isOpen);
            if(values.isOpen === true) { 
                setValues({ ...values, isOpen: false })
            }
            else setValues({ ...values, isOpen: true }); 
        },
        setTitle: (title) => setValues({ ...values, title: title }),
        setThumb: (thumb) => setValues({ ...values, thumb: thumb }),
        setUrl: (url) => setValues({ ...values, url: url }),
    };
}

export default function VideoPlayerModal(props) {

    //const player = usePlayer(props.isOpen, props.video.title, props.video.thumb, props.video.url);
    const player = usePlayer({...props.video});
    //const player = usePlayer();

    //player.setUrl(props.video.url);
    //player.setTitle(props.video.title);
    //player.setThumb(props.video.thumb);

    function toggleModal(e) {
        player.toggleIsOpen();
    }

    return (
        <StyledVideoPlayer
            isOpen={player.isOpen}
            onEscapeKeydown={() => toggleModal()}
            onBackgroundClick={() => toggleModal()}
            role="dialog"
            aria-modal={true}
            aria-labelledby="modal-label">
            <ReactFocusLock>

            {player.isOpen()
                ? (
                    <div id="dv-modal" className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <div className="modal-title"></div> */}
                                <div className="modal-close">
                                    <button 
                                        type="button" 
                                        onClick={() => {
                                            toggleModal();
                                        }}>
                                            <BsXLg />
                                    </button>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="video">
                                    <iframe 
                                        // src={() => {
                                        //     const id = player.values.url.split("?v=")[1];
                                        //     const embedlink = ["https://www.youtube.com/embed/", id].join();
                                        //     console.log("EmbededLink:", embedlink);
                                        //     return embedlink;
                                        // }}
                                        src={`https://www.youtube.com/embed/${player.values.url.split("?v=")[1]}`}
                                        title={player.values.title}
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen>
                                    </iframe>

                                </div>
                            </div>
                            {/* <div className="modal-footer">
                            </div> */}
                        </div>
                    </div>
                )
                : false
            }
            </ReactFocusLock>
        </StyledVideoPlayer>
    )
}

const StyledPlayerButton = styled.button`
    padding: 8px 12px;
    border-radius: 5px;
    //border: none;
    border: 1px solid ${({ theme }) => theme.borderBase};
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.textColorBase};
    font-size: 16px;
    svg {
        translate: 0 2px;
        font-size: 16px;
    }
`;

export function PlayerButton(props) {

    const player = usePlayer(props);

    function toggleModal(e) {
        player.toggleIsOpen();
    }

    return (
        <>

            <StyledPlayerButton
                nameClass="player-button"
                type="button"
                onClick={() => toggleModal()}>
                {/* <BsCollectionPlay title="Video Player" /> */}
                <BsPlayFill title="Video Player" /> Video Player
            </StyledPlayerButton>
            <StyledVideoPlayer
                isOpen={player.isOpen}
                onEscapeKeydown={() => toggleModal()}
                onBackgroundClick={() => toggleModal()}
                role="dialog"
                aria-modal={true}
                aria-labelledby="modal-label">
                <ReactFocusLock>

                {player.isOpen()
                    ? (
                        <div id="dv-modal" className="modal">
                            <div className="modal-content">
                                <div className="modal-header">
                                    {/* <div className="modal-title"></div> */}
                                    <div className="modal-close">
                                        <button 
                                            type="button" 
                                            onClick={() => {
                                                toggleModal();
                                            }}>
                                                <BsXLg />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <div className="video">
                                        <iframe 
                                            src={`https://www.youtube.com/embed/${player.values.url.split("?v=")[1]}`}
                                            title={player.values.title}
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen>
                                        </iframe>

                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                </div> */}
                            </div>
                        </div>
                    )
                    : false
                }
                </ReactFocusLock>
            </StyledVideoPlayer>

        </>
    );
}
