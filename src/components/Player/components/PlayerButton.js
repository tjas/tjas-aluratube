import React from "react";
import VideoPlayerModal, { initial, usePlayer, VideoPlayerContext } from "..";

export default function PlayerButton(props) {
    //const [player, setPlayer] = React.useState(initial.initialValues);
    //const contexto = React.useContext(VideoPlayerContext);
    //const [player, setPlayer] = usePlayer();
    //const player = usePlayer();
    //const show = false;
    const [show, setShow] = React.useState(false);


    // if (!JSON.parse(window.localStorage.getItem("playerValues")).isOpen) {
    //     window.localStorage.setItem("playerValues", JSON.stringify(initial.initialValues));
    //     console.log("localStorage initial setItem playerValues:", JSON.stringify(initial.initialValues));
    // };
    //const [isOpen, setIsOpen] = React.useState(JSON.parse(window.localStorage.getItem("playerValues")));
    //const [values, setValues] = React.useState(initial.initialValues);
    //let modal = false;

    // function toggleModal(e) {
    //   setIsOpen(!isOpen);
    //   //contexto.toggleModal();
    // }

    React.useEffect(() => {
        // if(!localStorage.getItem("playerValues")){
        //     localStorage.setItem("playerValues", JSON.stringify(initial.initialValues));
        //     //console.log("localStorage initial playerValues:", JSON.stringify(initial.initialValues));
        // };
        //setIsOpen(!isOpen);
        //modal = isOpen;
        //localStorage.setItem("playerValues", player);
        console.log("Menu modal button clicked! isOpen = ", show);
        //setShow(JSON.parse(localStorage.getItem("playerValues").isOpen));
        //setIsOpen(!isOpen);
        //setShow(!show);
    }, [show]);

    return (
        <>

            <button
                type="button"
                style={{ "padding": "8px" }}
                //onClick={contexto.toggleModal}>
                //onClick={() => setIsOpen(!isOpen)}>
                onClick={() => {
                    //setShow(JSON.parse(localStorage.getItem("playerValues").isOpen) || false);
                    //setShow(localStorage.getItem("playerValues").isOpen);
                    setShow(!show);
                }}
                // onClick={() => {
                //     setPlayer({
                //         ...player,
                //         isOpen: !player.isOpen
                //     })
                // }}
                >
                Open Modal Player
            </button>
            {/* {contexto.isOpen  */}
            {/* {player.isOpen */}
                {/* ? <VideoPlayerModal isOpen={contexto.isOpen}/> */}
                {/* ? <VideoPlayerModal isOpen={isOpen}/> */}
                <VideoPlayerModal isOpen={show} />
                {/* ? <VideoPlayerModal isOpen={player.isOpen} /> */}
                {/* : false */}
            {/* } */}

        </>
    );
}