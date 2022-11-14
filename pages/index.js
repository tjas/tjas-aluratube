import React from "react";
import config from "../config.json";
import styled from "styled-components";

import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";
import { Banner } from "../src/components/Banner";
import { Favorites } from "../src/components/Favorites";
import { Footer } from "../src/components/Footer";

function HomePage() {
    
    //const defaultDark = false;
    //const [theme, setTheme] = React.useState(defaultDark ? 'dark' : 'light');
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    // References to use LocalStorage to keep variables between refreshes (i.e., the theme selected),
    // and to verify if any local variable exists or has previous value:
    // https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
    // https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     //console.log("Switched theme to: " + newTheme);
    //     setTheme(newTheme);
    // }

    return (
        <>
        {/* <div data-theme={theme}> */}
            {/* <CSSReset /> */}
            <div style={{
                "display": "flex",
                "flexDirection": "column",
                "flex": 1,
                //"background-color": "${({ theme }) => theme.backgroundBase)",
                //"color": "${({ theme }) => theme.textColorBase)"
            }}>
                {/* Prop Drilling */}
                <StyledHeader>
                    <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                    <Banner banner={config.user.banner} />
                    {/* <div align="right" style={{"text-transform": "capitalize", "color": "white", "font-size": "22px", "translate": "0px -35px", "padding-right": "48px" }}>{theme} Theme</div> */}
                    <Header user={config.user} />
                </StyledHeader>
                <StyledContent>
                    <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
                    <Favorites favorites={config.favorites} />
                </StyledContent>
                <StyledFooter>
                    <Footer />
                </StyledFooter>
                
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.section`
    /* background-color: ${({ theme }) => theme.backgroundLevel1}; */
`;

const StyledContent = styled.section`
    /* translate: 0 -50px; */
`;

const StyledFooter = styled.section`
    /* translate: 0 -50px; */
    height: 80px;
`;
