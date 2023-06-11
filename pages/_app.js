import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { VideoPlayerProvider } from "../src/components/Player";
import RegisterVideo from "../src/components/RegisterVideo";
import { ModalProvider } from 'styled-react-modal';
//import Player from "../src/components/Player";


const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
        textColorLevel1: "#555555",
		textColorLevel2: "#888888"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
        textColorLevel1: "#CCCCCC",
		textColorLevel2: "#999999"
    }
};


// _app.js -> Global definitions of NextJS
// ThemeProvider -> Provide the theme globally for the app
// ColorModeProvider -> Provide the state of light or dark mode globally for the app

function ProviderWrapper(props) {
    const isDarkTheme = false;
    return (
        <ColorModeProvider initialMode={isDarkTheme ? "dark" : "light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function Root({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
    //console.log(contexto.mode);
    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <ModalProvider>
                <CSSReset />
                <Component {...pageProps} />
                {/* <VideoPlayerProvider /> */}
                <RegisterVideo />
            </ModalProvider>
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <Root {...props} />
        </ProviderWrapper>
    )
};